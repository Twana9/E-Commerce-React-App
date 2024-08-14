import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  products: all_product,
}));

export const useCart = create((set) => ({
  cart: getDefaultCart(),
  addToCart: (itemId) => {
    set((state) => {
      //[itemId] is used to access the value of itemId for example [itemId] = 1
      // so its {...state.cart, 1 : state.cart[1] + 1}
      const updatedCart = { ...state.cart, [itemId]: state.cart[itemId] + 1 };
      console.log(updatedCart); // Log the updated cart here
      return { cart: updatedCart };
    });
  },
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: { ...state.cart, [itemId]: state.cart[itemId] - 1 },
    })),
}));
function getDefaultCart() {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }

  return cart;
}
