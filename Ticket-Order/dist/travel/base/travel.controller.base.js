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
exports.TravelControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const travel_service_1 = require("../travel.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const TravelCreateInput_1 = require("./TravelCreateInput");
const TravelWhereUniqueInput_1 = require("./TravelWhereUniqueInput");
const TravelFindManyArgs_1 = require("./TravelFindManyArgs");
const TravelUpdateInput_1 = require("./TravelUpdateInput");
const Travel_1 = require("./Travel");
const TicketFindManyArgs_1 = require("../../ticket/base/TicketFindManyArgs");
let TravelControllerBase = class TravelControllerBase {
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
                basePrice: true,
                category: true,
                createdAt: true,
                date: true,
                destination: true,
                discount: true,
                id: true,
                source: true,
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
        const args = class_transformer_1.plainToClass(TravelFindManyArgs_1.TravelFindManyArgs, request.query);
        return this.service.findMany(Object.assign(Object.assign({}, args), { select: {
                basePrice: true,
                category: true,
                createdAt: true,
                date: true,
                destination: true,
                discount: true,
                id: true,
                source: true,
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
                basePrice: true,
                category: true,
                createdAt: true,
                date: true,
                destination: true,
                discount: true,
                id: true,
                source: true,
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
                    basePrice: true,
                    category: true,
                    createdAt: true,
                    date: true,
                    destination: true,
                    discount: true,
                    id: true,
                    source: true,
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
                    basePrice: true,
                    category: true,
                    createdAt: true,
                    date: true,
                    destination: true,
                    discount: true,
                    id: true,
                    source: true,
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
    async findManyTicketId(request, params) {
        const query = class_transformer_1.plainToClass(TicketFindManyArgs_1.TicketFindManyArgs, request.query);
        const results = await this.service.findTicketId(params.id, Object.assign(Object.assign({}, query), { select: {
                createdAt: true,
                firstName: true,
                gender: true,
                id: true,
                lastName: true,
                nationalId: true,
                phoneNumber: true,
                seatNumber: true,
                travelId: {
                    select: {
                        id: true,
                    },
                },
                updatedAt: true,
                userId: {
                    select: {
                        id: true,
                    },
                },
                vehicleId: true,
            } }));
        if (results === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return results;
    }
    async connectTicketId(params, body) {
        const data = {
            ticketId: {
                connect: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async updateTicketId(params, body) {
        const data = {
            ticketId: {
                set: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async disconnectTicketId(params, body) {
        const data = {
            ticketId: {
                disconnect: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
};
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Post(),
    swagger.ApiCreatedResponse({ type: Travel_1.Travel }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelCreateInput_1.TravelCreateInput]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "create", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Travel_1.Travel] }),
    api_nested_query_decorator_1.ApiNestedQuery(TravelFindManyArgs_1.TravelFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Travel",
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
], TravelControllerBase.prototype, "findMany", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Travel_1.Travel }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelWhereUniqueInput_1.TravelWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "findOne", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Travel_1.Travel }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelWhereUniqueInput_1.TravelWhereUniqueInput,
        TravelUpdateInput_1.TravelUpdateInput]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "update", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Travel_1.Travel }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelWhereUniqueInput_1.TravelWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "delete", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id/ticketId"),
    api_nested_query_decorator_1.ApiNestedQuery(TicketFindManyArgs_1.TicketFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "read",
        possession: "any",
    }),
    __param(0, common.Req()),
    __param(1, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, TravelWhereUniqueInput_1.TravelWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "findManyTicketId", null);
__decorate([
    common.Post("/:id/ticketId"),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelWhereUniqueInput_1.TravelWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "connectTicketId", null);
__decorate([
    common.Patch("/:id/ticketId"),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelWhereUniqueInput_1.TravelWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "updateTicketId", null);
__decorate([
    common.Delete("/:id/ticketId"),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelWhereUniqueInput_1.TravelWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], TravelControllerBase.prototype, "disconnectTicketId", null);
TravelControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [travel_service_1.TravelService, nestAccessControl.RolesBuilder])
], TravelControllerBase);
exports.TravelControllerBase = TravelControllerBase;
//# sourceMappingURL=travel.controller.base.js.map