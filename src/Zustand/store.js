import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  products: all_product,
}));

export const useCart = create((set) => ({
  cart: [],
  addToCart: (itemId) =>
    set((state) => ({
      cart: [...state.cart, itemId],
    })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),
}));
