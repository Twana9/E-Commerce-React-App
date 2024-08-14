import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  products: all_product,
}));

export const useCart = create((set) => ({
  cart: productDefaultNumber(),
  addToCart: (itemId) =>
    set((state) => ({
      cart: [...state.cart, itemId],
    })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),
}));
function productDefaultNumber() {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  console.log(cart);
  return cart;
}
