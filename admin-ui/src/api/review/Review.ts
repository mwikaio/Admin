import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  products?: Product | null;
  rating: number;
  updatedAt: Date;
  user?: User | null;
};
