import { IncidentUpdateManyWithoutUsersInput } from "./IncidentUpdateManyWithoutUsersInput";
import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  incidents?: IncidentUpdateManyWithoutUsersInput;
  lastName?: string | null;
  locations?: LocationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
