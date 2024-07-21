import { useState } from "react";
import data_product from "../assets/data.js";
export function Popular() {
  const [items, setItems] = useState(data_product);

  return (
    <div className="max-container">
      <h1
        className="text-slate-600 font-semibold text-4xl font-palanquin
      mb-8 max-md:text-[32px] max-md:leading-normal"
      >
        Popular Products
      </h1>
      <hr className="mb-16" />
      <div
        className="grid justify-items-center  grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2
       max-md:grid-cols-1 gap-20"
      >
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
function Item(props) {
  return (
    <div className="w-[300px] font-poppins overflow-hidden ">
      <img
        src={props.image}
        alt="product"
        height={368}
        width={300}
        className="object-contain hover:scale-105
    transition duration-500"
      />
      <p className="my-1.5 font-palanquin font-medium">{props.name}</p>
      <div className="flex gap-5">
        <p className="text-[#374151] text-[18px] font-[600]">
          {props.new_price}
        </p>
        <p
          className="text-[#8c8c8c] text-[18px] font-[500] 
        line-through"
        >
          {props.old_price}
        </p>
      </div>
    </div>
  );
}
