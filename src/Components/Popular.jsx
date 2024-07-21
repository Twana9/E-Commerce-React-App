import { useState } from "react";
import data_product from "../assets/data.js";
export function Popular() {
  const [items, setItems] = useState(data_product);

  return (
    <div className="max-container">
      <h1>Popular Products</h1>
      <hr />
      <div>
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
    <div className="w-[350px] font-poppins overflow-hidden ">
      <img
        src={props.image}
        alt="product"
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
