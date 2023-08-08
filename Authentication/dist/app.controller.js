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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const createUserDto_1 = require("./Dtos/createUserDto");
const verifyOtpDto_1 = require("./Dtos/verifyOtpDto");
const local_auth_guard_1 = require("./auth/local.auth.guard");
const auth_service_1 = require("./auth/auth.service");
const sendOtpDto_1 = require("./Dtos/sendOtpDto");
const loginDto_1 = require("./Dtos/loginDto");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService, authService) {
        this.appService = appService;
        this.authService = authService;
    }
    createUser(userCredentials) {
        return this.appService.createUser(userCredentials);
    }
    async loginUser(req, loginCredentials) {
        return await this.authService.login(req.user);
    }
    verifyOTP(req, otpCredentials) {
        return this.appService.verifyOTP(otpCredentials, req.user);
    }
    async sendOTP(optCredentials) {
        return await this.appService.sendOTP(optCredentials);
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, loginDto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "loginUser", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/verifyOTP'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verifyOtpDto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "verifyOTP", null);
__decorate([
    (0, common_1.Post)('/reSendOTP'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sendOtpDto_1.SendOtpDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sendOTP", null);
AppController = __decorate([
    (0, swagger_1.ApiTags)('authentication'),
    (0, common_1.Controller)('/api'),
    __metadata("design:paramtypes", [app_service_1.AppService,
        auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map