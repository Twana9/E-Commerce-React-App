import { arrow, newArrow } from "../assets";

export function BreadScrum(props) {
  //disturcturing the props
  const { product } = props;
  return (
    <div
      className="flex items-center gap-1 max-conter px-16 py-10
    font-poppins text-sm tracking-tight max-container"
    >
      Home
      <img src={newArrow} alt=">" className="" />
      Shop
      <img src={newArrow} alt=">" className="" />
      {product.category}
      <img src={newArrow} alt=">" className="" />
      {product.name}
    </div>
  );
}
