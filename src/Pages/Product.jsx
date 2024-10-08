import { useParams } from "react-router-dom";
import { useProduct } from "../Zustand/store";
import { BreadScrum } from "../Components/BreadScrum";
import { ProductDisplay } from "../Components/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts";

export function Product() {
  const products = useProduct((state) => state.products);
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));
  return (
    <div>
      <BreadScrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}
