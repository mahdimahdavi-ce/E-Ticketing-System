import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SeatService } from "./seat.service";
import { SeatControllerBase } from "./base/seat.controller.base";

@swagger.ApiTags("seats")
@common.Controller("seats")
export class SeatController extends SeatControllerBase {
  constructor(
    protected readonly service: SeatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
