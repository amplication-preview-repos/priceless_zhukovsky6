import { User } from "../user/User";

export type Incident = {
  createdAt: Date;
  description: string | null;
  id: string;
  latitude: number | null;
  longitude: number | null;
  updatedAt: Date;
  user?: User | null;
};
