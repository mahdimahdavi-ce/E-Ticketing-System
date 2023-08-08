import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TravelServiceBase } from "./base/travel.service.base";

@Injectable()
export class TravelService extends TravelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async findAllTravels(source: any, destination: any, gte: string, lt: string) {
    let travels = await this.prisma.travel.findMany({
      where: {
        source: source,
        destination: destination,
        date: {
          gte: new Date(gte),
          lt: new Date(lt)
        }
      }
    })
    for (let i = 0; i < travels.length; i++) {
      let occupiedSeats = await this.prisma.ticket.findMany({
        where: {
          travelIdId: travels[i].id
        },
        select: {
          seatNumber: true
        }
      })
      let seats: number[] = []
      if (occupiedSeats.length !== 0) {
        occupiedSeats.forEach((e) => {
          seats.push(e.seatNumber)
        })
      }

      travels[i] = { ...travels[i], ...{ "occupiedSeats": seats } }
    }

    return travels
  }
}
