import { arrow } from "../assets";

export function BreadScrum(props) {
  //disturcturing the props
  const { product } = props;
  return (
    <div className="flex items-center gap-2 max-conter px-16 py-10">
      Home
      <img src={arrow} alt=">" className="filter invert hue-rotate-180 h-2.5" />
      Shop
      <img src={arrow} alt=">" className="filter invert hue-rotate-180 h-2.5" />
      {product.category}
      <img
        src={arrow}
        alt="arrow"
        className="filter invert hue-rotate-180 h-2.5"
      />
      {product.name}
    </div>
  );
}
