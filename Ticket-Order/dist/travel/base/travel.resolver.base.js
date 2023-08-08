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
exports.TravelResolverBase = void 0;
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
const CreateTravelArgs_1 = require("./CreateTravelArgs");
const UpdateTravelArgs_1 = require("./UpdateTravelArgs");
const DeleteTravelArgs_1 = require("./DeleteTravelArgs");
const TravelFindManyArgs_1 = require("./TravelFindManyArgs");
const TravelFindUniqueArgs_1 = require("./TravelFindUniqueArgs");
const Travel_1 = require("./Travel");
const TicketFindManyArgs_1 = require("../../ticket/base/TicketFindManyArgs");
const Ticket_1 = require("../../ticket/base/Ticket");
const Vehicle_1 = require("../../vehicle/base/Vehicle");
const travel_service_1 = require("../travel.service");
let TravelResolverBase = class TravelResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _travelsMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async travels(args) {
        return this.service.findMany(args);
    }
    async travel(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createTravel(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { vehicleId: args.data.vehicleId
                    ? {
                        connect: args.data.vehicleId,
                    }
                    : undefined }) }));
    }
    async updateTravel(args) {
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
    async deleteTravel(args) {
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
    async resolveFieldTicketId(parent, args) {
        const results = await this.service.findTicketId(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
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
        resource: "Travel",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelFindManyArgs_1.TravelFindManyArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "_travelsMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Travel_1.Travel]),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelFindManyArgs_1.TravelFindManyArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "travels", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Travel_1.Travel, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TravelFindUniqueArgs_1.TravelFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "travel", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Travel_1.Travel),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTravelArgs_1.CreateTravelArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "createTravel", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Travel_1.Travel),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateTravelArgs_1.UpdateTravelArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "updateTravel", null);
__decorate([
    graphql.Mutation(() => Travel_1.Travel),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteTravelArgs_1.DeleteTravelArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "deleteTravel", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Ticket_1.Ticket], { name: "ticketId" }),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Travel_1.Travel,
        TicketFindManyArgs_1.TicketFindManyArgs]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "resolveFieldTicketId", null);
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
    __metadata("design:paramtypes", [Travel_1.Travel]),
    __metadata("design:returntype", Promise)
], TravelResolverBase.prototype, "resolveFieldVehicleId", null);
TravelResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Travel_1.Travel),
    __metadata("design:paramtypes", [travel_service_1.TravelService, nestAccessControl.RolesBuilder])
], TravelResolverBase);
exports.TravelResolverBase = TravelResolverBase;
//# sourceMappingURL=travel.resolver.base.js.map