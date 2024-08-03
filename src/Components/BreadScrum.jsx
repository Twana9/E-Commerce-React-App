import { arrow } from "../assets";

export function BreadScrum(props) {
  //disturcturing the props
  const { product } = props;
  return (
    <div className="flex">
      Home <img src={arrow} alt=">" className="" />
      Shop <img src={arrow} alt=">" />
      {product.category} <img src={arrow} alt=">" />
      {product.name}
    </div>
  );
}
