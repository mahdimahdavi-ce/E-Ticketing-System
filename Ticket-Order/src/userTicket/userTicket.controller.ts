import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserTicketService } from "./userTicket.service";
import { UserTicketControllerBase } from "./base/userTicket.controller.base";
import { Public } from "src/decorators/public.decorator";

@swagger.ApiTags("userTickets")
@common.Controller("userTickets")
export class UserTicketController extends UserTicketControllerBase {
  constructor(
    protected readonly service: UserTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @Public()
  @common.Get()
  async getAllTicketsOfUser(@common.Query() queries: any) {
    return await this.service.getAllTicketsOfUser(queries.token)
  }
}
