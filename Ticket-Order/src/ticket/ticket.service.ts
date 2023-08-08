import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketServiceBase } from "./base/ticket.service.base";
// import { JwtService } from '@nestjs/jwt';
import { EnumTicketGender } from "./base/EnumTicketGender";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TicketService extends TicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async orderTicket(ticketInfo: any) {
    try {
      // JWT secret key
      let jwt_secret: any = process.env.SECRET_KEY
      // decoding the JWT token in order to get the id of user
      const payload: any = jwt.verify(ticketInfo.token, jwt_secret);
      // get the vehicleId of travel
      const vehicleId: any = await this.prisma.travel.findFirst({
        where: {
          id: ticketInfo.travleId
        },
        select: {
          vehicleIdId: true
        }
      })

      // create a ticket and userTicket record in database for any seat specified by request
      for (let seatNumber in ticketInfo.seat_reserved) {
        let ticket: any = await this.prisma.ticket.create({
          data: {
            travelIdId: ticketInfo.travelId,
            seatNumber: parseInt(seatNumber),
            vehicleId: parseInt(vehicleId.vehicleIdId),
            createdAt: new Date(),
            updatedAt: new Date(),
            nationalId: ticketInfo.seat_reserved[seatNumber],
            firstName: "unknown",
            lastName: "unknown",
            gender: EnumTicketGender.Male
          }
        })

        await this.prisma.userTicket.create({
          data: {
            createdAt: new Date(),
            updatedAt: new Date(),
            ticketIdId: `${ticket.id}`,
            userId: `${payload.sub}`,
            isCanceled: false,
          }
        })
      }
      return { "message": "The tickets are reserved successfully" }
    } catch (error) {
      return { "error": error }
    }
  }
}
