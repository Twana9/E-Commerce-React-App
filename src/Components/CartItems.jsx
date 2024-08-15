import { removeIcon } from "../assets";

import { useCart, useProduct } from "../Zustand/store";

export function CartItems() {
  const { products } = useProduct();
  const { cart, removeFromCart } = useCart((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
  }));
  return (
    <div>
      <div>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((item) => {
        if (cart[item.id] > 0)
          return (
            <div key={item.id}>
              <div>
                <img src={item.image} alt="item" />
                <p>{item.name}</p>
                <p>{item.new_price}</p>
                <button>{cart[item.id]}</button>
                <p>{item.new_price * cart[item.id]}</p>
                <img
                  onClick={() => removeFromCart(item.id)}
                  src={removeIcon}
                  alt="X"
                />
              </div>
              <hr />
            </div>
          );
      })}
    </div>
  );
}
