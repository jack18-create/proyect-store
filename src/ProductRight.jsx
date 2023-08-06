import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import DetailsProduct from "./DetailsProduct";

const ProductRight = (props) => {
    const { img, description, price, pricefake, pricetachao, title } = props;
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleDetailsOpen = () => {
        setIsDetailsOpen(true);
    };

    const handleDetailsClose = () => {
        setIsDetailsOpen(false);
    };

    return (
        <div class="showcase-container" className="min-w-[100%] p-[30px] border border-zinc-400 rounded-[10px] snap-start">

            <div class="showcase" className="min-[768px]:flex justify-center items-center gap-[20px]">

                <div class="showcase-banner" className="min-[1200px]:[calc(50%-10px)] ">
                    <img src={img} alt="shampoo, conditioner & facewash packs" class="showcase-img" className="w-full h-full object-cover min-[570px]:max-w-[450px] min-[570px]:m-auto min-[768px]:max-w-fit" />
                </div>

                <div class="showcase-content" className="mt-[30px] min-[768px]:mt-0 min-[768px]:min-w-[calc(100%-345px)] min-[1200px]:[calc(50%-10px)]">

                    <div class="showcase-rating" className="text-orange-600 flex items-center text-[16px] mb-[15px] min-[1200px]:[calc(50%-10px)]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>

                    <a href="#">
                        <h3 class="showcase-title" className="text-[0.875rem] text-stone-900 overflow-hidden whitespace-nowrap text-ellipsis uppercase mb-[3px]">{title}</h3>
                    </a>

                    <p class="showcase-desc" className="text-neutral-500 text-[0.875rem] font-[300] mb-[10px] capitalize">
                        {description}
                    </p>

                    <div class="price-box" className="text-[1.25rem] flex gap-[10px] mb-[10px] min-[1200px]:[calc(50%-10px)]" >
                        <p className="price text-green-600 font-[700]">{pricefake.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                        <del class="price" className="text-zinc-600 font-[700]">{pricetachao.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</del>
                        <p className="text-zinc-600 hidden font-[300]">{price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                    </div>

                    <button class="add-cart-btn" className="bg-green-800 py-[8px] px-[15px] text-white text-[0.75rem] font-[700] uppercase rounded-[10px] mb-[15px] transition duration-500 ease-ease hover:bg-zinc-900 hover:text-white" onClick={handleDetailsOpen} >Agregar al Carrito</button>

                    <div class="showcase-status" className="mb-[15px] min-[1200px]:[calc(50%-10px)]">
                        <div class="wrapper" className="flex justify-between items-center text-zinc-900 text-[0.75rem] font-[400] uppercase mb-[10px] min-[1200px]:[calc(50%-10px)]">
                            <p>
                                vendidos: <b>20</b>
                            </p>

                            <p>
                                disponible: <b>40</b>
                            </p>
                        </div>

                        <div class="showcase-status-bar" className="bg-neutral-300 relative h-[10px] rounded-[5px] before:absolute before:content-[''] before:top-[3px] before:left-[4px] before:w-[40%] before:bg-pink-600 rounded-[4px] min-[1200px]:[calc(50%-10px)]"></div>
                    </div>

                    <div class="countdown-box min-[1200px]:[calc(50%-10px)]">

                        <p class="countdown-desc" className="text-zinc-800 text-[0.75rem] font-[600] uppercase mb-[10px]">
                            APURESE! La oferta termina en:
                        </p>

                        <div class="countdown" className="flex gap-[5px] min-[570px]:gap-[20px] min-[1200px]:[calc(50%-10px)]">

                            <div class="countdown-content" className="p-[5px] bg-neutral-300 rounded-[10px] text-center min-[1024px]:py-[5px] min-[1024px]:px-[10px] min-[1200px]:[calc(50%-10px)]">

                                <p class="display-number" className="text-zinc-800 text-[1rem] font-[500] min-w-[40px] min-[1200px]:[1.125rem]">360</p>

                                <p class="display-text" className="text-zinc-600 text-[0.625rem]">Days</p>

                            </div>

                            <div class="countdown-content" className="p-[5px] bg-neutral-300 rounded-[10px] text-center min-[1024px]:py-[5px] min-[1024px]:px-[10px] min-[1200px]:[calc(50%-10px)]">
                                <p class="display-number" className="text-zinc-800 text-[1rem] font-[500] min-w-[40px] min-[1200px]:[1.125rem]">24</p>
                                <p class="display-text" className="text-zinc-600 text-[0.625rem]">Hours</p>
                            </div>

                            <div class="countdown-content" className="p-[5px] bg-neutral-300 rounded-[10px] text-center min-[1024px]:py-[5px] min-[1024px]:px-[10px] min-[1200px]:[calc(50%-10px)]">
                                <p class="display-number" className="text-zinc-800 text-[1rem] font-[500] min-w-[40px] min-[1200px]:[1.125rem]">59</p>
                                <p class="display-text" className="text-zinc-600 text-[0.625rem]">Min</p>
                            </div>

                            <div class="countdown-content" className="p-[5px] bg-neutral-300 rounded-[10px] text-center min-[1024px]:py-[5px] min-[1024px]:px-[10px] min-[1200px]:[calc(50%-10px)]">
                                <p class="display-number" className="text-zinc-800 text-[1rem] font-[500] min-w-[40px] min-[1200px]:[1.125rem]">00</p>
                                <p class="display-text" className="text-zinc-600 text-[0.625rem]">Sec</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {isDetailsOpen && (
                <DetailsProduct
                    isDetailsOpen={isDetailsOpen}
                    description={description}
                    title={title}
                    img1={img}
                    pricefake={pricefake}
                    pricetachao={pricetachao}
                    price={price}
                    onClose={handleDetailsClose}
                />
            )}

        </div>
    );
};

export default ProductRight;