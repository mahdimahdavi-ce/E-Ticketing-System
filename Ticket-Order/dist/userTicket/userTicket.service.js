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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTicketService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const userTicket_service_base_1 = require("./base/userTicket.service.base");
const jwt = __importStar(require("jsonwebtoken"));
let UserTicketService = class UserTicketService extends userTicket_service_base_1.UserTicketServiceBase {
    constructor(prisma) {
        super(prisma);
        this.prisma = prisma;
    }
    async getAllTicketsOfUser(token) {
        let jwt_secret = process.env.SECRET_KEY;
        const payload = jwt.verify(token, jwt_secret);
        let userTickets = await this.prisma.userTicket.findMany({
            where: {
                userId: `${payload.sub}`
            },
            select: {
                ticketIdId: true
            }
        });
        console.log(userTickets);
        let userTravels = [];
        for (let i = 0; i < userTickets.length; i++) {
            let ticket = await this.prisma.ticket.findFirst({
                where: {
                    id: userTickets[i].ticketIdId
                },
                select: {
                    travelIdId: true,
                    seatNumber: true
                }
            });
            console.log(ticket);
            let travel = await this.prisma.travel.findFirst({
                where: {
                    id: ticket === null || ticket === void 0 ? void 0 : ticket.travelIdId
                },
                select: {
                    basePrice: true,
                    category: true,
                    date: true,
                    source: true,
                    destination: true
                }
            });
            userTravels.push(Object.assign(Object.assign({}, travel), ticket));
        }
        return userTravels;
    }
};
UserTicketService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserTicketService);
exports.UserTicketService = UserTicketService;
//# sourceMappingURL=userTicket.service.js.map