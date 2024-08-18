import { useEffect, useState } from "react";
import { dropDownIcon } from "../assets";
import { Item } from "../Components/Item";
import { useProduct } from "../Zustand/store";

export function ShopCategory(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMarqOpen, setIsMarqOpen] = useState(false);
  const products = useProduct((state) => state.products);
  useEffect(() => {
    setIsOpen(false);
    setIsMarqOpen(false);
  }, [props.category]);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  function handleClickTwo() {
    setIsMarqOpen(!isMarqOpen);
  }
  return (
    <div className="font-poppins max-container">
      <div className="w-[93%] my-5 mx-auto ">
        <img
          src={props.banner}
          alt="banner"
          className="object-contain    
        "
        />
      </div>
      <div
        className="flex justify-between padding-x my-5
      items-center max-md:px-8 max-md:my-6  max-sm:px-3"
      >
        <p className="text-lg font-medium max-sm:text-sm ">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div
          onClick={handleClick}
          className="flex  items-center text-medium gap-2.5
         px-5 py-3 border border-slate-gray rounded-full
          cursor-pointer max-sm:text-[12px] max-sm:px-4 max-sm:py-2
          max-sm:gap-1 max-sm:whitespace-nowrap relative
          transform
          active:translate-y-0.5 hover:shadow-xl z-50"
        >
          {isOpen && (
            <div
              className="absolute -bottom-[43px] left-[37px]
          bg-[#1a1919] text-white rounded-lg p-1.5 
          max-sm:left-[24px] max-sm:-bottom-[35px]"
            >
              soon
            </div>
          )}
          Sort by
          <img
            src={dropDownIcon}
            alt="V"
            className="object-contain max-sm:h-1.5"
          />
        </div>
      </div>
      <div
        className="grid justify-items-center  grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2
       max-md:grid-cols-1 gap-20 padding-x my-5 "
      >
        {products.map(
          (item) =>
            props.category === item.category && <Item key={item.id} {...item} />
        )}
      </div>
      <div
        className="padding-x my-24 flex justify-center items-center 
      max-md:my-20 max-sm:my-16 flex-col gap-16"
      >
        <button
          onClick={handleClickTwo}
          className="text-lg px-14 py-5 bg-gray-200
         rounded-full border-none text-black hover:bg-gray-300
         max-sm:px-10 max-sm:py-4 max-sm:text-base transform
          active:translate-y-0.5"
        >
          Explore More
        </button>
        {isMarqOpen && (
          <marquee
            className="
          bg-[#1a1919] text-white rounded-lg py-1.5"
          >
            comming soon - - - comming soon - - - comming soon
          </marquee>
        )}
      </div>
    </div>
  );
}
