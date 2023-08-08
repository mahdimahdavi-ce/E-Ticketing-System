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
exports.VehicleControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const vehicle_service_1 = require("../vehicle.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const VehicleCreateInput_1 = require("./VehicleCreateInput");
const VehicleWhereUniqueInput_1 = require("./VehicleWhereUniqueInput");
const VehicleFindManyArgs_1 = require("./VehicleFindManyArgs");
const VehicleUpdateInput_1 = require("./VehicleUpdateInput");
const Vehicle_1 = require("./Vehicle");
const SeatFindManyArgs_1 = require("../../seat/base/SeatFindManyArgs");
const TravelFindManyArgs_1 = require("../../travel/base/TravelFindManyArgs");
let VehicleControllerBase = class VehicleControllerBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async create(data) {
        return await this.service.create({
            data: data,
            select: {
                category: true,
                color: true,
                corporation: true,
                createdAt: true,
                id: true,
                numberOfSeats: true,
                numberPlate: true,
                ownerNationalId: true,
                updatedAt: true,
            },
        });
    }
    async findMany(request) {
        const args = class_transformer_1.plainToClass(VehicleFindManyArgs_1.VehicleFindManyArgs, request.query);
        return this.service.findMany(Object.assign(Object.assign({}, args), { select: {
                category: true,
                color: true,
                corporation: true,
                createdAt: true,
                id: true,
                numberOfSeats: true,
                numberPlate: true,
                ownerNationalId: true,
                updatedAt: true,
            } }));
    }
    async findOne(params) {
        const result = await this.service.findOne({
            where: params,
            select: {
                category: true,
                color: true,
                corporation: true,
                createdAt: true,
                id: true,
                numberOfSeats: true,
                numberPlate: true,
                ownerNationalId: true,
                updatedAt: true,
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
                    category: true,
                    color: true,
                    corporation: true,
                    createdAt: true,
                    id: true,
                    numberOfSeats: true,
                    numberPlate: true,
                    ownerNationalId: true,
                    updatedAt: true,
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
                    category: true,
                    color: true,
                    corporation: true,
                    createdAt: true,
                    id: true,
                    numberOfSeats: true,
                    numberPlate: true,
                    ownerNationalId: true,
                    updatedAt: true,
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
    async findManySeats(request, params) {
        const query = class_transformer_1.plainToClass(SeatFindManyArgs_1.SeatFindManyArgs, request.query);
        const results = await this.service.findSeats(params.id, Object.assign(Object.assign({}, query), { select: {
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
        if (results === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return results;
    }
    async connectSeats(params, body) {
        const data = {
            seats: {
                connect: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async updateSeats(params, body) {
        const data = {
            seats: {
                set: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async disconnectSeats(params, body) {
        const data = {
            seats: {
                disconnect: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async findManyTravelId(request, params) {
        const query = class_transformer_1.plainToClass(TravelFindManyArgs_1.TravelFindManyArgs, request.query);
        const results = await this.service.findTravelId(params.id, Object.assign(Object.assign({}, query), { select: {
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
        if (results === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return results;
    }
    async connectTravelId(params, body) {
        const data = {
            travelId: {
                connect: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async updateTravelId(params, body) {
        const data = {
            travelId: {
                set: body,
            },
        };
        await this.service.update({
            where: params,
            data,
            select: { id: true },
        });
    }
    async disconnectTravelId(params, body) {
        const data = {
            travelId: {
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
    swagger.ApiCreatedResponse({ type: Vehicle_1.Vehicle }),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleCreateInput_1.VehicleCreateInput]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "create", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Vehicle_1.Vehicle] }),
    api_nested_query_decorator_1.ApiNestedQuery(VehicleFindManyArgs_1.VehicleFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
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
], VehicleControllerBase.prototype, "findMany", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Vehicle_1.Vehicle }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "findOne", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Vehicle_1.Vehicle }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput,
        VehicleUpdateInput_1.VehicleUpdateInput]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "update", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Vehicle_1.Vehicle }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "delete", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id/seats"),
    api_nested_query_decorator_1.ApiNestedQuery(SeatFindManyArgs_1.SeatFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "read",
        possession: "any",
    }),
    __param(0, common.Req()),
    __param(1, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, VehicleWhereUniqueInput_1.VehicleWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "findManySeats", null);
__decorate([
    common.Post("/:id/seats"),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "connectSeats", null);
__decorate([
    common.Patch("/:id/seats"),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "updateSeats", null);
__decorate([
    common.Delete("/:id/seats"),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "disconnectSeats", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id/travelId"),
    api_nested_query_decorator_1.ApiNestedQuery(TravelFindManyArgs_1.TravelFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "read",
        possession: "any",
    }),
    __param(0, common.Req()),
    __param(1, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, VehicleWhereUniqueInput_1.VehicleWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "findManyTravelId", null);
__decorate([
    common.Post("/:id/travelId"),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "connectTravelId", null);
__decorate([
    common.Patch("/:id/travelId"),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "updateTravelId", null);
__decorate([
    common.Delete("/:id/travelId"),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleWhereUniqueInput_1.VehicleWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], VehicleControllerBase.prototype, "disconnectTravelId", null);
VehicleControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService, nestAccessControl.RolesBuilder])
], VehicleControllerBase);
exports.VehicleControllerBase = VehicleControllerBase;
//# sourceMappingURL=vehicle.controller.base.js.map