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
exports.UserTicketResolverBase = void 0;
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
const CreateUserTicketArgs_1 = require("./CreateUserTicketArgs");
const UpdateUserTicketArgs_1 = require("./UpdateUserTicketArgs");
const DeleteUserTicketArgs_1 = require("./DeleteUserTicketArgs");
const UserTicketFindManyArgs_1 = require("./UserTicketFindManyArgs");
const UserTicketFindUniqueArgs_1 = require("./UserTicketFindUniqueArgs");
const UserTicket_1 = require("./UserTicket");
const Ticket_1 = require("../../ticket/base/Ticket");
const userTicket_service_1 = require("../userTicket.service");
let UserTicketResolverBase = class UserTicketResolverBase {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _userTicketsMeta(args) {
        const results = await this.service.count(Object.assign(Object.assign({}, args), { skip: undefined, take: undefined }));
        return {
            count: results,
        };
    }
    async userTickets(args) {
        return this.service.findMany(args);
    }
    async userTicket(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createUserTicket(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { ticketId: args.data.ticketId
                    ? {
                        connect: args.data.ticketId,
                    }
                    : undefined }) }));
    }
    async updateUserTicket(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { ticketId: args.data.ticketId
                        ? {
                            connect: args.data.ticketId,
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
    async deleteUserTicket(args) {
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
    async resolveFieldTicketId(parent) {
        const result = await this.service.getTicketId(parent.id);
        if (!result) {
            return null;
        }
        return result;
    }
};
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketFindManyArgs_1.UserTicketFindManyArgs]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "_userTicketsMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [UserTicket_1.UserTicket]),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketFindManyArgs_1.UserTicketFindManyArgs]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "userTickets", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => UserTicket_1.UserTicket, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicketFindUniqueArgs_1.UserTicketFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "userTicket", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => UserTicket_1.UserTicket),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserTicketArgs_1.CreateUserTicketArgs]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "createUserTicket", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => UserTicket_1.UserTicket),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserTicketArgs_1.UpdateUserTicketArgs]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "updateUserTicket", null);
__decorate([
    graphql.Mutation(() => UserTicket_1.UserTicket),
    nestAccessControl.UseRoles({
        resource: "UserTicket",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteUserTicketArgs_1.DeleteUserTicketArgs]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "deleteUserTicket", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => Ticket_1.Ticket, {
        nullable: true,
        name: "ticketId",
    }),
    nestAccessControl.UseRoles({
        resource: "Ticket",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserTicket_1.UserTicket]),
    __metadata("design:returntype", Promise)
], UserTicketResolverBase.prototype, "resolveFieldTicketId", null);
UserTicketResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => UserTicket_1.UserTicket),
    __metadata("design:paramtypes", [userTicket_service_1.UserTicketService, nestAccessControl.RolesBuilder])
], UserTicketResolverBase);
exports.UserTicketResolverBase = UserTicketResolverBase;
//# sourceMappingURL=userTicket.resolver.base.js.map