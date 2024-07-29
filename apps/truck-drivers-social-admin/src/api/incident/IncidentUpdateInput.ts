import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncidentUpdateInput = {
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  user?: UserWhereUniqueInput | null;
};
