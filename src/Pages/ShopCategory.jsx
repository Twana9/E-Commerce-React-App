import { dropDownIcon } from "../assets";
import { Item } from "../Components/Item";
import { useProduct } from "../Zustand/store";

export function ShopCategory(props) {
  const products = useProduct((state) => state.products); // Access the products array

  // Check if products is an array
  if (!Array.isArray(products)) {
    console.error("Products is not an array", products);
    return null; // or some fallback UI
  }

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

// import { dropDownIcon } from "../assets";
// import { Item } from "../Components/Item";
// import { useProduct } from "../Zustand/store";

// export function ShopCategory(props) {
//   const products = useProduct((state) => state);
//   return (
//     <div>
//       <img src={props.banner} alt="banner" />
//       <div>
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div>
//           Sort by <img src={dropDownIcon} alt="V" />
//         </div>
//       </div>
//       <div>
//         {products.map(
//           (item, i) =>
//             props.category === item.category && <Item key={i} {...item} />
//         )}
//       </div>
//     </div>
//   );
// }
