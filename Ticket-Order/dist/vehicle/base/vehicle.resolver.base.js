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
exports.VehicleResolverBase = void 0;
const graphql = __importStar(require("@nestjs/graphql"));
const apollo = __importStar(require("apollo-server-express"));
const prisma_util_1 = require("../../prisma.util");
const MetaQueryPayload_1 = require("../../util/MetaQueryPayload");
const nestAccessControl = __importStar(require("nest-access-control"));
const gqlACGuard = __importStar(require("../../auth/gqlAC.guard"));
const gqlDefaultAuth_guard_1 = require("../../auth/gqlDefaultAuth.guard");
const common = __importStar(require("@nestjs/common"));
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const CreateVehicleArgs_1 = require("./CreateVehicleArgs");
const UpdateVehicleArgs_1 = require("./UpdateVehicleArgs");
const DeleteVehicleArgs_1 = require("./DeleteVehicleArgs");
const VehicleFindManyArgs_1 = require("./VehicleFindManyArgs");
const VehicleFindUniqueArgs_1 = require("./VehicleFindUniqueArgs");
const Vehicle_1 = require("./Vehicle");
const SeatFindManyArgs_1 = require("../../seat/base/SeatFindManyArgs");
const Seat_1 = require("../../seat/base/Seat");
const TravelFindManyArgs_1 = require("../../travel/base/TravelFindManyArgs");
const Travel_1 = require("../../travel/base/Travel");
const vehicle_service_1 = require("../vehicle.service");
let VehicleResolverBase = class VehicleResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _vehiclesMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async vehicles(args) {
        return this.service.findMany(args);
    }
    async vehicle(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createVehicle(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: args.data }));
    }
    async updateVehicle(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: args.data }));
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async deleteVehicle(args) {
        try {
            return await this.service.delete(args);
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async resolveFieldSeats(parent, args) {
        const results = await this.service.findSeats(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
    }
    async resolveFieldTravelId(parent, args) {
        const results = await this.service.findTravelId(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
    }
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleFindManyArgs_1.VehicleFindManyArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "_vehiclesMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Vehicle_1.Vehicle]),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleFindManyArgs_1.VehicleFindManyArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "vehicles", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Vehicle_1.Vehicle, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleFindUniqueArgs_1.VehicleFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "vehicle", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Vehicle_1.Vehicle),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateVehicleArgs_1.CreateVehicleArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "createVehicle", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Vehicle_1.Vehicle),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateVehicleArgs_1.UpdateVehicleArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "updateVehicle", null);
__decorate([
    graphql.Mutation(() => Vehicle_1.Vehicle),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteVehicleArgs_1.DeleteVehicleArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "deleteVehicle", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Seat_1.Seat], { name: "seats" }),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicle_1.Vehicle,
        SeatFindManyArgs_1.SeatFindManyArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "resolveFieldSeats", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Travel_1.Travel], { name: "travelId" }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicle_1.Vehicle,
        TravelFindManyArgs_1.TravelFindManyArgs]),
    __metadata("design:returntype", Promise)
], VehicleResolverBase.prototype, "resolveFieldTravelId", null);
VehicleResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Vehicle_1.Vehicle),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService, nestAccessControl.RolesBuilder])
], VehicleResolverBase);
exports.VehicleResolverBase = VehicleResolverBase;
//# sourceMappingURL=vehicle.resolver.base.js.map