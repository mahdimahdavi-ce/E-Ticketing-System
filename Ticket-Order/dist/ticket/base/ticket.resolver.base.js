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
exports.TicketResolverBase = void 0;
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
const CreateTicketArgs_1 = require("./CreateTicketArgs");
const UpdateTicketArgs_1 = require("./UpdateTicketArgs");
const DeleteTicketArgs_1 = require("./DeleteTicketArgs");
const TicketFindManyArgs_1 = require("./TicketFindManyArgs");
const TicketFindUniqueArgs_1 = require("./TicketFindUniqueArgs");
const Ticket_1 = require("./Ticket");
const Travel_1 = require("../../travel/base/Travel");
const UserTicket_1 = require("../../userTicket/base/UserTicket");
const ticket_service_1 = require("../ticket.service");
let TicketResolverBase = class TicketResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _ticketsMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async tickets(args) {
        return this.service.findMany(args);
    }
    async ticket(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createTicket(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { travelId: args.data.travelId
                    ? {
                        connect: args.data.travelId,
                    }
                    : undefined, userId: args.data.userId
                    ? {
                        connect: args.data.userId,
                    }
                    : undefined }) }));
    }
    async updateTicket(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { travelId: args.data.travelId
                        ? {
                            connect: args.data.travelId,
                        }
                        : undefined, userId: args.data.userId
                        ? {
                            connect: args.data.userId,
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
    async deleteTicket(args) {
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
    async resolveFieldTravelId(parent) {
        const result = await this.service.getTravelId(parent.id);
        if (!result) {
            return null;
        }
        return result;
    }
    async resolveFieldUserId(parent) {
        const result = await this.service.getUserId(parent.id);
        if (!result) {
            return null;
        }
        return result;
    }
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketFindManyArgs_1.TicketFindManyArgs]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "_ticketsMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Ticket_1.Ticket]),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketFindManyArgs_1.TicketFindManyArgs]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "tickets", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Ticket_1.Ticket, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketFindUniqueArgs_1.TicketFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "ticket", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Ticket_1.Ticket),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTicketArgs_1.CreateTicketArgs]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "createTicket", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Ticket_1.Ticket),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateTicketArgs_1.UpdateTicketArgs]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "updateTicket", null);
__decorate([
    graphql.Mutation(() => Ticket_1.Ticket),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteTicketArgs_1.DeleteTicketArgs]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "deleteTicket", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => Travel_1.Travel, {
        nullable: true,
        name: "travelId",
    }),
    nestAccessControl.UseRoles({
        resource: "Travel",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ticket_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "resolveFieldTravelId", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => UserTicket_1.UserTicket, {
        nullable: true,
        name: "userId",
    }),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ticket_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketResolverBase.prototype, "resolveFieldUserId", null);
TicketResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Ticket_1.Ticket),
    __metadata("design:paramtypes", [ticket_service_1.TicketService, nestAccessControl.RolesBuilder])
], TicketResolverBase);
exports.TicketResolverBase = TicketResolverBase;
//# sourceMappingURL=ticket.resolver.base.js.map