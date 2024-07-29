import { SortOrder } from "../../util/SortOrder";

export type IncidentOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
