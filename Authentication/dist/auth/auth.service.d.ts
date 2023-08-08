import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        nationalId: string;
        gender: import(".prisma/client").Gender;
        birthDate: Date;
        username: string;
        phoneNumber: string;
        isVerified: boolean;
    }>;
    login(user: any): Promise<{
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
    isUserVerified(username: string): Promise<boolean>;
}
