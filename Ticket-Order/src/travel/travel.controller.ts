import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TravelService } from "./travel.service";
import { TravelControllerBase } from "./base/travel.controller.base";
import { Public } from "src/decorators/public.decorator";

@swagger.ApiTags("travels")
@common.Controller("travels")
export class TravelController extends TravelControllerBase {
  constructor(
    protected readonly service: TravelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }


  @Public()
  @common.Get()
  async getAllTravels(@common.Query() queries: any) {
    console.log(queries)
    return await this.service.findAllTravels(queries.source, queries.destination, queries.gte, queries.lt)
  }

}
