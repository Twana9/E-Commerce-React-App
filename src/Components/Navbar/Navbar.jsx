import { useState } from "react";
import { cartIcon, hamburger, logo } from "../../assets";
import "./Navbar.css";
export function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    setIsMenuOpen(true);
  }
  function handleClose(e) {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div
      className="flex justify-around shadow-nav
     shadow-black p-4 max-lg:justify-between
     "
    >
      <div
        className="flex cursor-pointer 
       items-center gap-4 max-md:gap-2"
      >
        <img
          src={logo}
          alt="logo"
          height={52}
          width={52}
          className="object-contain max-md:h-[36px]
          max-md:w-[36px] max-lg:w-[45px] max-lg:h-[45px]
          mb-1"
        />
        <p
          className="text-[#171717] font-semibold 
        text-[29px] font-sans max-md:text-[16px]
        max-lg:text-[23px]"
        >
          SHOPPING
        </p>
      </div>
      <ul
        className="flex items-center gap-[50px]
        font-medium text-lg text-slate-700
        font-monserat max-lg:hidden"
      >
        <li onClick={() => setSelectedMenu("shop")} className="li-big">
          Shop
          {selectedMenu === "shop" && <hr className="hr" />}
        </li>
        <li onClick={() => setSelectedMenu("men")} className="li-big">
          Men
          {selectedMenu === "men" && <hr className="hr" />}
        </li>
        <li onClick={() => setSelectedMenu("women")} className="li-big">
          Women
          {selectedMenu === "women" && <hr className="hr" />}
        </li>
        <li onClick={() => setSelectedMenu("kids")} className="li-big">
          Kids
          {selectedMenu === "kids" && <hr className="hr" />}
        </li>
      </ul>
      <div
        className="flex 
       items-center gap-11 max-md:gap-8"
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
          className="object-contain cursor-pointer
          max-md:h-[33px] max-md:w-[33px]
          max-lg:w-[40px] max-lg:h-[40px]"
        />
        <div
          className="w-6 h-6 flex justify-center items-center
          -ml-14 -mt-9 text-[16px] bg-red-500 text-white
          cursor-pointer rounded-xl max-md:h-[18px] max-md:w-[18px]
          max-md:-ml-[45px] max-md:-mt-7 max-md:text-[12px]"
        >
          0
        </div>
        <div className="lg:hidden" onClick={handleClick}>
          <img
            src={hamburger}
            alt="nav"
            height={45}
            width={45}
            className="object-contain max-md:h-[33px] max-md:w-[33px]
            max-lg:w-[40px] max-lg:h-[40px] cursor-pointer"
          />

          <Hamburger
            isMenuOpen={isMenuOpen}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            setIsMenuOpen={setIsMenuOpen}
            handleClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
}
function Hamburger({ isMenuOpen, selectedMenu, setSelectedMenu, handleClose }) {
  return (
    <div
      className={`fixed  inset-0 transform lg:hidden
      transition-transform duration-500 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }
      `}
    >
      <div
        className="absolute top-0 right-0 w-[80%] h-full
       bg-white z-40 p-4"
      >
        <ul
          className="flex flex-col items-start gap-10
        font-medium text-lg text-slate-700
        font-monserat p-16 "
        >
          <li
            onClick={(e) => {
              setSelectedMenu("shop");
              handleClose(e);
            }}
            className="li-small"
          >
            Shop
            {selectedMenu === "shop" && <hr className="hr" />}
          </li>
          <li
            onClick={(e) => {
              setSelectedMenu("men");
              handleClose(e);
            }}
            className="li-small"
          >
            Men
            {selectedMenu === "men" && <hr className="hr" />}
          </li>
          <li
            onClick={(e) => {
              setSelectedMenu("women");
              handleClose(e);
            }}
            className="li-small"
          >
            Women
            {selectedMenu === "women" && <hr className="hr" />}
          </li>
          <li
            onClick={(e) => {
              setSelectedMenu("kids");
              handleClose(e);
            }}
            className="li-small"
          >
            Kids
            {selectedMenu === "kids" && <hr className="hr" />}
          </li>
        </ul>
      </div>
      <div
        onClick={handleClose}
        className={`fixed top-0  right-0 h-full w-full 
         bg-black  opacity-40 `}
      ></div>
    </div>
  );
}
