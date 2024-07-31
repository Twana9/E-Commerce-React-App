import { dropDownIcon } from "../assets";
import { Item } from "../Components/Item";
import { useProduct } from "../Zustand/store";

export function ShopCategory(props) {
  const products = useProduct((state) => state.products);
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
          className="flex  items-center text-medium gap-2.5
         px-5 py-3 border border-slate-gray rounded-full
          cursor-pointer max-sm:text-[12px] max-sm:px-4 max-sm:py-2
          max-sm:gap-1 max-sm:whitespace-nowrap"
        >
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
      <div className="padding-x my-24 flex justify-center items-center ">
        <button
          className="text-lg px-14 py-5 bg-gray-200
         rounded-full border-none text-black hover:bg-gray-300
         max-sm:px-10 max-sm:py-4 max-sm:text-base"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
