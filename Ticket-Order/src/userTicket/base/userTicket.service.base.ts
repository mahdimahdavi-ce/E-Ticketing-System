/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserTicket, Ticket } from "@prisma/client";

export class UserTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserTicketFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTicketFindManyArgs>
  ): Promise<number> {
    return this.prisma.userTicket.count(args);
  }

  async findMany<T extends Prisma.UserTicketFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTicketFindManyArgs>
  ): Promise<UserTicket[]> {
    return this.prisma.userTicket.findMany(args);
  }
  async findOne<T extends Prisma.UserTicketFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTicketFindUniqueArgs>
  ): Promise<UserTicket | null> {
    return this.prisma.userTicket.findUnique(args);
  }
  async create<T extends Prisma.UserTicketCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTicketCreateArgs>
  ): Promise<UserTicket> {
    return this.prisma.userTicket.create<T>(args);
  }
  async update<T extends Prisma.UserTicketUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTicketUpdateArgs>
  ): Promise<UserTicket> {
    return this.prisma.userTicket.update<T>(args);
  }
  async delete<T extends Prisma.UserTicketDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTicketDeleteArgs>
  ): Promise<UserTicket> {
    return this.prisma.userTicket.delete(args);
  }

  async getTicketId(parentId: string): Promise<Ticket | null> {
    return this.prisma.userTicket
      .findUnique({
        where: { id: parentId },
      })
      .ticketId();
  }
}
