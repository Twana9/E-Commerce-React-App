import { useState } from "react";
import { cartIcon, logo } from "../../assets";
import "./Navbar.css";
export function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  return (
    <div
      className="flex justify-around shadow-nav
     shadow-black p-4 max-lg:justify-between"
    >
      <div
        className="flex cursor-pointer 
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
        font-monserat max-lg:hidden"
      >
        <li
          onClick={() => setSelectedMenu("shop")}
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Shop
          {selectedMenu === "shop" && (
            <hr
              className="border-none w-[80%]
          h-[3px] rounded-[10px] bg-red-500"
            />
          )}
        </li>
        <li
          onClick={() => setSelectedMenu("men")}
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Men
          {selectedMenu === "men" && (
            <hr
              className="border-none w-[80%]
          h-[3px] rounded-[10px] bg-red-500"
            />
          )}
        </li>
        <li
          onClick={() => setSelectedMenu("women")}
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Women
          {selectedMenu === "women" && (
            <hr
              className="border-none w-[80%]
          h-[3px] rounded-[10px] bg-red-500"
            />
          )}
        </li>
        <li
          onClick={() => setSelectedMenu("kids")}
          className="flex flex-col items-center
           justify-center gap-1 cursor-pointer"
        >
          Kids
          {selectedMenu === "kids" && (
            <hr
              className="border-none w-[80%]
          h-[3px] rounded-[10px] bg-red-500"
            />
          )}
        </li>
      </ul>
      <div
        className="flex 
       items-center gap-11"
      >
        <button
          className="px-8 py-3 rounded-full border-[1px]
         border-slate-gray font-sans text-slate-600
         text-lg font-medium outline-none transition ease-in-out
          duration-75 active:bg-slate-100
         hover:bg-yellow-500 hover:border-yellow-500
          hover:text-white  max-lg:hidden"
        >
          Login
        </button>
        <img
          src={cartIcon}
          alt="cart"
          height={45}
          width={45}
          className="object-contain cursor-pointer"
        />
        <div
          className="w-6 h-6 flex justify-center items-center
          -ml-14 -mt-9 text-[16px] bg-red-500 text-white
          cursor-pointer rounded-xl"
        >
          0
        </div>
        <div>
          <img src={burgar} alt="nav" />
        </div>
      </div>
    </div>
  );
}
