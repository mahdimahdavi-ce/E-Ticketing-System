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
exports.UserTicketController = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const nestAccessControl = __importStar(require("nest-access-control"));
const userTicket_service_1 = require("./userTicket.service");
const userTicket_controller_base_1 = require("./base/userTicket.controller.base");
const public_decorator_1 = require("../decorators/public.decorator");
let UserTicketController = class UserTicketController extends userTicket_controller_base_1.UserTicketControllerBase {
    constructor(service, rolesBuilder) {
        super(service, rolesBuilder);
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async getAllTicketsOfUser(queries) {
        return await this.service.getAllTicketsOfUser(queries.token);
    }
};
__decorate([
    public_decorator_1.Public(),
    common.Get(),
    __param(0, common.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserTicketController.prototype, "getAllTicketsOfUser", null);
UserTicketController = __decorate([
    swagger.ApiTags("userTickets"),
    common.Controller("userTickets"),
    __param(1, nestAccessControl.InjectRolesBuilder()),
    __metadata("design:paramtypes", [userTicket_service_1.UserTicketService, nestAccessControl.RolesBuilder])
], UserTicketController);
exports.UserTicketController = UserTicketController;
//# sourceMappingURL=userTicket.controller.js.map