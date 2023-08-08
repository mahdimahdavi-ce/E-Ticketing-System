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
exports.UserTicketControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const userTicket_service_1 = require("../userTicket.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const UserTicketCreateInput_1 = require("./UserTicketCreateInput");
const UserTicketWhereUniqueInput_1 = require("./UserTicketWhereUniqueInput");
const UserTicketFindManyArgs_1 = require("./UserTicketFindManyArgs");
const UserTicketUpdateInput_1 = require("./UserTicketUpdateInput");
const UserTicket_1 = require("./UserTicket");
let UserTicketControllerBase = class UserTicketControllerBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async create(data) {
        return await this.service.create({
            data: Object.assign(Object.assign({}, data), { ticketId: data.ticketId
                    ? {
                        connect: data.ticketId,
                    }
                    : undefined }),
            select: {
                createdAt: true,
                id: true,
                isCanceled: true,
                ticketId: {
                    select: {
                        id: true,
                    },
                },
                updatedAt: true,
                userId: true,
            },
        });
    }
    async findMany(request) {
        const args = class_transformer_1.plainToClass(UserTicketFindManyArgs_1.UserTicketFindManyArgs, request.query);
        return this.service.findMany(Object.assign(Object.assign({}, args), { select: {
                createdAt: true,
                id: true,
                isCanceled: true,
                ticketId: {
                    select: {
                        id: true,
                    },
                },
                updatedAt: true,
                userId: true,
            } }));
    }
    async findOne(params) {
        const result = await this.service.findOne({
            where: params,
            select: {
                createdAt: true,
                id: true,
                isCanceled: true,
                ticketId: {
                    select: {
                        id: true,
                    },
                },
                updatedAt: true,
                userId: true,
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
                data: Object.assign(Object.assign({}, data), { ticketId: data.ticketId
                        ? {
                            connect: data.ticketId,
                        }
                        : undefined }),
                select: {
                    createdAt: true,
                    id: true,
                    isCanceled: true,
                    ticketId: {
                        select: {
                            id: true,
                        },
                    },
                    updatedAt: true,
                    userId: true,
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
                    id: true,
                    isCanceled: true,
                    ticketId: {
                        select: {
                            id: true,
                        },
                    },
                    updatedAt: true,
                    userId: true,
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
    swagger.ApiCreatedResponse({ type: UserTicket_1.UserTicket }),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketCreateInput_1.UserTicketCreateInput]),
    __metadata("design:returntype", Promise)
], UserTicketControllerBase.prototype, "create", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [UserTicket_1.UserTicket] }),
    api_nested_query_decorator_1.ApiNestedQuery(UserTicketFindManyArgs_1.UserTicketFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
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
], UserTicketControllerBase.prototype, "findMany", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: UserTicket_1.UserTicket }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserTicketControllerBase.prototype, "findOne", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: UserTicket_1.UserTicket }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput,
        UserTicketUpdateInput_1.UserTicketUpdateInput]),
    __metadata("design:returntype", Promise)
], UserTicketControllerBase.prototype, "update", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: UserTicket_1.UserTicket }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketWhereUniqueInput_1.UserTicketWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserTicketControllerBase.prototype, "delete", null);
UserTicketControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [userTicket_service_1.UserTicketService, nestAccessControl.RolesBuilder])
], UserTicketControllerBase);
exports.UserTicketControllerBase = UserTicketControllerBase;
//# sourceMappingURL=userTicket.controller.base.js.map