import { Incident } from "../incident/Incident";
import { Location } from "../location/Location";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  incidents?: Array<Incident>;
  lastName: string | null;
  locations?: Array<Location>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
