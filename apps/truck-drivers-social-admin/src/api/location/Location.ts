import { User } from "../user/User";

export type Location = {
  createdAt: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  updatedAt: Date;
  user?: User | null;
};
