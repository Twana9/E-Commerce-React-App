import { useParams } from "react-router-dom";
import { useProduct } from "../Zustand/store";

export function Product() {
  const products = useProduct((state) => state.products);
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));
  return (
    <div>
      <div>{product.id}</div>
    </div>
  );
}
