import { arrow } from "../assets";

export function BreadScrum(props) {
  //disturcturing the props
  const { product } = props;
  return (
    <div className="flex items-center gap-2">
      Home{" "}
      <img src={arrow} alt=">" className="filter invert hue-rotate-180 h-3.5" />
      Shop
      <img src={arrow} alt=">" className="filter invert hue-rotate-180 h-3.5" />
      {product.category}
      <img
        src={arrow}
        alt="arrow"
        className="filter invert hue-rotate-180 h-3.5"
      />
      {product.name}
    </div>
  );
}
