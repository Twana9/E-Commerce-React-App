import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  products: all_product,
}));

export const useCart = create((set) => ({
  cart: getDefaultCart(),
  addToCart: (itemId) => {
    set((state) => ({
      //[itemId] is used to access the value of itemId for example [itemId] = 1
      // so its {...state.cart, 1 : state.cart[1] + 1}
      cart: { ...state.cart, [itemId]: state.cart[itemId] + 1 },
    }));
  },
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: { ...state.cart, [itemId]: state.cart[itemId] - 1 },
    })),
  getTotalCartAmount: () => {
    let totalAmount = 0;
    for (let item in cart) {
      if (cart[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cart[item];
      }
    }
    return totalAmount;
  },
}));

////
function getDefaultCart() {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }

  return cart;
}
