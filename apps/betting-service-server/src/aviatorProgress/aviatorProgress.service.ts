import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AviatorProgressServiceBase } from "./base/aviatorProgress.service.base";

@Injectable()
export class AviatorProgressService extends AviatorProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
