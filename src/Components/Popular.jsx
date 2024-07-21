import { useState } from "react";
import data_product from "../assets/data.js";
export function Popular() {
  const [items, setItems] = useState(data_product);

  return (
    <div>
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
    <div>
      <img src={props.image} alt="product" />
      <p>{props.name}</p>
      <div>
        <p>{props.new_price}</p>
        <p>{props.old_price}</p>
      </div>
    </div>
  );
}
