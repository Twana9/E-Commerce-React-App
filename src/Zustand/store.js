import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  ...all_product,
}));
