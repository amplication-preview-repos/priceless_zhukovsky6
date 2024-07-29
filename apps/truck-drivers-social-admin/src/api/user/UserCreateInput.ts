import { IncidentCreateNestedManyWithoutUsersInput } from "./IncidentCreateNestedManyWithoutUsersInput";
import { LocationCreateNestedManyWithoutUsersInput } from "./LocationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  incidents?: IncidentCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  locations?: LocationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
