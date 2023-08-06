import React, { useState } from "react";
import DetailsProduct from "./DetailsProduct";
const ProductMinimal = (props) => {
  const { img, description, price, pricetachao, pricefake, title } = props;
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleDetailsOpen = () => {
    setIsDetailsOpen(true);
  };

  const handleDetailsClose = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div>

      <div class="showcase" className="flex justify-start items-center gap-[15px] border border-x-slate-300 p-[15px] rounded-[10px] mb-[15px] " onClick={handleDetailsOpen} >


        <img src={img} alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img" />

        <div class="showcase-content" className="mb-[-15px] w-[calc(100%-85px)]" >


          <h4 class="showcase-title" className="text-zinc-900 text-[0.874rem] font-[600] capitalize whitespace-nowrap overflow-hidden text-ellipsis mb-[2px]">{title}</h4>
          <p class="showcase-title" className="text-zinc-900 text-[0.874rem] font-[600] capitalize whitespace-nowrap overflow-hidden hidden text-ellipsis mb-[2px]">{description}</p>


          <a href="#" class="showcase-category" className="w-max text-neutral-700 text-[0.813rem] capitalize mb-[3px] hover:text-pink-600">23</a>

          <div class="price-box" className="flex items-center gap-[10px]">
            <p className="price text-green-600 font-[700]">{pricefake.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
            <p class="price" className="text-[0.875rem] hidden font-[700] text-green-600">{price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
            <del className="text-[0.75rem] text-zinc-600">{pricetachao.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</del>
          </div>

        </div>


      </div>
      {isDetailsOpen && (
        <DetailsProduct
          isDetailsOpen={isDetailsOpen}
          description={description}
          img1={img}
          title={title}
          pricetachao={pricetachao}
          pricefake={pricefake}
          price={price}
          onClose={handleDetailsClose}
        />
      )}
    </div>
  );
};

export default ProductMinimal;





