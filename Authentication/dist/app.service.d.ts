import { CreateUserDto } from './Dtos/createUserDto';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';
import { VerifyOtpDto } from './Dtos/verifyOtpDto';
import { SendOtpDto } from './Dtos/sendOtpDto';
export declare class AppService {
    private prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
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
    sendOTP(otpCredentials: SendOtpDto): Promise<{
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
    verifyOTP(otpCreidentials: VerifyOtpDto, user: any): Promise<{
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
}
