import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTicketServiceBase } from "./base/userTicket.service.base";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserTicketService extends UserTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getAllTicketsOfUser(token: string) {
    // JWT secret key
    let jwt_secret: any = process.env.SECRET_KEY
    // decoding the JWT token in order to get the id of user
    const payload: any = jwt.verify(token, jwt_secret);
    let userTickets: any = await this.prisma.userTicket.findMany({
      where: {
        userId: `${payload.sub}`
      },
      select: {
        ticketIdId: true
      }
    })

    console.log(userTickets)
    let userTravels = []

    for (let i = 0; i < userTickets.length; i++) {
      let ticket: any = await this.prisma.ticket.findFirst({
        where: {
          id: userTickets[i].ticketIdId
        },
        select: {
          travelIdId: true,
          seatNumber: true
        }
      })
      console.log(ticket)

      let travel = await this.prisma.travel.findFirst({
        where: {
          id: ticket?.travelIdId
        },
        select: {
          basePrice: true,
          category: true,
          date: true,
          source: true,
          destination: true
        }
      })


      userTravels.push({ ...travel, ...ticket })
    }

    return userTravels

  }
}
