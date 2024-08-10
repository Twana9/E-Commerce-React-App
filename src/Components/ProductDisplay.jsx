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
            className="h-[140px] w-[180px] "
          />
          <img
            src={product.image}
            alt="item"
            className="h-[140px] w-[180px] "
          />
          <img
            src={product.image}
            alt="item"
            className="h-[140px] w-[180px] "
          />
          <img
            src={product.image}
            alt="item"
            className="h-[140px] w-[180px] "
          />
        </div>
        <div className="main-img">
          <img
            src={product.image}
            alt="main-item"
            className="h-[608px] w-[790px]"
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
          <h1>Select Size</h1>
          <div className="all-si">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p>
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p>
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
}
