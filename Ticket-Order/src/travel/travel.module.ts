import { Module } from "@nestjs/common";
import { TravelModuleBase } from "./base/travel.module.base";
import { TravelService } from "./travel.service";
import { TravelController } from "./travel.controller";
import { TravelResolver } from "./travel.resolver";

@Module({
  imports: [TravelModuleBase],
  controllers: [TravelController],
  providers: [TravelService, TravelResolver],
  exports: [TravelService],
})
export class TravelModule {}
