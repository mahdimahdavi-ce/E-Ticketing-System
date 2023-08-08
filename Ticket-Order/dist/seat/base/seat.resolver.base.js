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
exports.SeatResolverBase = void 0;
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
const CreateSeatArgs_1 = require("./CreateSeatArgs");
const UpdateSeatArgs_1 = require("./UpdateSeatArgs");
const DeleteSeatArgs_1 = require("./DeleteSeatArgs");
const SeatFindManyArgs_1 = require("./SeatFindManyArgs");
const SeatFindUniqueArgs_1 = require("./SeatFindUniqueArgs");
const Seat_1 = require("./Seat");
const Vehicle_1 = require("../../vehicle/base/Vehicle");
const seat_service_1 = require("../seat.service");
let SeatResolverBase = class SeatResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _seatsMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async seats(args) {
        return this.service.findMany(args);
    }
    async seat(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createSeat(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { vehicleId: args.data.vehicleId
                    ? {
                        connect: args.data.vehicleId,
                    }
                    : undefined }) }));
    }
    async updateSeat(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { vehicleId: args.data.vehicleId
                        ? {
                            connect: args.data.vehicleId,
                        }
                        : undefined }) }));
        }
        catch (error) {
            if (prisma_util_1.isRecordNotFoundError(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async deleteSeat(args) {
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
    async resolveFieldVehicleId(parent) {
        const result = await this.service.getVehicleId(parent.id);
        if (!result) {
            return null;
        }
        return result;
    }
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatFindManyArgs_1.SeatFindManyArgs]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "_seatsMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Seat_1.Seat]),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatFindManyArgs_1.SeatFindManyArgs]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "seats", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Seat_1.Seat, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeatFindUniqueArgs_1.SeatFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "seat", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Seat_1.Seat),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSeatArgs_1.CreateSeatArgs]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "createSeat", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Seat_1.Seat),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateSeatArgs_1.UpdateSeatArgs]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "updateSeat", null);
__decorate([
    graphql.Mutation(() => Seat_1.Seat),
    nestAccessControl.UseRoles({
        resource: "Seat",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteSeatArgs_1.DeleteSeatArgs]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "deleteSeat", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => Vehicle_1.Vehicle, {
        nullable: true,
        name: "vehicleId",
    }),
    nestAccessControl.UseRoles({
        resource: "Vehicle",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Seat_1.Seat]),
    __metadata("design:returntype", Promise)
], SeatResolverBase.prototype, "resolveFieldVehicleId", null);
SeatResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Seat_1.Seat),
    __metadata("design:paramtypes", [seat_service_1.SeatService, nestAccessControl.RolesBuilder])
], SeatResolverBase);
exports.SeatResolverBase = SeatResolverBase;
//# sourceMappingURL=seat.resolver.base.js.map