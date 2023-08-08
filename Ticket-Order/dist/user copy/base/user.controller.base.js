"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const user_service_1 = require("../user.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const UserCreateInput_1 = require("./UserCreateInput");
const UserWhereUniqueInput_1 = require("./UserWhereUniqueInput");
const UserFindManyArgs_1 = require("./UserFindManyArgs");
const UserUpdateInput_1 = require("./UserUpdateInput");
const User_1 = require("./User");
let UserControllerBase = class UserControllerBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async create(data) {
        return await this.service.create({
            data: data,
            select: {
                createdAt: true,
                firstName: true,
                id: true,
                lastName: true,
                roles: true,
                updatedAt: true,
                username: true,
            },
        });
    }
    async findMany(request) {
        const args = class_transformer_1.plainToClass(UserFindManyArgs_1.UserFindManyArgs, request.query);
        return this.service.findMany(Object.assign(Object.assign({}, args), { select: {
                createdAt: true,
                firstName: true,
                id: true,
                lastName: true,
                roles: true,
                updatedAt: true,
                username: true,
            } }));
    }
    async findOne(params) {
        const result = await this.service.findOne({
            where: params,
            select: {
                createdAt: true,
                firstName: true,
                id: true,
                lastName: true,
                roles: true,
                updatedAt: true,
                username: true,
            },
        });
        if (result === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return result;
    }
    async update(params, data) {
        try {
            return await this.service.update({
                where: params,
                data: data,
                select: {
                    createdAt: true,
                    firstName: true,
                    id: true,
                    lastName: true,
                    roles: true,
                    updatedAt: true,
                    username: true,
                },
            });
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
    async delete(params) {
        try {
            return await this.service.delete({
                where: params,
                select: {
                    createdAt: true,
                    firstName: true,
                    id: true,
                    lastName: true,
                    roles: true,
                    updatedAt: true,
                    username: true,
                },
            });
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
};
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Post(),
    swagger.ApiCreatedResponse({ type: User_1.User }),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserCreateInput_1.UserCreateInput]),
    __metadata("design:returntype", Promise)
], UserControllerBase.prototype, "create", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [User_1.User] }),
    api_nested_query_decorator_1.ApiNestedQuery(UserFindManyArgs_1.UserFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "read",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserControllerBase.prototype, "findMany", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: User_1.User }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserWhereUniqueInput_1.UserWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserControllerBase.prototype, "findOne", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: User_1.User }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserWhereUniqueInput_1.UserWhereUniqueInput,
        UserUpdateInput_1.UserUpdateInput]),
    __metadata("design:returntype", Promise)
], UserControllerBase.prototype, "update", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: User_1.User }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserWhereUniqueInput_1.UserWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserControllerBase.prototype, "delete", null);
UserControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [user_service_1.UserService, nestAccessControl.RolesBuilder])
], UserControllerBase);
exports.UserControllerBase = UserControllerBase;
//# sourceMappingURL=user.controller.base.js.map