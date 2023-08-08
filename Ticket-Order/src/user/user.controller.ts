import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { Public } from "src/decorators/public.decorator";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @Public()
  @common.Post('discount') 
  async sendDiscount(@common.Body() reqBody: any, @common.Res() res: any) {
    let discount = await this.service.sendDiscountToUsers(reqBody);
    return res.status(200).json(discount)
  } 
}
