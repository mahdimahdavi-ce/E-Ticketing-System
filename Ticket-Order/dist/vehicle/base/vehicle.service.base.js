"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleServiceBase = void 0;
class VehicleServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.vehicle.count(args);
    }
    async findMany(args) {
        return this.prisma.vehicle.findMany(args);
    }
    async findOne(args) {
        return this.prisma.vehicle.findUnique(args);
    }
    async create(args) {
        return this.prisma.vehicle.create(args);
    }
    async update(args) {
        return this.prisma.vehicle.update(args);
    }
    async delete(args) {
        return this.prisma.vehicle.delete(args);
    }
    async findSeats(parentId, args) {
        return this.prisma.vehicle
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .seats(args);
    }
    async findTravelId(parentId, args) {
        return this.prisma.vehicle
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .travelId(args);
    }
}
exports.VehicleServiceBase = VehicleServiceBase;
//# sourceMappingURL=vehicle.service.base.js.map