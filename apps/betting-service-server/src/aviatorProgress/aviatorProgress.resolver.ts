import * as graphql from "@nestjs/graphql";
import { AviatorProgressResolverBase } from "./base/aviatorProgress.resolver.base";
import { AviatorProgress } from "./base/AviatorProgress";
import { AviatorProgressService } from "./aviatorProgress.service";

@graphql.Resolver(() => AviatorProgress)
export class AviatorProgressResolver extends AviatorProgressResolverBase {
  constructor(protected readonly service: AviatorProgressService) {
    super(service);
  }
}
