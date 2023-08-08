import { Body, Controller, Post } from "@nestjs/common";
import { ApiExcludeEndpoint, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Credentials } from "./Credentials";
import { UserInfo } from "./UserInfo";


@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiExcludeEndpoint()
  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }
}
