"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const client_1 = require("@prisma/client");
const axios_1 = require("axios");
const otp_generator_1 = require("otp-generator");
const auth_service_1 = require("./auth/auth.service");
let AppService = class AppService {
    constructor(prisma, authService) {
        this.prisma = prisma;
        this.authService = authService;
    }
    async createUser(userCredentials) {
        try {
            const user = await this.prisma.user.create({
                data: {
                    createdAt: new Date(),
                    username: userCredentials.username,
                    password: userCredentials.password,
                    phoneNumber: userCredentials.phoneNumber
                }
            });
            return await this.sendOTP({
                userId: user.id,
                phoneNumber: user.phoneNumber
            });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    console.log('Error: There is a unique constraint violation');
                    return {
                        status: 400,
                        message: 'Bad request',
                        data: `There is a unique constraint violation - ${e.meta.target} is used before`
                    };
                }
                else {
                    console.log('An error occured while creating user');
                    return {
                        status: 500,
                        message: 'Internal server error',
                        data: ''
                    };
                }
            }
        }
    }
    async sendOTP(otpCredentials) {
        const otp = (0, otp_generator_1.generate)(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false });
        const message = `کد ورود به سامانه تیکت یار: ${otp}`;
        try {
            await this.prisma.oTP.create({
                data: {
                    createdAt: new Date(),
                    phoneNumber: otpCredentials.phoneNumber,
                    otp: otp,
                    expiration: new Date(),
                    userId: otpCredentials.userId
                }
            });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                console.log('An error occured while creating OTP');
                return {
                    status: 500,
                    message: 'Internal server error',
                    data: ''
                };
            }
        }
        const smsResponse = await (0, axios_1.default)({
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
        });
        return {
            status: 200,
            message: 'ok',
            data: {
                smsStatus: {
                    status: smsResponse.data.status,
                    message: smsResponse.data.message
                }
            }
        };
    }
    async verifyOTP(otpCreidentials, user) {
        try {
            const otpRecord = await this.prisma.oTP.findFirst({
                where: {
                    otp: otpCreidentials.otp
                }
            });
            if (!otpRecord) {
                console.log('Error: The record is not found - Invalid OTP');
                return {
                    status: 400,
                    message: 'Bad request',
                    data: 'The OTP is invalid'
                };
            }
            await this.prisma.oTP.update({
                where: {
                    id: otpRecord.id
                },
                data: {
                    isUsed: true
                }
            });
            await this.prisma.user.update({
                where: {
                    username: user.username,
                },
                data: {
                    isVerified: true
                }
            });
        }
        catch (e) {
            console.log('Error: An error ocurred during verifing OTP');
            return {
                status: 500,
                message: 'Internal server error',
                data: ''
            };
        }
        return await this.authService.login(user);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auth_service_1.AuthService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map