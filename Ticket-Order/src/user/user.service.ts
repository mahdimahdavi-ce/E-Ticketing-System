import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { generate } from 'otp-generator';
import axios from "axios";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }

  async sendDiscountToUsers(reqBody: any) {
    const {discountName, startDate, endDate, discountPercentage, customerPhoneNumbers} = reqBody

    const discountCode = generate(10, { upperCaseAlphabets: true, specialChars: false, digits: true, lowerCaseAlphabets: false });
    const message = `کد تخفیف ${discountPercentage} درصدی شما در سامانه تیکت یار : ${discountCode}
مهلت استفاده 9 روز`


    const discount = await this.prisma.dicount.create({
      data: {
        discountName: discountName,
        discountPercentage: Number(discountPercentage),
        discountCode: discountCode,
        startDate: new Date(startDate),
        endDate: new Date(endDate)
      }
    })

    for(let phoneNumber of customerPhoneNumbers) {
      await axios({
        method: 'post',
        url: process.env.SMS_URL,
        data: {
          "lineNumber": process.env.SMS_SOURCE_NUMBER,
          "messageText": message,
          "mobiles": [phoneNumber]
        },
        headers: {
          'X-API-KEY': process.env.SMS_API_KEY
        }
      })
    }

    return {discountCode : discountCode}


    

  }
}
