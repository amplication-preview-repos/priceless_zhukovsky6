import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IncidentListRelationFilter } from "../incident/IncidentListRelationFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  incidents?: IncidentListRelationFilter;
  lastName?: StringNullableFilter;
  locations?: LocationListRelationFilter;
  username?: StringFilter;
};
