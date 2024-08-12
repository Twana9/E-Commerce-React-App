import { newArrow } from "../assets";

export function BreadScrum(props) {
  //disturcturing the props
  const { product } = props;
  return (
    <div
      className="flex items-center gap-2 my-[60px] mx-[100px]
    font-poppins text-base tracking-tight max-container
    text-capitalize font-semibold text-[#5e5e5e]
    max-xl:mx-[60px] max-xl:my-[40px]
     max-sm:my-[20px] max-sm:mx-[15px]
    max-sm:flex-wrap"
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
