import { cartIcon, logo } from "../../assets";
import "./Navbar.css";
export function Navbar() {
  return (
    <div
      className="flex justify-around shadow-nav
     shadow-black p-4"
    >
      <div
        className="flex  
       items-center gap-3"
      >
        <img
          src={logo}
          alt="logo"
          height={52}
          width={52}
          className="object-contain"
        />
        <p
          className="text-[#171717] font-semibold 
        text-[29px] font-sans"
        >
          SHOPPING
        </p>
      </div>
      <ul
        className="flex items-center gap-[50px]
        font-medium text-lg text-slate-700
        font-monserat"
      >
        <li
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Shop
          <hr
            className="border-none w-[80%]
          h-[3px] rounded-[10px] bg-red-500"
          />
        </li>
        <li
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Men
        </li>
        <li
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Women
        </li>
        <li
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Kids
        </li>
      </ul>
      <div
        className="flex 
       items-center gap-11"
      >
        <button
          className="px-8 py-3 rounded-full border-[1px]
         border-slate-gray font-sans text-slate-600
         text-lg outline-none hover:transition-all duration-1000 active:bg-slate-100
         hover:bg-gradient-to-r from-orange-500 to-yellow-500
          hover:text-white  "
        >
          Login
        </button>
        <img
          src={cartIcon}
          alt="cart"
          height={40}
          width={40}
          className="object-contain"
        />
      </div>
    </div>
  );
}
