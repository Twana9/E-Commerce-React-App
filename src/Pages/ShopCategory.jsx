import { dropDownIcon } from "../assets";
import { Item } from "../Components/Item";
import { useProduct } from "../Zustand/store";

export function ShopCategory(props) {
  const products = useProduct((state) => state.products);
  return (
    <div className="font-poppins max-container">
      <div className="px-[50px] my-5">
        <img
          src={props.banner}
          alt="banner"
          className="object-contain    
        "
        />
      </div>
      <div
        className="flex justify-between padding-x my-5
      items-center"
      >
        <p className="text-lg font-medium">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div
          className="flex  items-center text-medium gap-2.5
         px-5 py-3 border border-slate-gray rounded-full cursor-pointer"
        >
          Sort by <img src={dropDownIcon} alt="V" className="object-contain " />
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
    </div>
  );
}
