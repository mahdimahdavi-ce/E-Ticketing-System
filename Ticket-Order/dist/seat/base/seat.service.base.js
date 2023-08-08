"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatServiceBase = void 0;
class SeatServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.seat.count(args);
    }
    async findMany(args) {
        return this.prisma.seat.findMany(args);
    }
    async findOne(args) {
        return this.prisma.seat.findUnique(args);
    }
    async create(args) {
        return this.prisma.seat.create(args);
    }
    async update(args) {
        return this.prisma.seat.update(args);
    }
    async delete(args) {
        return this.prisma.seat.delete(args);
    }
    async getVehicleId(parentId) {
        return this.prisma.seat
            .findUnique({
            where: { id: parentId },
        })
            .vehicleId();
    }
}
exports.SeatServiceBase = SeatServiceBase;
//# sourceMappingURL=seat.service.base.js.map