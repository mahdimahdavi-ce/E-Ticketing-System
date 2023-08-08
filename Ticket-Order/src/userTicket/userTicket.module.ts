import { Module } from "@nestjs/common";
import { UserTicketModuleBase } from "./base/userTicket.module.base";
import { UserTicketService } from "./userTicket.service";
import { UserTicketController } from "./userTicket.controller";
import { UserTicketResolver } from "./userTicket.resolver";

@Module({
  imports: [UserTicketModuleBase],
  controllers: [UserTicketController],
  providers: [UserTicketService, UserTicketResolver],
  exports: [UserTicketService],
})
export class UserTicketModule {}
