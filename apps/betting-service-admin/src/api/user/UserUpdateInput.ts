import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  balance?: number | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
