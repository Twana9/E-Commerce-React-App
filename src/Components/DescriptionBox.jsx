export function DescriptionBox() {
  return (
    <div
      className="mx-[100px] my-[80px] font-palanquin
     text-slate-gray max-xl:mx-[60px] max-sm:mx-[15px]
      max-sm:my-[60px]"
    >
      <div className="flex text-lg font-semibold max-sm:text-sm">
        <div
          className="border border-slate-300 py-4 px-6
        max-sm:py-2 max-sm:px-3"
        >
          Description
        </div>
        <div
          className="border border-slate-300 py-4 px-6
        max-sm:py-2 max-sm:px-3"
        >
          Reviews (122)
        </div>
      </div>
      <div
        className="text-base py-8 px-8 border border-slate-300
      max-sm:text-sm max-sm:py-4 max-sm:px-4"
      >
        <p>
          An e-commerce website is an online platform that enables businesses
          and individuals to buy and sell goods or services electronically,
          providing a virtual storefront for transactions and customer
          interactions.
        </p>
        <p className="mt-6 max-sm:mt-4">
          Select clothes, choose size, add to cart, checkout, enter shipping
          details, pay, and confirm order.
        </p>
      </div>
    </div>
  );
}
