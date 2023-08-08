import { AppService } from './app.service';
import { CreateUserDto } from './Dtos/createUserDto';
import { VerifyOtpDto } from './Dtos/verifyOtpDto';
import { AuthService } from './auth/auth.service';
import { SendOtpDto } from './Dtos/sendOtpDto';
import { LoginDto } from './Dtos/loginDto';
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    createUser(userCredentials: CreateUserDto): Promise<{
        status: number;
        message: string;
        data: string;
    } | {
        status: number;
        message: string;
        data: {
            smsStatus: {
                status: any;
                message: any;
            };
        };
    }>;
    loginUser(req: any, loginCredentials: LoginDto): Promise<{
        access_token: string;
        statusCode?: undefined;
        message?: undefined;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: string;
        access_token?: undefined;
    }>;
    verifyOTP(req: any, otpCredentials: VerifyOtpDto): Promise<{
        access_token: string;
        statusCode?: undefined;
        message?: undefined;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: string;
        access_token?: undefined;
    } | {
        status: number;
        message: string;
        data: string;
    }>;
    sendOTP(optCredentials: SendOtpDto): Promise<{
        status: number;
        message: string;
        data: string;
    } | {
        status: number;
        message: string;
        data: {
            smsStatus: {
                status: any;
                message: any;
            };
        };
    }>;
}
