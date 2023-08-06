import { BsFacebook, BsCart4 } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoSearchOutline, IoPersonOutline, IoBagHandleOutline, IoCloseSharp, IoCaretBack } from "react-icons/io5";
import { LiaHeart } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { GrHomeRounded, GrFormAdd } from "react-icons/gr";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { IoIosRemove } from "react-icons/io";
import "./index.css";
import Mains from "./Mains";
import { useState } from 'react';
import Card from "./card";

import { useContext } from "react"; // Importar useContext
import { CartContext } from "./CartContext"; // Importar el contexto

// import React, { useState } from 'react';


function Header({ totalProducts }) {
    const [isMenMouselOpen, setIsMousePanelOpen] = useState(false);
    const [isMenPanelOpen, setIsMenPanelOpen] = useState(false);
    const [isWomenPanelOpen, setIsWomenPanelOpen] = useState(false);
    const [isJewelryPanelOpen, setIsJewelryPanelOpen] = useState(false);
    const [isPerfumePanelOpen, setIsPerfumePanelOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isDressOpen, setIsDressOpen] = useState(false);
    const [isWomenOpen, setIsWomenOpen] = useState(false);
    const [isJewelryOpen, setIsJewelryOpen] = useState(false);
    const [isPerfumeOpen, setIsPerfumeOpen] = useState(false);

    const [isLenguageOpen, setIsLenguageOpen] = useState(false);
    const toggleLenguageMenu = () => {
        setIsLenguageOpen(!isLenguageOpen);
        setIsWomenOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsDressOpen(false);
    };

    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const toggleCurrencyMenu = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
        setIsWomenOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsDressOpen(false);
    };


    const handleMouseMouseEnter = () => {
        setIsMousePanelOpen(true);
    };

    const handleMouseMouseLeave = () => {
        setIsMousePanelOpen(false);
    };
    const handleMenMouseEnter = () => {
        setIsMenPanelOpen(true);
    };

    const handleMenMouseLeave = () => {
        setIsMenPanelOpen(false);
    };

    const handleWomenMouseEnter = () => {
        setIsWomenPanelOpen(true);
    };

    const handleWomenMouseLeave = () => {
        setIsWomenPanelOpen(false);
    };
    const handleJewelryMouseEnter = () => {
        setIsJewelryPanelOpen(true);
    };

    const handleJewelryMouseLeave = () => {
        setIsJewelryPanelOpen(false);
    };
    const handlePerfumeMouseEnter = () => {
        setIsPerfumePanelOpen(true);
    };

    const handlePerfumeMouseLeave = () => {
        setIsPerfumePanelOpen(false);
    };


    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseClick = () => {
        setIsMenuOpen(false);
    };



    const toggleDressSubmenu = () => {
        setIsDressOpen(!isDressOpen);
        setIsWomenOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
    };

    const toggleWomenSubmenu = () => {
        setIsWomenOpen(!isWomenOpen);
        setIsDressOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
    };
    const toggleJewelrySubmenu = () => {
        setIsJewelryOpen(!isJewelryOpen);
        setIsDressOpen(false);
        setIsWomenOpen(false);
        setIsPerfumeOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
    };

    const togglePerfumeSubmenu = () => {
        setIsPerfumeOpen(!isPerfumeOpen);
        setIsJewelryOpen(false);
        setIsWomenOpen(false);
        setIsDressOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
    };

    const closeDressSubmenu = () => {
        setIsDressOpen(false);
    };

    const closeWomenSubmenu = () => {
        setIsWomenOpen(false);
    };
    const closeJewelrySubmenu = () => {
        setIsjewelryOpen(false);
    };

    const closePerfumeSubmenu = () => {
        setIsPerfumeOpen(false);
    };

    // boton de layout en Mains
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const handleCategoryOpen = () => {
        setIsCategoryOpen(true);
    };

    const handleCategoryClose = () => {
        setIsCategoryOpen(false);
    };

    // boton para abrir el componente  card


    const { cartItems } = useContext(CartContext); // Acceder al estado cartItems del contexto

    const [isCardOpen, setIsCardOpen] = useState(false);
    const handleCardOpen = () => {
        setIsCardOpen(true);
    };

    const handleCardClose = () => {
        setIsCardOpen(false);
    };

    const handleHomeButtonClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };





    return (
        <header className="m-0 p-0 box-border">


            <div className="hidden min-[480px]:block min-[480px]:py-[10px] min-[480px]:px-[0] border min-[480px]:border-zinc-200">
                <div className="py-[0px] px-[15px] min-[570px]:flex min-[570px]:justify-between min-[570px]:items-center min-[768px]:max-w-[750px] min-[768px]:m-auto min-[1024px]:max-w-[980px] min-[1200px]:max-w-[1200px] min-[1400px]:max-w-[1350px]">
                    <ul className="min-[480px]:hidden min-[1024px]:flex min-[1024px]:items-center min-[1024px]:gap-[5px]">
                        <li className="list-none">
                            <a className="no-underline block min-[1024px]:p-[5px] min-[1024px]:bg-slate-400 rounded-[5px] min-[1024px]:text-slate-600 min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:bg-pink-600 min-[1024px]:hover:text-white" href="#">
                                <BsFacebook />
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="no-underline block min-[1024px]:p-[5px] min-[1024px]:bg-slate-400 rounded-[5px] min-[1024px]:text-slate-600 min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:bg-pink-600 min-[1024px]:hover:text-white" href="#">
                                <RiWhatsappFill />
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="no-underline block min-[1024px]:p-[5px] min-[1024px]:bg-slate-400 rounded-[5px] min-[1024px]:text-slate-600 min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:bg-pink-600 min-[1024px]:hover:text-white" href="#">
                                <AiOutlineInstagram />
                            </a>
                        </li>
                    </ul>

                    <div className="min-[480px]:text-gray-900 min-[480px]:text-[0.75rem] min-[480px]:uppercase">
                        <p>
                            <b className="font-[500]">Envío gratis </b>
                            Pedido Superior a - $20.000
                        </p>
                    </div>

                    <div className="min-[480px]:hidden min-[570px]:flex min-[570px]:items-center min-[570px]:gap-[10px]">
                        <select className="min-[570px]:border-none min-[570px]:block min-[570px]:min-w-[80px] min-[570px]:py-[5px] min-[570px]:px-[0px] min-[570px]:font-inherit min-[570px]:text-lime-600 min-[570px]:text-[0.813rem] min-[570px]:uppercase min-[570px]:cursor-pointer min-[570px]:transition min-[570px]:duration-200 ease min-[570px]:hover:text-gray-600" name="currency">

                            <option value="usd">USD &dollar;</option>
                            <option value="clp">CLP $;</option>

                        </select>
                        <select className="min-[570px]:border-none min-[570px]:block min-[570px]:min-w-[80px] min-[570px]:py-[5px] min-[570px]:px-[0px] min-[570px]:font-inherit min-[570px]:text-lime-600 min-[570px]:text-[0.813rem] min-[570px]:uppercase min-[570px]:cursor-pointer min-[570px]:transition min-[570px]:duration-200 ease min-[570px]:hover:text-gray-500" name="language">

                            <option value="en-US">English</option>
                            <option value="es-ES">Espa&ntilde;ol</option>

                        </select>
                    </div>
                </div>
            </div>


            <div className="py-[20px] px-[0xp] border border-b-slate-300 min-[480px]:py-[25px] min-[480px]:px-[0px]">
                <div className="py-[0px] px-[15px] min-[570px]:flex min-[570px]:justify-between min-[570px]:items-center min-[768px]:max-w-[750px] min-[768px]:mx-auto min-[768px]:gap-[80px] min-[1024px]:max-w-[980px] min-[1200px]:max-w-[1200px] min-[1400px]:max-w-[1350px]">
                    <a href="#" className="no-underline block mb-[20px] min-[570px]:mb-[0px]">
                        <img className="mx-auto" src="./logoroyle.png" alt="Anon's logo" width={90} height={30} />
                    </a>
                    <div className="relative min-[570px]:min-w-[300px] min-[768px]:grow">
                        <input className="placeholder:font-inherit block w-full font-inherit font-[0.875rem] text-inherit py-[10px] px-[15px] pr-[50px] border border-b-slate-300 rounded-[10px] outline-none appearance-none" type="search" name="search" placeholder="Ingrese el nombre de su producto..." />
                        <button className="block bg-transparent font-inherit border-none cursor-pointer bg-white absolute top-[50%] right-[2px] transform -translate-y-1/2 text-inherit text-[18px] py-[8px] px-[15px] transition-colors duration-200 ease hover:text-pink-600">
                            <IoSearchOutline />
                        </button>
                    </div>
                    <div className="hidden min-[1024px]:flex min-[1024px]:items-center min-[1024px]:gap-[15px]">
                        <button className="block bg-transparent font-inherit border-none cursor-pointer min-[1024px]:relative min-[1024px]:text-[35px] min-[1024px]:text-zinc-400 min-[1024px]:p-[5px]">
                            <IoPersonOutline />
                        </button>
                        <button className="block bg-transparent font-inherit border-none cursor-pointer min-[1024px]:relative min-[1024px]:text-[35px] min-[1024px]:text-zinc-400 min-[1024px]:p-[5px]">
                            <LiaHeart />
                            <span className="inline-block min-[1024px]:absolute min-[1024px]:top-[-2px] min-[1024px]:right-[-3] min-[1024px]:bg-orange-600 min-[1024px]:text-white min-[1024px]:text-[12px] min-[1024px]:font-[500] min-[1024px]:leading-none min-[1024px]:py-[2px] min-[1024px]:px-[4px] min-[1024px]:rounded-[20px]">0</span>
                        </button>
                        <button className="block bg-transparent font-inherit border-none cursor-pointer min-[1024px]:relative min-[1024px]:text-[35px] min-[1024px]:text-zinc-400 min-[1024px]:p-[5px]" onClick={handleCardOpen}>
                            <BsCart4 />
                            <span className="inline-block min-[1024px]:absolute min-[1024px]:top-[-2px] min-[1024px]:right-[-3] min-[1024px]:bg-orange-600 min-[1024px]:text-white min-[1024px]:text-[12px] min-[1024px]:font-[500] min-[1024px]:leading-none min-[1024px]:py-[2px] min-[1024px]:px-[4px] min-[1024px]:rounded-[20px]">{cartItems.length}</span>
                        </button>
                    </div>
                </div>
            </div>


            <nav className="hidden min-[1024px]:block">

                <div className="py-[0px] px-[15px] min-[768px]:max-w-[750px] min-[768px]:mx-auto min-[1024px]:max-w-[980px] min-[1200px]:max-w-[1200px] min-[1400px]:max-w-[1350px]">

                    <ul className="min-[1024px]:relative min-[1024px]:flex min-[1024px]:justify-center min-[1024px]:items-center min-[1024px]:gap-[30px] min-[1200px]:gap-[45px] ">

                        <li className="list-none min-[1024px]:relative">
                            <a href="#" className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100">Inicio</a>
                        </li>

                        <li className="list-none">
                            <a
                                href="#"
                                className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100"
                                onMouseEnter={handleMouseMouseEnter}
                                onMouseLeave={handleMouseMouseLeave}
                            >
                                Categorias
                            </a>

                            <div
                                className={`min-[1024px]:absolute min-[1024px]:left-0 min-[1024px]:bg-white min-[1024px]:w-full min-[1024px]:grid min-[1024px]:grid-cols-4 min-[1024px]:gap-[30px] min-[1024px]:p-[30px] min-[1024px]:border min-[1024px]:border-slate-200 min-[1024px]:shadow-custom min-[1024px]:rounded-[10px] min-[1024px]:translate-y-2/2 min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:z-[5] ${isMenMouselOpen
                                    ? "min-[1024px]:opacity-100 min-[1024px]:visible min-[1024px]:pointer-events-auto"
                                    : "min-[1024px]:opacity-0 min-[1024px]:invisible min-[1024px]:pointer-events-none"
                                    }`}
                                onMouseEnter={handleMouseMouseEnter}
                                onMouseLeave={handleMouseMouseLeave}
                            >

                                <ul>

                                    <li className="list-none">
                                        <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:pb-[10px] min-[1024px]:border-solid min-[1024px]:border-b min-[1024px]:border-red-500 min-[1024px]:mb-[10px]">Electronicos</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Computadoras</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Laptop</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Camara</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Tablet</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Audifonos</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">
                                            <img className="block min-[1024px]:w-full min-[1024px]:h-auto min-[1024px]:rounded-[5px]" src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                                                height="119" />
                                        </a>
                                    </li>

                                </ul>

                                <ul>

                                    <li className="list-none">
                                        <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:pb-[10px] min-[1024px]:border-solid min-[1024px]:border-b min-[1024px]:border-red-500 min-[1024px]:mb-[10px]">Hombres</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Formal</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Casual</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Deportes</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Chaqueta</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Lentes</a>
                                    </li>

                                    <li className="list-none  min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">
                                            <img className="block min-[1024px]:w-full min-[1024px]:h-auto min-[1024px]:rounded-[5px]" src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                                        </a>
                                    </li>

                                </ul>

                                <ul>

                                    <li className="list-none">
                                        <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:pb-[10px] min-[1024px]:border-solid min-[1024px]:border-b min-[1024px]:border-red-500 min-[1024px]:mb-[10px]">Mujeres</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Formal</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Casual</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Perfume</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Cosmeticos</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">bolsos & Cartera</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">
                                            <img className="block min-[1024px]:w-full min-[1024px]:h-auto min-[1024px]:rounded-[5px]" src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                                        </a>
                                    </li>

                                </ul>

                                <ul >

                                    <li className="list-none ">
                                        <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:pb-[10px] min-[1024px]:border-solid min-[1024px]:border-b min-[1024px]:border-red-500 min-[1024px]:mb-[10px]">Electronicos & Accesorios</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Reloj Watch</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Monitor</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Teclado</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Mouse</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">Microfonos</a>
                                    </li>

                                    <li className="list-none min-[1024px]:mt-[20px]">
                                        <a href="#" className="no-underline block min-[1024px]:text-slate-400 min-[1024px]:font-[0.875rem] min-[1024px]:capitalize min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600 min-[1024px]:py-[4px]">
                                            <img className="block min-[1024px]:w-full min-[1024px]:h-auto min-[1024px]:rounded-[5px]" src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </li>

                        <li className="list-none min-[1024px]:relative">
                            <a
                                href="#"
                                className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100"
                                onMouseEnter={handleMenMouseEnter}
                                onMouseLeave={handleMenMouseLeave}
                            >
                                Hombres
                            </a>

                            <ul
                                className={`min-[1024px]:absolute min-[1024px]:top-[100%] min-[1024px]:left-0 min-[1024px]:bg-white min-[1024px]:w-[200px] min-[1024px]:py-[20px] min-[1024px]:border min-[1024px]:border-slate-200 min-[1024px]:shadow-custom min-[1024px]:rounded-[10px] min-[1024px]:translate-y-2/2 min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:z-[5] ${isMenPanelOpen
                                    ? 'min-[1024px]:opacity-100 min-[1024px]:visible min-[1024px]:pointer-events-auto'
                                    : 'min-[1024px]:opacity-0 min-[1024px]:invisible min-[1024px]:pointer-events-none'
                                    }`}
                                onMouseEnter={handleMenMouseEnter}
                                onMouseLeave={handleMenMouseLeave}
                            >

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Polera</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Shorts & Jeans</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Zapatillas</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">billeteras</a>
                                </li>

                            </ul>
                        </li>

                        <li className="list-none min-[1024px]:relative">
                            <a
                                href="#"
                                className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100"
                                onMouseEnter={handleWomenMouseEnter}
                                onMouseLeave={handleWomenMouseLeave}
                            >
                                Mujeres
                            </a>
                            <ul
                                className={`min-[1024px]:absolute min-[1024px]:top-[100%] min-[1024px]:left-0 min-[1024px]:bg-white min-[1024px]:w-[200px] min-[1024px]:py-[20px] min-[1024px]:border min-[1024px]:border-slate-200 min-[1024px]:shadow-custom min-[1024px]:rounded-[10px] min-[1024px]:translate-y-2/2 min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:z-[5] ${isWomenPanelOpen
                                    ? 'min-[1024px]:opacity-100 min-[1024px]:visible min-[1024px]:pointer-events-auto'
                                    : 'min-[1024px]:opacity-0 min-[1024px]:invisible min-[1024px]:pointer-events-none'
                                    }`}
                                onMouseEnter={handleWomenMouseEnter}
                                onMouseLeave={handleWomenMouseLeave}
                            >

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Vestido</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Aros</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Collares</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Kit de maquillaje</a>
                                </li>

                            </ul>
                        </li>

                        <li className="list-none min-[1024px]:relative">
                            <a
                                href="#"
                                className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100"
                                onMouseEnter={handleJewelryMouseEnter}
                                onMouseLeave={handleJewelryMouseLeave}
                            >
                                Joyas
                            </a>

                            <ul
                                className={`min-[1024px]:absolute min-[1024px]:top-[100%] min-[1024px]:left-0 min-[1024px]:bg-white min-[1024px]:w-[200px] min-[1024px]:py-[20px] min-[1024px]:border min-[1024px]:border-slate-200 min-[1024px]:shadow-custom min-[1024px]:rounded-[10px] min-[1024px]:translate-y-2/2 min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:z-[5] ${isJewelryPanelOpen
                                    ? 'min-[1024px]:opacity-100 min-[1024px]:visible min-[1024px]:pointer-events-auto'
                                    : 'min-[1024px]:opacity-0 min-[1024px]:invisible min-[1024px]:pointer-events-none'
                                    }`}
                                onMouseEnter={handleJewelryMouseEnter}
                                onMouseLeave={handleJewelryMouseLeave}
                            >

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block  min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Aros</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Anillos</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Collares</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Pulseras</a>
                                </li>

                            </ul>
                        </li>

                        <li className="list-none min-[1024px]:relative">
                            <a
                                href="#"
                                className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100"
                                onMouseEnter={handlePerfumeMouseEnter}
                                onMouseLeave={handlePerfumeMouseLeave}
                            >
                                Perfume
                            </a>

                            <ul
                                className={`min-[1024px]:absolute min-[1024px]:top-[100%] min-[1024px]:left-0 min-[1024px]:bg-white min-[1024px]:w-[200px] min-[1024px]:py-[20px] min-[1024px]:border min-[1024px]:border-slate-200 min-[1024px]:shadow-custom min-[1024px]:rounded-[10px] min-[1024px]:translate-y-2/2 min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:z-[5] ${isPerfumePanelOpen
                                    ? 'min-[1024px]:opacity-100 min-[1024px]:visible min-[1024px]:pointer-events-auto'
                                    : 'min-[1024px]:opacity-0 min-[1024px]:invisible min-[1024px]:pointer-events-none'
                                    }`}
                                onMouseEnter={handlePerfumeMouseEnter}
                                onMouseLeave={handlePerfumeMouseLeave}
                            >

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Perfumes para ropa</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Desodorantes</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Fragancia floral</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#" className="no-underline block min-[1024px]:text-inherit min-[1024px]:font-[0.874rem] min-[1024px]:capitalize min-[1024px]:py-[4px] min-[1024px]:px-[20px] min-[1024px]:transition min-[1024px]:duration-200 ease-ease min-[1024px]:hover:text-pink-600">Ambientador</a>
                                </li>

                            </ul>
                        </li>

                        <li className="list-none min-[1024px]:relative">
                            <a href="#" className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100">Blog</a>
                        </li>

                        <li className="list-none min-[1024px]:relative">
                            <a href="#" className="no-underline block min-[1024px]:relative min-[1024px]:text-zinc-700 min-[1024px]:text-[0.875rem] min-[1024px]:font-[600] min-[1024px]:uppercase min-[1024px]:py-[15px] min-[1024px]:px-[0px] min-[1024px]:transition min-[1024px]:duration-200 ease min-[1024px]:hover:text-pink-600 min-[1024px]:after:content-none min-[1024px]:after:absolute min-[1024px]:after:bottom-0 min-[1024px]:after:left-0 min-[1024px]:after:w-full min-[1024px]:after:h-[2px] min-[1024px]:after:bg-pink-600 min-[1024px]:after:scale-x-0 min-[1024px]:after:origin-left min-[1024px]:after:transition min-[1024px]:after:duration-200 ease-ease min-[1024px]:hover::after:scale-x-100">Ofertas</a>
                        </li>

                    </ul>

                </div>

            </nav>


            <div className="bg-white fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full max-w-[500px] m-auto flex justify-around items-center py-[5px] px-[0px] shadow-custom z-[5] min-[480px]:rounded-t-xl min-[1024px]:hidden">

                <button
                    className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]"
                    onClick={handleButtonClick}
                >
                    <LuMenu />
                </button>

                <button className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]" onClick={handleCardOpen}>
                    <BsCart4 />
                    <span className="inline-block bg-red-500 absolute text-white top-0 right-0 text-[12px] font-[500] leading-[1] py-[2px] px-[4px] rounded-[20px]">
                        {cartItems.length} {/* Mostrar la cantidad de productos en el carrito */}
                    </span>
                </button>

                <button
                    className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]"
                    onClick={handleHomeButtonClick}
                >
                    <GrHomeRounded />
                </button>

                <button className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]">
                    <LiaHeart />

                    <span className="inline-block bg-red-500 absolute text-white top-0 right-0 text-[12px] font-[500] leading-[1] py-[2px] px-[4px] rounded-[20px]">0</span>
                </button>

                <button
                    className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]"
                    onClick={handleCategoryOpen}
                >
                    <TfiLayoutGrid2 />
                </button>

            </div>




            {isMenuOpen && (
                <div>

                    <div className="fixed bg-trans blur-sm top-0 h-full animate-slideInFromleft left-0 w-full z-20" onClick={handleCloseClick}></div>
                    <nav className="bg-white fixed animate-slideInFromleft top-0  left-0 w-full max-w-[320px] h-[100vh] p-[20px] shadow-custom overflow-y-scroll overscroll-contain transition-all duration-500 ease-linear z-[20] min-[1024px]:hidden">

                        <div className="pb-[15px] mb-[10px] flex justify-between items-center border-b-2 border-zinc-300">
                            <h2 className="text-red-600 text-[1.125rem] font-[600]">Menu</h2>

                            <button className="block bg-transparent font-inherit border-none cursor-pointer text-zinc-900 text-[22px]" onClick={handleCloseClick}>
                                <IoCloseSharp className="block" />
                            </button>
                        </div>

                        <ul className="mb-[30px]">

                            <li className="list-none border-b border-zinc-300">
                                <a href="#" className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Inicio</a>
                            </li>

                            <li className="list-none border-b  border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={toggleDressSubmenu}>
                                    <p className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Ropas</p>
                                    {isDressOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeDressSubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>


                                <ul className={isDressOpen ? 'py-[13px] mb-8 px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>
                                    <li className="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                            Vestidos & Conjuntos
                                        </a>
                                    </li>
                                    <li className="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                            Poleras
                                        </a>
                                    </li>
                                    <li className="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                            Polerones
                                        </a>
                                    </li>
                                    <li className="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                            pantalones
                                        </a>
                                    </li>
                                </ul>

                            </li>

                            <li className="list-none border-b border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={toggleWomenSubmenu}>
                                    <p className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Para Mujeres</p>
                                    {isWomenOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeWomenSubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>


                                <ul className={isWomenOpen ? 'py-[13px] mb-8 px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Vestidos & Blusas</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Aretes</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Collares</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">kit de maquillages</a>
                                    </li>

                                </ul>


                            </li>

                            <li className="list-none border-b border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={toggleJewelrySubmenu}>
                                    <p className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Joyas</p>
                                    {isJewelryOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeJewelrySubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>


                                <ul className={isJewelryOpen ? 'py-[13px] mb-8 px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Aros</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Anillos</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Collares</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Pulseras</a>
                                    </li>
                                </ul>


                            </li>

                            <li className="list-none border-b border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={togglePerfumeSubmenu}>
                                    <p className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Perfume</p>
                                    {isPerfumeOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closePerfumeSubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>


                                <ul className={isPerfumeOpen ? 'py-[13px] mb-8 px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Perfume para Ropas</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Desodorantes</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Fragancia Floral</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Ambientador</a>
                                    </li>

                                </ul>


                            </li>

                            <li className="list-none border-b border-zinc-300">
                                <a href="#" className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Blog</a>
                            </li>

                            <li className="list-none border-b border-zinc-300">
                                <a href="#" className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Ofertas</a>
                            </li>

                        </ul>

                        <div class="menu-bottom">

                            <ul className="mb-[20px]">

                                <li className="list-none">
                                    <button
                                        className="font-inherit border-none w-full cursor-pointer bg-none flex items-center justify-between"
                                        onClick={toggleLenguageMenu}
                                    >
                                        <p className="text-[0.938rem] font-[500] text-zinc-900 py-[12px] px-[0]">
                                            Language
                                        </p>
                                        <IoCaretBack>
                                            className={`transform ${isLenguageOpen ? 'rotate-[-90deg]' : 'rotate-0'}`}
                                        </IoCaretBack>
                                    </button>


                                    <ul className={isLenguageOpen ? ' px-[15px]  border border-l-zinc-300 rounded-[10px] shadow-custom max-h-[100px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>
                                        <li className="list-none border-b border-gray-300">
                                            <a href="#" className="block no-underline">
                                                English
                                            </a>
                                        </li>
                                        <li className="list-none border-b border-gray-300">
                                            <a href="#" className="block no-underline">
                                                Español
                                            </a>
                                        </li>
                                    </ul>

                                </li>



                                <li className="list-none border-none">
                                    <button
                                        className="font-inherit border-none cursor-pointer bg-none accordion-menu w-full flex items-center justify-between"
                                        onClick={toggleCurrencyMenu}
                                    >
                                        <p className="text-[0.938rem] font-[500] text-zinc-900 py-[12px] px-[0]">
                                            Currency
                                        </p>
                                        <IoCaretBack
                                            className={`transform ${isCurrencyOpen ? 'rotate-[-90deg]' : 'rotate-0'}`}
                                        />
                                    </button>


                                    <ul className={isCurrencyOpen ? ' px-[15px]  border border-l-zinc-300 rounded-[10px] shadow-custom max-h-[100px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>
                                        <li className="list-none border-b border-gray-300">
                                            <a href="#" className="block no-underline">USD &dollar;</a>
                                        </li>

                                        <li className="list-none">
                                            <a href="#" className="block no-underline">EUR &euro;</a>
                                        </li>
                                    </ul>


                                </li>

                            </ul>

                            <ul className="flex justify-center items-center gap-[10px]">

                                <li className="list-none">
                                    <a href="#" className="block no-underline bg-slate-300 text-zinc-900 text-[20px] p-[10px] rounded-[10px]">
                                        <BsFacebook />
                                    </a>
                                </li>

                                <li className="list-none">
                                    <a href="#" className="block no-underline bg-slate-300 text-zinc-900 text-[20px] p-[10px] rounded-[10px]">
                                        <RiWhatsappFill />
                                    </a>
                                </li>

                                <li className="list-none">
                                    <a href="#" className="block no-underline bg-slate-300 text-zinc-900 text-[20px] p-[10px] rounded-[10px]">
                                        <AiOutlineInstagram />
                                    </a>
                                </li>

                            </ul>

                        </div>


                    </nav>
                </div>

            )}


            {isCategoryOpen && (
                <Mains
                    isCategoryOpen={isCategoryOpen}
                    onClose={handleCategoryClose}
                />
            )}

            {isCardOpen && (
                <Card
                    isCardOpen={isCardOpen}
                    onClose={handleCardClose}
                />
            )}



        </header>
    );
}

export default Header;


