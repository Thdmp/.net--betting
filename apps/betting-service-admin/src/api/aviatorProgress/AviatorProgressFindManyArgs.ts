import { AviatorProgressWhereInput } from "./AviatorProgressWhereInput";
import { AviatorProgressOrderByInput } from "./AviatorProgressOrderByInput";

export type AviatorProgressFindManyArgs = {
  where?: AviatorProgressWhereInput;
  orderBy?: Array<AviatorProgressOrderByInput>;
  skip?: number;
  take?: number;
};
