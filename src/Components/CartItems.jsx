import { removeIcon } from "../assets";
import { useCart, useProduct } from "../Zustand/store";

export function CartItems() {
  const { products } = useProduct();
  const { cart, removeFromCart } = useCart((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart(),
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
      <div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
          <button></button>
          <p></p>
          <img onClick={() => removeFromCart()} src={removeIcon} alt="" />
        </div>
        <hr />
      </div>
    </div>
  );
}
