"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const travel_service_base_1 = require("./base/travel.service.base");
let TravelService = class TravelService extends travel_service_base_1.TravelServiceBase {
    constructor(prisma) {
        super(prisma);
        this.prisma = prisma;
    }
    async findAllTravels(source, destination, gte, lt) {
        let travels = await this.prisma.travel.findMany({
            where: {
                source: source,
                destination: destination,
                date: {
                    gte: new Date(gte),
                    lt: new Date(lt)
                }
            }
        });
        for (let i = 0; i < travels.length; i++) {
            let occupiedSeats = await this.prisma.ticket.findMany({
                where: {
                    travelIdId: travels[i].id
                },
                select: {
                    seatNumber: true
                }
            });
            let seats = [];
            if (occupiedSeats.length !== 0) {
                occupiedSeats.forEach((e) => {
                    seats.push(e.seatNumber);
                });
            }
            travels[i] = Object.assign(Object.assign({}, travels[i]), { "occupiedSeats": seats });
        }
        return travels;
    }
};
TravelService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TravelService);
exports.TravelService = TravelService;
//# sourceMappingURL=travel.service.js.map