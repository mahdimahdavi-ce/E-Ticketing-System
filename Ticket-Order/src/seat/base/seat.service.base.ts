/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Seat, Vehicle } from "@prisma/client";

export class SeatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SeatFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeatFindManyArgs>
  ): Promise<number> {
    return this.prisma.seat.count(args);
  }

  async findMany<T extends Prisma.SeatFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeatFindManyArgs>
  ): Promise<Seat[]> {
    return this.prisma.seat.findMany(args);
  }
  async findOne<T extends Prisma.SeatFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeatFindUniqueArgs>
  ): Promise<Seat | null> {
    return this.prisma.seat.findUnique(args);
  }
  async create<T extends Prisma.SeatCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeatCreateArgs>
  ): Promise<Seat> {
    return this.prisma.seat.create<T>(args);
  }
  async update<T extends Prisma.SeatUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeatUpdateArgs>
  ): Promise<Seat> {
    return this.prisma.seat.update<T>(args);
  }
  async delete<T extends Prisma.SeatDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeatDeleteArgs>
  ): Promise<Seat> {
    return this.prisma.seat.delete(args);
  }

  async getVehicleId(parentId: string): Promise<Vehicle | null> {
    return this.prisma.seat
      .findUnique({
        where: { id: parentId },
      })
      .vehicleId();
  }
}
