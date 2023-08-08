"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTicketServiceBase = void 0;
class UserTicketServiceBase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.userTicket.count(args);
    }
    async findMany(args) {
        return this.prisma.userTicket.findMany(args);
    }
    async findOne(args) {
        return this.prisma.userTicket.findUnique(args);
    }
    async create(args) {
        return this.prisma.userTicket.create(args);
    }
    async update(args) {
        return this.prisma.userTicket.update(args);
    }
    async delete(args) {
        return this.prisma.userTicket.delete(args);
    }
    async getTicketId(parentId) {
        return this.prisma.userTicket
            .findUnique({
            where: { id: parentId },
        })
            .ticketId();
    }
}
exports.UserTicketServiceBase = UserTicketServiceBase;
//# sourceMappingURL=userTicket.service.base.js.map