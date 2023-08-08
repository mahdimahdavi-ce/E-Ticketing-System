import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketService } from "./ticket.service";
import { TicketControllerBase } from "./base/ticket.controller.base";
import { Public } from "src/decorators/public.decorator";

@swagger.ApiTags("tickets")
@common.Controller("tickets")
export class TicketController extends TicketControllerBase {
  constructor(
    protected readonly service: TicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }


  @Public()
  @common.Post('orderticket')
  async orderTicket(@common.Body() reqBody: any, @common.Res() res: any) {
    let ticketRes = await this.service.orderTicket(reqBody)
    if (ticketRes.message !== undefined) {
      res.status(200).json(ticketRes)
    } else {
      res.status(500).json(ticketRes)
    }
  }


}
