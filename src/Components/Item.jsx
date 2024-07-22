export function Item(props) {
  return (
    <div className="w-[300px] font-poppins overflow-hidden ">
      <img
        src={props.image}
        alt="product"
        height={368}
        width={300}
        className="object-contain hover:scale-105
    transition duration-500"
      />
      <p className="my-1.5 font-palanquin font-medium">{props.name}</p>
      <div className="flex gap-5">
        <p className="text-[#374151] text-[18px] font-[600]">
          {props.new_price}$
        </p>
        <p
          className="text-[#8c8c8c] text-[18px] font-[500] 
        line-through"
        >
          {props.old_price}$
        </p>
      </div>
    </div>
  );
}
