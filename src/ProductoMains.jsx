import React, { useState } from "react";
import { LiaHeart } from "react-icons/lia";
import { BsEye, BsBagPlus, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoRepeatOutline } from "react-icons/io5";
import DetailsProduct from "./DetailsProduct";
import styled from 'styled-components';

const Iconos = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  transform: translateX(50px);
  transition: 0.2s ease;
  z-index: 3;
`;

const ShowcaseWrapper = styled.div`
  border: 1px solid hsl(0, 0%, 93%);
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);

    ${Iconos} {
      transform: translateX(0);
    }
  }
`;

const ProductoMain = (props) => {
    const { img1, img2, description, price, pricetachao, title, pricefake, desc, badgeColor } = props;
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleDetailsOpen = () => {
        setIsDetailsOpen(true);
    };

    const handleDetailsClose = () => {
        setIsDetailsOpen(false);
    };

    return (
        <ShowcaseWrapper className="showcase">
            <div className="showcase-banner relative">
                <img
                    src={img1}
                    alt="Mens Winter Leathers Jackets"
                    width="300"
                    className="product-img default w-full h-full object-cover duration-500 ease-ease relative z-[1] hover:opacity-0"
                />
                <img
                    src={img2}
                    alt="Mens Winter Leathers Jackets"
                    width="300"
                    className="product-img hover w-full h-full object-cover duration-500 ease-ease absolute top-0 left-0 z-[2] opacity-0 hover:opacity-100 hover:scale-[(1.1)]"
                />

                <p className={`showcase-badge ${badgeColor}`}>{desc}</p>

                <Iconos>
                    <button className="btn-action bg-white text-zinc-500 mb-[5px] border border-zinc-300 p-[5px] rounded-[5px] ease-[0.2s] hover:bg-stone-900 hover:text-white hover:border-neutral-900">
                        <LiaHeart />
                    </button>

                    <button className="btn-action bg-white text-zinc-500 mb-[5px] border border-zinc-300 p-[5px] rounded-[5px] ease-[0.2s] hover:bg-stone-900 hover:text-white hover:border-neutral-900">
                        <BsEye />
                    </button>

                    <button className="btn-action bg-white text-zinc-500 mb-[5px] border border-zinc-300 p-[5px] rounded-[5px] ease-[0.2s] hover:bg-stone-900 hover:text-white hover:border-neutral-900">
                        <IoRepeatOutline />
                    </button>

                    <button
                        className="btn-action bg-white text-zinc-500 mb-[5px] border border-zinc-300 p-[5px] rounded-[5px] ease-[0.2s] hover:bg-stone-900 hover:text-white hover:border-neutral-900"
                        onClick={handleDetailsOpen}
                    >
                        <BsBagPlus />
                    </button>
                </Iconos>
            </div>

            <div className="showcase-content py-[15px] px-[20px] pt-[0]">
                <a href="#" className="showcase-category text-pink-600 text-[0.75rem] font-[500] uppercase mb-[10px]">
                    {title}
                </a>

                <a href="#">
                    <h3 className="showcase-title text-zinc-500 text-[0.813rem] font-[300] capitalize tracking-[1px] mb-[10px] duration-200 hover:text-neutral-900">
                        {description}
                    </h3>
                </a>

                <div className="showcase-rating relative flex text-orange-500 mb-[10px]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStarHalf />

                    <button
                        className="absolute  object-cover bg-green-600 w-[50%] h-8 right-[40px] shadow-custom rounded-[10px] min-[480px]:right-[-14px] min-[480px]:h-7 min-[570px]:right-[-7px]"
                        onClick={handleDetailsOpen}
                    >
                        <p href="#" className="text-white min-[480px]:text-[15px]">
                            agregar
                        </p>
                    </button>
                </div>

                <div className="price-box flex gap-[10px] text-[0.875rem] text-neutral-900 mb-[10px]">
                    <p className="price font-[700]">{pricefake}</p>
                    <del className="text-zinc-500">{pricetachao}</del>
                    <p className="price hidden font-[700]">{price}</p>
                </div>
            </div>

            {isDetailsOpen && (
                <DetailsProduct
                    isDetailsOpen={isDetailsOpen}
                    description={description}
                    title={title}
                    img1={img1}
                    img2={img2}
                    pricefake={pricefake}
                    pricetachao={pricetachao}
                    price={price}
                    onClose={handleDetailsClose}
                />
            )}
        </ShowcaseWrapper>
    );
};

export default ProductoMain;
