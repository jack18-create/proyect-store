import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoAddSharp } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import React, { useState, useContext, useEffect } from "react";
import Card from "./card";

import { CartContext } from "./CartContext"; // Importar el contexto

const DetailsProduct = ({ description, title, img1, img2, price, pricefake, pricetachao, isDetailsOpen, onClose }) => {
    const [quantity, setQuantity] = useState(0);

    const [cardProps, setCardProps] = useState(null);

    const [totalPrice, setTotalPrice] = useState(0);
    const { addToCart, cartItems } = useContext(CartContext);

    useEffect(() => {
        // Inicializar el precio total con el precio inicial
        setTotalPrice(price * quantity);
    }, [price, quantity]);

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - price);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + price);
    };

    const handleCloseClick = () => {
        onClose();
    };



    const handleAddToCart = () => {
        const product = {
            description,
            title,
            img1,
            quantity,
            price,

        };

        const existingItem = cartItems.find((item) => item.title === product.title);

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.price += product.price * quantity;
        } else {
            addToCart(product);
        }

        setCardProps(null);

        onClose(); // Cierra el componente DetailsProduct al agregar el producto al carrito
    };



    const fixedClass = isDetailsOpen ? "fixed" : "";

    return (
        <div>
            {isDetailsOpen && (
                <div className={`showcase top-0 left-0 w-full h-screen bg-custom justify-center items-center z-50  ${fixedClass}`}>
                    <div className="absolute top-0 h-full left-0 w-full z-1" onClick={handleCloseClick}></div>

                    <div className="relative  m-[1px] my-[40px] rounded-[10px] overflow-hidden z-[2]   min-[570px]:m-[35px] min-[570px]:my-[27px] min-[625px]:m-[70px] min-[625px]:my-[35px]">
                        <button className="absolute top-[10px] right-[23px] bg-zinc-50 text-zinc-500 text-[32px] p-[5px] rounded-[50%] hover:opacity-[0.9] z-[2] " onClick={handleCloseClick}>
                            <RiCloseLine />
                        </button>

                        <div className="container py-[0px] px-[15px]  min-[768px]:flex min-[768px]:items-center min-[768px]:max-w-[750px] min-[768px]:max-w-fit">
                            <div className="slider-container flex items-center gap-[10px] rounded-[10px] overflow-x-auto overflow-y-contain snap-mandatory snap-x   scrollbar-thin">
                                <div className="slider-item relative min-w-[100%] max-w-[450px] aspect-square rounded-[10px] overflow-hidden snap-start  min-[570px]:aspect-[4/4] min-[768px]:block min-[768px]:mt-[100px] min-[1400px]:h-[450px]">
                                    <img src={img1} alt="Mens Winter Leathers Jackets" width="100%" className="product-img default" />
                                </div>
                                <div className="slider-item relative min-w-[100%] max-w-[450px] aspect-square rounded-[10px] overflow-hidden snap-start min-[480px]:aspect-[5/3] min-[570px]:aspect-[4/2] min-[768px]:aspect-[auto] min-[768px]:h-[350px] min-[1400px]:h-[450px]">
                                    <img src={img2} alt="Mens Winter Leathers Jackets" width="100%" className="product-img hover" />
                                </div>
                            </div>
                            <div className="p-[20px] bg-white rounded-[10px] min-[768px]:text-left">
                                <p href="#" className="showcase-category text-[0.813rem] font-light uppercase tracking-[1px] mb-[10px] ">
                                    polos
                                </p>
                                <h1 href="#" className="showcase-category text-[1.563rem] capitalize tracking-[1px] mb-[20px]">
                                    {title}
                                </h1>
                                <a href="#">
                                    <h3 className="showcase-title lowercase font-normal text-ellipsis">{description}</h3>
                                </a>
                                <div className="price-box flex gap-[19px] justify-between items-center my-[20px]">
                                    <p className="price text-[24px] uppercase leading-5">{pricefake}</p>
                                    <del className="text-[15px] text-stone-400 leading-5">${pricetachao}</del>
                                </div>
                                <div className="flex items-center justify-around bg-slate-200 h-[50px] w-full rounded-[10px] mb-[15px]">
                                    <button className="text-amber-500 font-extrabold" onClick={handleDecrease}>
                                        <IoIosRemove />
                                    </button>
                                    <a href="">{quantity}</a>
                                    <button className="text-orange-500 font-extrabold" onClick={handleIncrease}>
                                        <p><IoAddSharp /></p>
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart} // Al hacer clic en este botón, llamamos a handleAddToCart para agregar el producto al carrito y abrir el componente Card
                                    className="flex bg-orange-400 rounded-[10px] w-full h-[50px] justify-center items-center gap-[10px]"
                                    disabled={quantity === 0}
                                >
                                    <HiOutlineShoppingCart className="text-white font-bold text-[20px]" />
                                    <p className="text-white">
                                        add cart
                                    </p>
                                    <p>{totalPrice.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {cardProps && (
                <Card
                    description={description}
                    title={title}
                    img1={img1}
                    price={price}
                    onClose={() => setCardProps(null)}
                    quantity={quantity}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease} // Asegúrate de que se esté pasando correctamente aquí
                />
            )}
        </div>
    );
};

export default DetailsProduct;