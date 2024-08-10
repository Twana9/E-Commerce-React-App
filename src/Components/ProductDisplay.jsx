import { starDullIcon, starIcon } from "../assets";

export function ProductDisplay(props) {
  const { product } = props;
  return (
    <div
      className="flex  my-0 mx-[170px] 
      max-container "
    >
      <div
        className="left flex  
       gap-[17px]"
      >
        <div className="image-list flex flex-col gap-4">
          <img
            src={product.image}
            alt="item"
            className="h-[131px] w-[200px] "
          />
          <img
            src={product.image}
            alt="item"
            className="h-[131px] w-[200px] "
          />
          <img
            src={product.image}
            alt="item"
            className="h-[131px] w-[200px] "
          />
          <img
            src={product.image}
            alt="item"
            className="h-[131px] w-[200px] "
          />
        </div>
        <div className="main-img">
          <img
            src={product.image}
            alt="main-item"
            className="h-[574px] w-[890px]"
          />
        </div>
      </div>
      <div className="right flex flex-col mx-[70px] ">
        <h1 className="text-[#3d3d3d] text-[40px] font-bold">{product.name}</h1>
        <div
          className="right-star flex gap-1.5 items-center 
        text-base text-[#1c1c1c] mt-[13px]"
        >
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starDullIcon} alt="star_dull" />
          <p>(122)</p>
        </div>
        <div className="flex gap-3 text-xl font-bold mt-10">
          <div className="text-slate-gray line-through ">
            {product.old_price}$
          </div>
          <div className="text-coral-red">{product.new_price}$</div>
        </div>
        <div className="text-base text-slate-gray mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cumque sit quos harum tempore sapiente explicabo error repudiandae
          magnam facilis.
        </div>
        <div>
          <h1
            className="mt-10 text-lg text-slate-gray font-semibold
          "
          >
            Select Size
          </h1>
          <div
            className="flex gap-3 mt-4 text-sm text-slate-gray
          font-bold"
          >
            <div
              className="flex justify-center items-center h-9 w-10
             border border-slate-200 bg-slate-50 rounded-sm
              shadow-sm hover:bg-slate-100 cursor-pointer 
              hover:shadow-lg"
            >
              S
            </div>
            <div
              className="flex justify-center items-center h-9 w-10
             border border-slate-200 bg-slate-50 rounded-sm
              shadow-sm hover:bg-slate-100 cursor-pointer 
              hover:shadow-lg"
            >
              M
            </div>
            <div
              className="flex justify-center items-center h-9 w-10
             border border-slate-200 bg-slate-50 rounded-sm
              shadow-sm hover:bg-slate-100 cursor-pointer 
              hover:shadow-lg"
            >
              L
            </div>
            <div
              className="flex justify-center items-center h-9 w-10
             border border-slate-200 bg-slate-50 rounded-sm
              shadow-sm hover:bg-slate-100 cursor-pointer 
              hover:shadow-lg"
            >
              XL
            </div>
            <div
              className="flex justify-center items-center h-9 w-10
             border border-slate-200 bg-slate-50 rounded-sm
              shadow-sm hover:bg-slate-100 cursor-pointer 
              hover:shadow-lg"
            >
              XXL
            </div>
          </div>
        </div>
        <button
          className="border text-base h-12 w-48 mt-5 font-semibold
        text-white bg-red-500 hover:bg-red-700 shadow-md"
        >
          ADD TO CART
        </button>
        <p className="text-lg text-slate-gray mt-10">
          <span className="text-black font-semibold">Category :</span> Unknown,
          T-Shirt, Crop Top
        </p>
        <p className="text-lg text-slate-gray mt-2">
          <span className="text-black font-semibold">Tags :</span> Modern,
          Latest
        </p>
      </div>
    </div>
  );
}
