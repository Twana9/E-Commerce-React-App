import data_product from "../assets/data";
import { Item } from "./Item";

export function RelatedProducts() {
  return (
    <div>
      <h1>Related Products</h1>
      <hr />
      <div>
        {data_product.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
