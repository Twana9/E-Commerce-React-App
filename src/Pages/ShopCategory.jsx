import { dropDownIcon } from "../assets";
import { Item } from "../Components/Item";
import { useProduct } from "../Zustand/store";

export function ShopCategory(props) {
  const { products } = useProduct();
  console.log(products);
  return (
    <div>
      <img src={props.banner} alt="banner" />
      <div>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div>
          Sort by <img src={dropDownIcon} alt="V" />
        </div>
      </div>
      <div>
        {products.map(
          (item, i) =>
            props.category === item.category && <Item key={i} {...item} />
        )}
      </div>
    </div>
  );
}
