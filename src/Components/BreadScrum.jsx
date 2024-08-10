import { newArrow } from "../assets";

export function BreadScrum(props) {
  //disturcturing the props
  const { product } = props;
  return (
    <div
      className="flex items-center gap-2 my-[60px] mx-[130px]
    font-poppins text-base tracking-tight max-container
    text-capitalize font-semibold text-[#5e5e5e]
    max-xl:mx-[60px] max-xl:my-[40px]"
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
