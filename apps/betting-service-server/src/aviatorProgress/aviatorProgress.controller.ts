import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AviatorProgressService } from "./aviatorProgress.service";
import { AviatorProgressControllerBase } from "./base/aviatorProgress.controller.base";

@swagger.ApiTags("aviatorProgresses")
@common.Controller("aviatorProgresses")
export class AviatorProgressController extends AviatorProgressControllerBase {
  constructor(protected readonly service: AviatorProgressService) {
    super(service);
  }
}
