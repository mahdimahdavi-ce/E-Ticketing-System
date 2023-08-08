import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeatServiceBase } from "./base/seat.service.base";

@Injectable()
export class SeatService extends SeatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
