import { HttpCode, Injectable } from '@nestjs/common';
import { CreateUserDto } from './Dtos/createUserDto';
import { PrismaService } from './prisma.service';
import { PrismaClient, Prisma } from '@prisma/client'
import axios from 'axios';
import { generate } from 'otp-generator';
import { AuthService } from './auth/auth.service';
import { VerifyOtpDto } from './Dtos/verifyOtpDto';
import { SendOtpDto } from './Dtos/sendOtpDto';

@Injectable()
export class AppService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) { }

  async createUser(userCredentials: CreateUserDto) {

    try {
      const user = await this.prisma.user.create({
        data: {
          createdAt: new Date(),
          username: userCredentials.username,
          password: userCredentials.password,
          phoneNumber: userCredentials.phoneNumber
        }
      })

      return await this.sendOTP({
        userId: user.id,
        phoneNumber: user.phoneNumber
      })

    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          console.log('Error: There is a unique constraint violation')
          return {
            status: 400,
            message: 'Bad request',
            data: `There is a unique constraint violation - ${e.meta.target} is used before`
          }
        } else {
          console.log('An error occured while creating user')
          return {
            status: 500,
            message: 'Internal server error',
            data: ''
          }
        }
      }
    }
  }

  async sendOTP(otpCredentials: SendOtpDto) {
    const otp = generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false });
    const message = `کد ورود به سامانه تیکت یار: ${otp}`

    try {
      await this.prisma.oTP.create({
        data: {
          createdAt: new Date(),
          phoneNumber: otpCredentials.phoneNumber,
          otp: otp,
          expiration: new Date(),
          userId: otpCredentials.userId
        }
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log('An error occured while creating OTP')
        return {
          status: 500,
          message: 'Internal server error',
          data: ''
        }
      }
    }

    const smsResponse = await axios({
      method: 'post',
      url: process.env.SMS_URL,
      data: {
        "lineNumber": process.env.SMS_SOURCE_NUMBER,
        "messageText": message,
        "mobiles": [otpCredentials.phoneNumber]
      },
      headers: {
        'X-API-KEY': process.env.SMS_API_KEY
      }
    })

    return {
      status: 200,
      message: 'ok',
      data: {
        smsStatus: {
          status: smsResponse.data.status,
          message: smsResponse.data.message
        }
      }
    }

  }

  async verifyOTP(otpCreidentials: VerifyOtpDto, user: any) {
    try {
      const otpRecord = await this.prisma.oTP.findFirst({
        where: {
          otp: otpCreidentials.otp
        }
      })

      if (!otpRecord) {
        console.log('Error: The record is not found - Invalid OTP')
        return {
          status: 400,
          message: 'Bad request',
          data: 'The OTP is invalid'
        }
      }

      await this.prisma.oTP.update({
        where: {
          id: otpRecord.id
        },
        data: {
          isUsed: true
        }
      })

      await this.prisma.user.update({
        where: {
          username: user.username,
        },
        data: {
          isVerified: true
        }
      })

    } catch (e) {
      console.log('Error: An error ocurred during verifing OTP')
      return {
        status: 500,
        message: 'Internal server error',
        data: ''
      }
    }

    return await this.authService.login(user)
  }



}
