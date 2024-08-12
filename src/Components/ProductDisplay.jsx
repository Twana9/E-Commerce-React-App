import { starDullIcon, starIcon } from "../assets";

export function ProductDisplay(props) {
  const { product } = props;
  return (
    <div
      className="flex  my-0 mx-[100px] 
      max-container max-xl:mx-[60px]
      max-lg:flex-col 
      max-sm:mx-[15px]"
    >
      <div
        className="left flex  
       gap-[17px] max-xl:gap-[10px] max-lg:gap-[15px]
       max-sm:gap-[8px] "
      >
        <div
          className="image-list flex flex-col gap-4
        max-xl:gap-[10px] max-lg:gap-[15px]
        max-sm:gap-[8px]"
        >
          <img
            src={product.image}
            alt="item"
            className="h-[125px] w-[200px] 
            max-xl:h-[111px] max-lg:w-[100px] 
            max-sm:h-[74px] max-sm:w-[55px]"
          />
          <img
            src={product.image}
            alt="item"
            className="h-[125px] w-[200px] 
            max-xl:h-[111px] max-lg:w-[100px] 
            max-sm:h-[74px] max-sm:w-[55px]"
          />
          <img
            src={product.image}
            alt="item"
            className="h-[125px] w-[200px] 
            max-xl:h-[111px] max-lg:w-[100px] 
            max-sm:h-[74px] max-sm:w-[55px]"
          />
          <img
            src={product.image}
            alt="item"
            className="h-[125px] w-[200px] 
            max-xl:h-[111px] max-lg:w-[100px] 
            max-sm:h-[74px] max-sm:w-[55px]"
          />
        </div>
        <div className="main-img">
          <img
            src={product.image}
            alt="main-item"
            className="h-[550px] w-[890px]
            max-xl:h-[473px] max-xl:w-[700px]
            max-lg:w-[400px] max-lg:h-[488px]
            max-sm:w-[250px] max-sm:h-[320px]"
          />
        </div>
      </div>
      <div
        className="right flex flex-col mx-[70px]
      max-xl:mx-[30px] max-lg:mx-0 max-lg:mt-[20px]"
      >
        <h1
          className="text-[#3d3d3d] text-[40px] font-bold
        min-w-[418px] max-xl:text-3xl
        max-sm:text-lg max-sm:min-w-[270px]"
        >
          {product.name}
        </h1>
        <div
          className="right-star flex gap-1.5 items-center 
        text-base text-[#1c1c1c] mt-[13px] 
        max-xl:mt-[10px]"
        >
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starDullIcon} alt="star_dull" />
          <p>(122)</p>
        </div>
        <div
          className="flex gap-3 text-xl font-bold mt-7
        max-xl:mt-6 max-sm:text-lg max-sm:mt-5"
        >
          <div className="text-slate-gray line-through ">
            {product.old_price}$
          </div>
          <div className="text-coral-red">{product.new_price}$</div>
        </div>
        <div
          className="text-base text-slate-gray mt-6
        max-xl:mt-3"
        >
          good quality clothe, the clothe has been desigined with love and care,
          and remember its original.
        </div>
        <div>
          <h1
            className="mt-7 text-lg text-slate-gray font-semibold
           max-xl:mt-5"
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
        text-white bg-red-500 hover:bg-red-700 shadow-md
        max-sm:border-red-600 "
        >
          ADD TO CART
        </button>
        <p
          className="text-lg text-slate-gray mt-7 max-xl:mt-4
        max-lg:mt-8 
        max-sm:text-base max-sm:tracking-tight max-sm:mt-5"
        >
          <span className="text-black font-semibold">Category :</span> Unknown,
          T-Shirt, Crop Top
        </p>
        <p
          className="text-lg text-slate-gray mt-2 max-xl:mt-1 
        max-sm:text-base max-sm:tracking-tight"
        >
          <span className="text-black font-semibold">Tags :</span> Modern,
          Latest
        </p>
      </div>
    </div>
  );
}
