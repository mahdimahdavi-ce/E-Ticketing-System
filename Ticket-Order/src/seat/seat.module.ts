import { Module } from "@nestjs/common";
import { SeatModuleBase } from "./base/seat.module.base";
import { SeatService } from "./seat.service";
import { SeatController } from "./seat.controller";
import { SeatResolver } from "./seat.resolver";

@Module({
  imports: [SeatModuleBase],
  controllers: [SeatController],
  providers: [SeatService, SeatResolver],
  exports: [SeatService],
})
export class SeatModule {}
