import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './Dtos/createUserDto';
import { VerifyOtpDto } from './Dtos/verifyOtpDto';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { AuthService } from './auth/auth.service';
import { SendOtpDto } from './Dtos/sendOtpDto';
import { LoginDto } from './Dtos/loginDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Post('/register')
  createUser(@Body() userCredentials: CreateUserDto) {
    return this.appService.createUser(userCredentials)
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async loginUser(@Request() req: any, @Body() loginCredentials: LoginDto){
    return await this.authService.login(req.user)
  }

  @UseGuards(LocalAuthGuard)
  @Post('/verifyOTP')
  verifyOTP(@Request() req: any, @Body() otpCredentials: VerifyOtpDto) {
    return this.appService.verifyOTP(otpCredentials, req.user)
  }

  @Post('/reSendOTP')
  async sendOTP(@Body() optCredentials: SendOtpDto) {
    return await this.appService.sendOTP(optCredentials)
  }

}
