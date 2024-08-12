import data_product from "../assets/data";
import { Item } from "./Item";

export function RelatedProducts() {
  return (
    <div
      className=" flex flex-col items-center max-container  px-[90px] max-xl:px-[60px] 
    max-sm:px-[15px] pb-[50px]"
    >
      <h1
        className="text-slate-600 font-semibold text-4xl font-palanquin
      mb-8 max-md:text-[26px] max-md:leading-normal text-center"
      >
        Related Products
      </h1>
      <hr
        className="mb-16  w-52 h-1.5  bg-slate-600 rounded-xl
      mx-auto max-md:w-40"
      />
      <div
        className="grid justify-items-center  grid-cols-4 max-xl:grid-cols-3
         max-lg:grid-cols-2
       max-md:grid-cols-1 gap-20"
      >
        {data_product.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
