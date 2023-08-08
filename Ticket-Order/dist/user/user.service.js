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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const password_service_1 = require("../auth/password.service");
const user_service_base_1 = require("./base/user.service.base");
const otp_generator_1 = require("otp-generator");
const axios_1 = __importDefault(require("axios"));
let UserService = class UserService extends user_service_base_1.UserServiceBase {
    constructor(prisma, passwordService) {
        super(prisma, passwordService);
        this.prisma = prisma;
        this.passwordService = passwordService;
    }
    async sendDiscountToUsers(reqBody) {
        const { discountName, startDate, endDate, discountPercentage, customerPhoneNumbers } = reqBody;
        const discountCode = otp_generator_1.generate(10, { upperCaseAlphabets: true, specialChars: false, digits: true, lowerCaseAlphabets: false });
        const message = `کد تخفیف ${discountPercentage} درصدی شما در سامانه تیکت یار : ${discountCode}
مهلت استفاده 9 روز`;
        const discount = await this.prisma.dicount.create({
            data: {
                discountName: discountName,
                discountPercentage: Number(discountPercentage),
                discountCode: discountCode,
                startDate: new Date(startDate),
                endDate: new Date(endDate)
            }
        });
        for (let phoneNumber of customerPhoneNumbers) {
            await axios_1.default({
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
            });
        }
        return { discountCode: discountCode };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        password_service_1.PasswordService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map