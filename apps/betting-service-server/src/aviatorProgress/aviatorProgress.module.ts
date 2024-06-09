import { Module } from "@nestjs/common";
import { AviatorProgressModuleBase } from "./base/aviatorProgress.module.base";
import { AviatorProgressService } from "./aviatorProgress.service";
import { AviatorProgressController } from "./aviatorProgress.controller";
import { AviatorProgressResolver } from "./aviatorProgress.resolver";

@Module({
  imports: [AviatorProgressModuleBase],
  controllers: [AviatorProgressController],
  providers: [AviatorProgressService, AviatorProgressResolver],
  exports: [AviatorProgressService],
})
export class AviatorProgressModule {}
