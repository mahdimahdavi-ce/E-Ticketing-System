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
exports.SeatControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const seat_service_1 = require("../seat.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const SeatCreateInput_1 = require("./SeatCreateInput");
const SeatWhereUniqueInput_1 = require("./SeatWhereUniqueInput");
const SeatFindManyArgs_1 = require("./SeatFindManyArgs");
const SeatUpdateInput_1 = require("./SeatUpdateInput");
const Seat_1 = require("./Seat");
let SeatControllerBase = class SeatControllerBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async create(data) {
        return await this.service.create({
            data: Object.assign(Object.assign({}, data), { vehicleId: data.vehicleId
                    ? {
                        connect: data.vehicleId,
                    }
                    : undefined }),
            select: {
                createdAt: true,
                id: true,
                isReserved: true,
                seatNumber: true,
                updatedAt: true,
                vehicleId: {
                    select: {
                        id: true,
                    },
                },
            },
        });
    }
    async findMany(request) {
        const args = class_transformer_1.plainToClass(SeatFindManyArgs_1.SeatFindManyArgs, request.query);
        return this.service.findMany(Object.assign(Object.assign({}, args), { select: {
                createdAt: true,
                id: true,
                isReserved: true,
                seatNumber: true,
                updatedAt: true,
                vehicleId: {
                    select: {
                        id: true,
                    },
                },
            } }));
    }
    async findOne(params) {
        const result = await this.service.findOne({
            where: params,
            select: {
                createdAt: true,
                id: true,
                isReserved: true,
                seatNumber: true,
                updatedAt: true,
                vehicleId: {
                    select: {
                        id: true,
                    },
                },
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
                data: Object.assign(Object.assign({}, data), { vehicleId: data.vehicleId
                        ? {
                            connect: data.vehicleId,
                        }
                        : undefined }),
                select: {
                    createdAt: true,
                    id: true,
                    isReserved: true,
                    seatNumber: true,
                    updatedAt: true,
                    vehicleId: {
                        select: {
                            id: true,
                        },
                    },
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
                    isReserved: true,
                    seatNumber: true,
                    updatedAt: true,
                    vehicleId: {
                        select: {
                            id: true,
                        },
                    },
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
    swagger.ApiCreatedResponse({ type: Seat_1.Seat }),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatCreateInput_1.SeatCreateInput]),
    __metadata("design:returntype", Promise)
], SeatControllerBase.prototype, "create", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Seat_1.Seat] }),
    api_nested_query_decorator_1.ApiNestedQuery(SeatFindManyArgs_1.SeatFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Seat",
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
], SeatControllerBase.prototype, "findMany", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Seat_1.Seat }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatWhereUniqueInput_1.SeatWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], SeatControllerBase.prototype, "findOne", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Seat_1.Seat }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatWhereUniqueInput_1.SeatWhereUniqueInput,
        SeatUpdateInput_1.SeatUpdateInput]),
    __metadata("design:returntype", Promise)
], SeatControllerBase.prototype, "update", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Seat_1.Seat }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatWhereUniqueInput_1.SeatWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], SeatControllerBase.prototype, "delete", null);
SeatControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [seat_service_1.SeatService, nestAccessControl.RolesBuilder])
], SeatControllerBase);
exports.SeatControllerBase = SeatControllerBase;
//# sourceMappingURL=seat.controller.base.js.map