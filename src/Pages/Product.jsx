import { useParams } from "react-router-dom";
import { useProduct } from "../Zustand/store";
import { BreadScrum } from "../Components/BreadScrum";

export function Product() {
  const products = useProduct((state) => state.products);
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));
  return (
    <div>
      <BreadScrum product={product} />
    </div>
  );
}
