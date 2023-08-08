"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketServiceBase = void 0;
class TicketServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.ticket.count(args);
    }
    async findMany(args) {
        return this.prisma.ticket.findMany(args);
    }
    async findOne(args) {
        return this.prisma.ticket.findUnique(args);
    }
    async create(args) {
        return this.prisma.ticket.create(args);
    }
    async update(args) {
        return this.prisma.ticket.update(args);
    }
    async delete(args) {
        return this.prisma.ticket.delete(args);
    }
    async getTravelId(parentId) {
        return this.prisma.ticket
            .findUnique({
            where: { id: parentId },
        })
            .travelId();
    }
    async getUserId(parentId) {
        return this.prisma.ticket
            .findUnique({
            where: { id: parentId },
        })
            .userId();
    }
}
exports.TicketServiceBase = TicketServiceBase;
//# sourceMappingURL=ticket.service.base.js.map