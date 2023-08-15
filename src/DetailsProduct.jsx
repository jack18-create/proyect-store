import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoAddSharp } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import React, { useState, useContext, useEffect } from "react";
import Card from "./card";

import { CartContext } from "./CartContext"; // Importar el contexto
import AnimationProduct from "./AnimationProduct";

const DetailsProduct = ({ description, title, img1, img2, price, pricefake, pricetachao, isDetailsOpen, onClose }) => {
    const [quantity, setQuantity] = useState(0);

    const [cardProps, setCardProps] = useState(null);

    const [totalPrice, setTotalPrice] = useState(0);
    const { addToCart, cartItems } = useContext(CartContext);

    const [showFullText, setShowFullText] = useState(false);

    const [isAnimationOpen, setIsAnimationOpen] = useState(false);

    const [addedProduct, setAddedProduct] = useState(null);
    const [showProductImage, setShowProductImage] = useState(false);


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
        setAddedProduct(product);// Establecer la imagen del producto actual
        setShowProductImage(true);
        setCardProps(null);

        onClose();
        // Cierra el componente DetailsProduct al agregar el producto al carrito
    };

    const toggleText = () => {
        setShowFullText(!showFullText);
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
                            <div className="p-[20px] overflow-y-auto max-h-[330px] bg-white rounded-[10px] min-[768px]:text-left">
                                <div className="mb-[200px]">
                                    <p href="#" className="showcase-category hidden text-[0.813rem] font-light uppercase tracking-[1px] mb-[10px] ">
                                        {/* polos */}
                                    </p>
                                    <p href="#" className="showcase-category pb-2 text-zinc-700/90 border-b border-neutral-300 text-[19px] font-[700] font-sans uppercase tracking-[0.6px] mb-[18px]">
                                        {title}
                                    </p>
                                    <div className="border border-neutral-400/30 rounded-[10px] p-2">
                                        <p className={`whitespace-pre-wrap text-neutral-900/80 font-mono capitalize text-[15px] font-[550] ${showFullText ? 'overflow-auto max-h-full' : 'max-h-[3em] overflow-hidden'}`}>
                                            {description}
                                        </p>
                                        {description.length > 120 && (
                                            <button
                                                className="text-blue-500 text-[15px] hover:underline mt-0"
                                                onClick={toggleText}
                                            >
                                                {showFullText ? '...Leer menos' : 'Leer más'}
                                            </button>
                                        )}
                                    </div>

                                </div>
                                <div className="absolute bottom-[0px] left-0 right-0 pb-[10px]  mx-[14.8px]  my-[0px] bg-white rounded-[10px] px-[10px]">
                                    <div className="flex gap-4 items-center mb-[10px] justify-between ">
                                        <div className="price-box flex gap-[20px] justify-center items-center pl-[15px]">
                                            <p className="price text-[20px]  text-green-600 uppercase ">{pricefake}</p>
                                            <del className="text-[15px] text-stone-400 ">${pricetachao}</del>
                                        </div>
                                        <div className="flex items-center justify-around bg-slate-200 h-[50px] w-[40%] rounded-[10px] ">
                                            <button className="text-amber-500 font-extrabold" onClick={handleDecrease}>
                                                <IoIosRemove />
                                            </button>
                                            <a href="">{quantity}</a>
                                            <button className="text-orange-500 font-extrabold" onClick={handleIncrease}>
                                                <p><IoAddSharp /></p>
                                            </button>
                                        </div>

                                    </div>
                                    <button
                                        onClick={handleAddToCart} // Al hacer clic en este botón, llamamos a handleAddToCart para agregar el producto al carrito y abrir el componente Card
                                        className="flex bg-orange-400 rounded-[10px]  w-full h-[50px] justify-center items-center gap-[10px]"
                                        disabled={quantity === 0}
                                    >
                                        <div className="flex justify-center gap-2">
                                            <HiOutlineShoppingCart className="text-white font-bold text-[20px]" />
                                            <p className="text-white">
                                                Agregar al Carrito
                                            </p>
                                        </div>
                                        <p className="font-sans text-black rounded-[10px] border border-slate-50/10 p-1  font-extrabold">{totalPrice.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                                    </button>
                                </div>
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

            {isAnimationOpen && (
                <AnimationProduct img1={img1} isAnimationOpen={isAnimationOpen} />
            )}



        </div>
    );
};

export default DetailsProduct;