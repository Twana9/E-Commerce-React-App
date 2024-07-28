import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  products: all_product,
}));
