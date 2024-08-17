import { useState } from "react";
import { removeIcon } from "../assets";
import { useCart, useProduct } from "../Zustand/store";

export function CartItems() {
  const [promo, setPromo] = useState("");
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
       font-semibold text-lg 
       max-xl:grid-cols-[0.6fr_2.75fr_0.75fr_0.7fr_0.75fr_0.7fr]
       max-lg:text-base max-lg:gap-[30px]
       max-md:gap-[15px] max-md:text-sm 
       max-sm:text-[11px] max-sm:mt-3 max-sm:gap-[11px]
       max-sm:tracking-tighter"
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
                 font-poppins text-slate-gray 
                 max-xl:grid-cols-[0.6fr_2.75fr_0.75fr_0.7fr_0.75fr_0.7fr]
                 max-lg:text-sm max-lg:gap-[30px]
                 max-md:gap-[18px] max-md:text-xs 
                  max-sm:gap-[15px]
                 max-sm:text-[12px]
                 max-sm:grid-cols-[0.75fr_2.75fr_0.75fr_0.7fr_0.75fr_0.7fr]
                 "
              >
                <img
                  className="h-[62px] max-md:h-[45px] max-sm:h-[37px]"
                  src={item.image}
                  alt="item"
                />
                <p className="max-sm:tracking-tight max-sm:text-center">
                  {item.name}
                </p>
                <p>{item.new_price}$</p>
                <button
                  className="border-[1px] border-slate-200
                 h-8 w-10 max-sm:h-6 max-sm:w-8"
                >
                  {cart[item.id]}
                </button>
                <p>{item.new_price * cart[item.id]}$</p>
                <img
                  onClick={() => removeFromCart(item.id)}
                  src={removeIcon}
                  alt="X"
                  className="w-[15px] cursor-pointer
                  max-md:w-[11px]"
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-none" />
            </div>
          );
        return null;
      })}
      <div className="flex mt-12 mb-16 font-poppins max-lg:flex-col">
        <div
          className="flex-1 flex flex-col gap-10 mr-52
        max-xl:mr-24 max-lg:mr-0 max-md:gap-7"
        >
          <h1 className="text-xl font-semibold">Cart Totals</h1>
          <div className="text-base text-slate-gray">
            <div className="flex justify-between py-3">
              <p>Subtotal</p>
              <p>{0}$</p>
            </div>
            <hr className="h-[2px] bg-[#e2e2e2] border-none" />
            <div className="flex justify-between py-3">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-[2px] bg-[#e2e2e2] border-none" />
            <div
              className="flex justify-between py-3 text-black
            font-semibold"
            >
              <p>Total</p>
              <p>{0}$</p>
            </div>
            <hr className="h-[2px] bg-[#e2e2e2] border-none" />
          </div>
          <button
            className="bg-red-500 h-12 w-64 text-white
          outline-none border-none active:bg-red-700 hover:shadow-3xl
          max-md:text-sm max-md:h-10 max-md:w-52"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 ">
          <p
            className="text-sm text-slate-gray mb-3
          max-lg:mt-10 max-md:text-xs"
          >
            if you have a promo code, Enter it here
          </p>
          <div className="flex items-center">
            <input
              onChange={(e) => setPromo(e.target.value)}
              value={promo}
              type="text"
              placeholder="promo code"
              className="bg-[#ececec] px-3 py-4  w-[300px] text-sm
              rounded-lg outline-none max-lg:w-[60%]
              max-md:py-3 "
            />
            <button
              className="bg-black outline-none border-none text-white
            text-sm px-5 py-4 rounded-lg -ml-3 transition-all active:bg-[#383636]
             duration-[0.5s] active:shadow-2xl 
             max-lg:px-8 max-md:py-3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
