import { useState } from "react";
import data_product from "../assets/data.js";
import { Item } from "./Item.jsx";
export function Popular() {
  const [items, setItems] = useState(data_product);

  return (
    <div className="max-container">
      <h1
        className="text-slate-600 font-semibold text-4xl font-palanquin
      mb-8 max-md:text-[26px] max-md:leading-normal text-center"
      >
        POPULAR IN WOMEN
      </h1>
      <hr
        className="mb-16  w-52 h-1.5  bg-slate-600 rounded-xl
      mx-auto max-md:w-40"
      />
      <div
        className="grid justify-items-center  grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2
       max-md:grid-cols-1 gap-20"
      >
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

// id={item.id}
//             name={item.name}
//             image={item.image}
//             new_price={item.new_price}
//             old_price={item.old_price}
