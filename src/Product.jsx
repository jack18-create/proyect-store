import React from "react";

const ProductMinimal = (props) => {
  const { img, description, price, inventory } = props;

  return (
    <div class="showcase" className="flex justify-start items-center gap-[15px] border border-x-slate-300 p-[15px] rounded-[10px] mb-[15px]">

      <a href="#" class="showcase-img-box" >
        <img src={img} alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img" />
      </a>

      <div class="showcase-content" className="mb-[-15px] w-[calc(100%-85px)]">

        <a href="#">
          <h4 class="showcase-title" className="text-zinc-900 text-[0.874rem] font-[600] capitalize whitespace-nowrap overflow-hidden text-ellipsis mb-[2px]">{description}</h4>
        </a>

        <a href="#" class="showcase-category" className="w-max text-neutral-700 text-[0.813rem] capitalize mb-[3px] hover:text-pink-600">{inventory}Clothes</a>

        <div class="price-box" className="flex items-center gap-[10px]">
          <p class="price" className="text-[0.875rem] font-[700] text-pink-600">${price}</p>
          <del className="text-[0.75rem] text-zinc-600">${price}</del>
        </div>

      </div>

    </div>
  );
};

export default ProductMinimal;
