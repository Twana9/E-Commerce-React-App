import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Item(props) {
  function handleClick() {
    window.scrollTo(0, 80);
  }

  return (
    <motion.div
      initial={{ y: "-50px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", staggerChildren: 1 }}
      className="w-[300px] font-poppins overflow-hidden "
    >
      <Link to={`/product/${props.id}`}>
        <img
          onClick={handleClick}
          src={props.image}
          alt="product"
          height={368}
          width={300}
          className="object-contain hover:scale-105
    transition duration-500"
        />
      </Link>
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
    </motion.div>
  );
}
