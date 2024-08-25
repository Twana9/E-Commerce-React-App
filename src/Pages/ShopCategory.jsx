import { useEffect, useState } from "react";
import { dropDownIcon } from "../assets";
import { Item } from "../Components/Item";
import { useProduct } from "../Zustand/store";
import { AnimatePresence, easeIn, motion } from "framer-motion";

export function ShopCategory(props) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMarqOpen, setIsMarqOpen] = useState(false);
  const [newProducts, setNewProducts] = useState([]);
  const products = useProduct((state) => state.products);
  useEffect(() => {
    setNewProducts(getProducts());
  }, [products, props.category]);
  useEffect(() => {
    setIsSortOpen(false);
    setIsMarqOpen(false);
  }, [props.category]);
  function getProducts() {
    let newProducts = [];
    newProducts = products.filter((item) => {
      if (item.category === props.category) {
        return item;
      }
    });
    return newProducts;
  }
  // slice() is used here to create a shallow copy of the newProducts array.
  //  This ensures that the original array remains unmodified while we perform the sorting.
  //the sort modify the sliced array
  function sortCheap() {
    const sortedAscending = newProducts
      .slice()
      .sort((a, b) => a.new_price - b.new_price);

    setNewProducts(sortedAscending);
  }
  function sortExpensive() {
    const sortedDescending = newProducts
      .slice()
      .sort((a, b) => b.new_price - a.new_price);
    setNewProducts(sortedDescending);
  }
  function handleOpenSort() {
    setIsSortOpen(!isSortOpen);
  }
  function handleClickTwo() {
    setIsMarqOpen(!isMarqOpen);
  }
  return (
    <div className="font-poppins max-container">
      <div className="w-[93%] my-5 mx-auto ">
        <motion.img
          key={props.category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easeIn }}
          src={props.banner}
          alt="banner"
          className="object-contain    
        "
        />
      </div>
      <div
        className="flex justify-between padding-x my-5
      items-center max-md:px-8 max-md:my-6  max-sm:px-3"
      >
        <p className="text-lg font-medium max-sm:text-sm ">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        {/* /////////////////////////////////////////////////////////////////////// */}
        <div
          onClick={handleOpenSort}
          className="flex  items-center text-medium gap-2.5
         px-5 py-3 border border-slate-gray rounded-full
          cursor-pointer max-sm:text-[12px] max-sm:px-4 max-sm:py-2
          max-sm:gap-1 max-sm:whitespace-nowrap relative
          transform
          active:translate-y-0.5 hover:shadow-xl z-10"
        >
          Sort by
          <img
            src={dropDownIcon}
            alt="V"
            className="object-contain max-sm:h-1.5"
          />
          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{
                  rotate: 0,
                  scale: 0,
                  y: 0,
                }}
                animate={{
                  rotate: "360deg",
                  scale: 1,
                  y: [0, 100, -100, -100, 0],
                }}
                exit={{
                  rotate: 0,
                  scale: 0,
                  y: 0,
                  y: [0, 100, -100, -100, 0],
                }}
                transition={{
                  duration: 0.3,
                  times: [0, 0.25, 0.5, 0.85, 1],
                }}
                className="absolute -bottom-[60px] left-[15px]
          bg-[#1a1919] text-white rounded-lg p-1.5
          max-sm:left-[2px] max-sm:-bottom-[52px] flex flex-col
          gap-1"
              >
                <div
                  className="text-sm whitespace-nowrap max-sm:text-xs"
                  onClick={sortCheap}
                >
                  Cheap ▾
                </div>
                <div
                  className="text-sm whitespace-nowrap max-sm:text-xs"
                  onClick={sortExpensive}
                >
                  Expensive ▾
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div
        className="grid justify-items-center  grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2
       max-md:grid-cols-1 gap-20 padding-x my-5 "
      >
        {newProducts.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <div
        className="padding-x h-[200px] my-24 flex justify-center items-center 
      max-md:my-20 max-sm:my-16 flex-col gap-16 "
      >
        <motion.button
          layout
          onClick={handleClickTwo}
          className="text-lg px-14 py-6 bg-gray-200
         rounded-full border-none text-black hover:bg-gray-300
         max-sm:px-10 max-sm:py-4 max-sm:text-base transform
          active:translate-y-0.5"
        >
          Explore More
        </motion.button>
        <AnimatePresence mode="popLayout">
          {isMarqOpen && (
            <motion.div
              initial={{
                scale: 0,
                y: 0,
              }}
              animate={{
                scale: 1,
                y: [0, 100, -100, -100, 0],
              }}
              exit={{
                scale: 0,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                times: [0, 0.25, 0.5, 0.85, 1],
              }}
              className="
          bg-[#1a1919] text-white rounded-lg py-1.5 w-[70%] text-center"
            >
              comming soon
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
