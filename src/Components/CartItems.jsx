import { removeIcon } from "../assets";
import { useCart, useProduct } from "../Zustand/store";

export function CartItems() {
  const { products } = useProduct();
  const { cart, removeFromCart } = useCart((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
  }));
  return (
    <div className="flex flex-col padding-x max-container">
      <div
        className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
       mt-5 place-items-center gap-[75px] py-5 text-[#454545]
       font-semibold text-lg"
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className=" h-[3px] bg-[#e2e2e2] border-none" />
      {products.map((item) => {
        // this condition tells us if the item id exists in the cart obj and its bigger than 0
        //the item shows in the cart section
        if (cart[item.id] > 0)
          return (
            <div key={item.id} className="">
              <div
                className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
                 my-4 place-items-center gap-[75px] text-base
                 font-poppins text-slate-gray "
              >
                <img className="h-[62px]" src={item.image} alt="item" />
                <p>{item.name}</p>
                <p>{item.new_price}$</p>
                <button
                  className="border-[1px] border-slate-200
                 h-8 w-10"
                >
                  {cart[item.id]}
                </button>
                <p>{item.new_price * cart[item.id]}$</p>
                <img
                  onClick={() => removeFromCart(item.id)}
                  src={removeIcon}
                  alt="X"
                  className="w-[15px] cursor-pointer"
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-none" />
            </div>
          );
        return null;
      })}
      <div>
        <div>
          <h1>Cart Totals</h1>
          <div>
            <div>
              <p>Subtotal</p>
              <p>{0}$</p>
            </div>
            <div>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div>
              <p>Total</p>
              <p>{0}$</p>
            </div>
          </div>
          .<button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <div>
        <p>if you have a promo code, Enter it here</p>
        <div>
          <input type="text" placeholder="promo code" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
