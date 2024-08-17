import { create } from "zustand";
import all_product from "../assets/all_product";
export const useProduct = create((set) => ({
  products: all_product,
}));

export const useCart = create((set, get) => ({
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
  //this function is iterating over the cart obj to get the existed id's
  //then finding the the product by id (string) then pultipying and adding
  //to total amount :--
  // In JavaScript, when you iterate over the properties of an object using
  // a for...in loop, the loop iterates over the property names of the object.
  // These property names are always strings, even if they represent numbers.
  getTotalCartAmount: () => {
    const { cart } = get(); // Use get() to access the current state
    let totalAmount = 0;
    for (let item in cart) {
      if (cart[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cart[item];
        }
      }
    }
    return totalAmount;
  },
  getTotalItems: () => {
    const { cart } = get();
    let totalItems = 0;
    for (let item in cart) {
      if (cart[item] > 0) {
        totalItems += cart[item];
      }
    }
    return totalItems;
  },
}));

///////////cart///////////////////////////////////////////////////
function getDefaultCart() {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }

  return cart;
}
