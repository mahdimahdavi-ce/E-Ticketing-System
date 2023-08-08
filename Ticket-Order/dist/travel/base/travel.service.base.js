"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelServiceBase = void 0;
class TravelServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.travel.count(args);
    }
    async findMany(args) {
        return this.prisma.travel.findMany(args);
    }
    async findOne(args) {
        return this.prisma.travel.findUnique(args);
    }
    async create(args) {
        return this.prisma.travel.create(args);
    }
    async update(args) {
        return this.prisma.travel.update(args);
    }
    async delete(args) {
        return this.prisma.travel.delete(args);
    }
    async findTicketId(parentId, args) {
        return this.prisma.travel
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .ticketId(args);
    }
    async getVehicleId(parentId) {
        return this.prisma.travel
            .findUnique({
            where: { id: parentId },
        })
            .vehicleId();
    }
}
exports.TravelServiceBase = TravelServiceBase;
//# sourceMappingURL=travel.service.base.js.map