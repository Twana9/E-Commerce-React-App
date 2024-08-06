import { starDullIcon, starIcon } from "../assets";

export function ProductDisplay(props) {
  const { product } = props;
  return (
    <div
      className="flex  justify-center items-center gap-[10%] max-container
      px-16 pb-10
    "
    >
      <div className="left flex justify-center items-center">
        <div className="image-list flex flex-col gap-1.5">
          <img src={product.image} alt="item" className="h-20 w-20" />
          <img src={product.image} alt="item" className="h-20 w-20" />
          <img src={product.image} alt="item" className="h-20 w-20" />
          <img src={product.image} alt="item" className="h-20 w-20" />
        </div>
        <div className="main-img">
          <img src={product.image} alt="main-item" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starDullIcon} alt="star_dull" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div>{product.old_price}$</div>
          <div>{product.new_price}$</div>
        </div>
        <div>
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
