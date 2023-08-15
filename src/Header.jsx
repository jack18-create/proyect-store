import { useState } from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { BsCart4, BsFacebook } from "react-icons/bs";
import { GrFormAdd, GrHomeRounded } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
import { IoCaretBack, IoCloseSharp, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { LiaHeart } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { RiCloseLine, RiWhatsappFill } from "react-icons/ri";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import Mains from "./Mains";
import Card from "./card";
import "./index.css";
import { useContext, useEffect } from "react"; // Importar useContext
import { CartContext } from "./CartContext"; // Importar el contexto

// import React, { useState } from 'react';


function Header({ onSearch, onCardOpen }) {
    const [isMenMouselOpen, setIsMousePanelOpen] = useState(false);
    const [isMenPanelOpen, setIsMenPanelOpen] = useState(false);
    const [isWomenPanelOpen, setIsWomenPanelOpen] = useState(false);
    const [isJewelryPanelOpen, setIsJewelryPanelOpen] = useState(false);
    const [isPerfumePanelOpen, setIsPerfumePanelOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [showProductImage, setShowProductImage] = useState(false);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    const [isDressOpen, setIsDressOpen] = useState(false);
    const [isWomenOpen, setIsWomenOpen] = useState(false);
    const [isJewelryOpen, setIsJewelryOpen] = useState(false);
    const [isPerfumeOpen, setIsPerfumeOpen] = useState(false);
    // const [isDiciochoOpen, setIsDiciochoOpen] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isUlOpen, setIsUlOpen] = useState(false);

    // const [isSiSelected, setIsSiSelected] = useState(null);
    // const [isError, setIsError] = useState(false);


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

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);
    };

    const handleSearch = () => {
        onSearch(searchInput);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
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
        // setIsUlOpen(false);
    };

    const toggleWomenSubmenu = () => {
        setIsWomenOpen(!isWomenOpen);
        setIsDressOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
        // setIsUlOpen(false);
    };
    const toggleJewelrySubmenu = () => {
        setIsJewelryOpen(!isJewelryOpen);
        setIsDressOpen(false);
        setIsWomenOpen(false);
        setIsPerfumeOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
        // setIsUlOpen(false);
    };

    const togglePerfumeSubmenu = () => {
        setIsPerfumeOpen(!isPerfumeOpen);
        setIsJewelryOpen(false);
        setIsWomenOpen(false);
        setIsDressOpen(false);
        setIsLenguageOpen(false);
        setIsCurrencyOpen(false);
        // setIsUlOpen(false);
    };

    // const toggleModal = () => {
    //     // Toggle the icon state first
    //     if (isUlOpen) {
    //         setIsUlOpen(false);
    //         setIsModalOpen(false);
    //         // Close the modal if the <ul> is open
    //     } else {
    //         setIsModalOpen(!isModalOpen);
    //         setIsSiSelected(null); // Reset the selected option when opening the modal
    //         setIsError(false); // Reset the error when opening the modal
    //     }
    // };


    // const handleInputChange = (event) => {
    //     setIsSiSelected(event.target.value === 'si');
    //     setIsError(false); // Reset the error when the user makes a selection
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (isSiSelected === null) {
    //         // Show error if "SI" or "NO" is not selected
    //         setIsError(true);
    //         return;
    //     }
    //     // Proceed with your logic for the form submission or other actions here
    //     // ...

    //     // Open or close the modal based on the selection
    //     if (isSiSelected) {
    //         // Open the <ul> only if "SI" is selected
    //         setIsUlOpen(true);
    //         toggleDiciochoSubmenu();
    //         toggleModal();

    //     } else {
    //         setIsModalOpen(false);
    //         setIsUlOpen(false);  // Close the modal if "NO" is selected
    //     }
    // };

    // const toggleDiciochoSubmenu = () => {
    //     setIsJewelryOpen(false);
    //     setIsWomenOpen(false);
    //     setIsDressOpen(false);
    //     setIsLenguageOpen(false);
    //     setIsCurrencyOpen(false);
    //     setIsPerfumeOpen(false);
    //     setIsModalOpen(true);
    // };

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

    const closDiciochoSubmenu = () => {
        setIsDiciochoOpen(false);
    };
    const closeModal = () => {
        setIsModalOpen(false); // Cerrar el modal
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

    useEffect(() => {
        if (cartItems.length > 0 && !isCardOpen) {
            setShowProductImage(true);

            const timer = setTimeout(() => {
                setCurrentProductIndex(() => cartItems.length);
                setShowProductImage(false);
            }, 800); // Ocultar después de medio segundo (ajusta este valor según tu preferencia)

            return () => clearTimeout(timer);
        }
    }, [cartItems]);


    const [isCardOpen, setIsCardOpen] = useState(false);
    const handleCardOpen = () => {
        setIsCardOpen(true);
        setShowProductImage(false);
    };

    const handleCardClose = () => {
        setIsCardOpen(false);

    };


    const handleHomeButtonClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };





    return (
        <header id="inicio" className="m-0 p-0 box-border">


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
                        <input
                            className="placeholder:font-inherit block w-full font-inherit font-[0.875rem] text-inherit py-[10px] px-[15px] pr-[50px] border border-b-slate-300 rounded-[10px] outline-none appearance-none"
                            type="search"
                            name="search"
                            placeholder="Enter the product name..."
                            value={searchInput}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress} // Handle Enter key press
                        />
                        <button
                            className="block bg-transparent font-inherit border-none cursor-pointer bg-white absolute top-[50%] right-[2px] transform -translate-y-1/2 text-inherit text-[18px] py-[8px] px-[15px] transition-colors duration-200 ease hover:text-pink-600"
                            onClick={handleSearch} // Handle button click
                        >
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

                <button className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]" onClick={() => { setIsCardOpen(true); }}>
                    <BsCart4 />
                    <span className="inline-block bg-red-500 absolute text-white top-0 right-0 text-[12px] font-[500] leading-[1] py-[2px] px-[4px] rounded-[20px]">
                        {cartItems.length}
                    </span>
                    {showProductImage && cartItems.length > 0 && !isCardOpen && (
                        <img
                            src={cartItems[currentProductIndex % cartItems.length].img1}
                            className="fixed shadow-[0px_0px_20px_-5px_rgba(2,0,2,0.7)] rounded-[10px] left-[90px] bottom-[65px]"
                            width={70}
                            height={70}
                        />
                    )}
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
                                <a href="#inicio" className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]"
                                    onClick={handleCloseClick} >Inicio</a>
                            </li>

                            <li className="list-none border-b  border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={toggleDressSubmenu}>
                                    <p className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Lubricantes y Aceites</p>
                                    {isDressOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeDressSubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>



                                <ul className={isDressOpen ? 'py-[13px] flex gap-[30px] mb-[70%] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>
                                    <div>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300" >
                                                Sexo Oral
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] mb-6 text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Anal
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Lubricantes
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Gel
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Aceite
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Masajes
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Sachets
                                            </a>
                                        </li>
                                    </div>
                                    <p className='border-l-2 h-[34vh] border-slate-600'></p>

                                    <div>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Feromonas
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Cosmestibles
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] my-2 text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Dilatadores | Estimuladores
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Retardantes
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] my-2 text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Astringente | Rejuvenecedor
                                            </a>
                                        </li>
                                        <li className="submenu-category">
                                            <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">
                                                Kits
                                            </a>
                                        </li>

                                    </div>

                                </ul>

                            </li>

                            <li className="list-none border-b border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={toggleWomenSubmenu}>
                                    <p className="no-underline flex items-center gap-1 justify-center text-pink-600 text-[0.938rem] font-[500] py-[12px] px-[0]">Para Ellas <TbGenderFemale className='text-2xl' /></p>
                                    {isWomenOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeWomenSubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>


                                <ul className={isWomenOpen ? 'py-[13px] mb-[118%] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                    <li class="submenu-category">
                                        <a href="#oral" className="no-underline  flex gap-3 items-center py-[6px] text-[0.938rem] text-pink-600 font-[300] hover:text-gray-300" onClick={handleCloseClick} >Para Ellas <p className='text-[10px] rounded-[10px] border border-neutral-500 hover:border-pink-600 p-[px] text-neutral-500 hover:text-pink-600 '>GENERAL</p> </a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Dildos</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Vibradores</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Rotadores</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Realistas</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] mt-[25px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Succionadores</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Arnes</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Sexo Anal</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] mt-[25px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Plugs|Colitas</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Bolas Chinas</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Balas</a>
                                    </li>

                                </ul>


                            </li>

                            <li className="list-none border-b border-zinc-300">

                                <button className=" w-full flex justify-between items-center" onClick={toggleJewelrySubmenu}>
                                    <p className="no-underline flex items-center gap-1 justify-center text-blue-600 text-[0.938rem] font-[500] py-[12px] px-[0]">Para Ellos <TbGenderMale className='text-2xl' /></p>
                                    {isJewelryOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeJewelrySubmenu} />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>


                                <ul className={isJewelryOpen ? 'py-[13px] mb-[40%] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline  flex gap-3 items-center py-[6px] text-[0.938rem] text-blue-600 font-[300] hover:text-gray-300">Para Ellos <p className='text-[10px] rounded-[10px] border border-neutral-500 hover:border-blue-700 p-[px] text-neutral-500 hover:text-blue-700 '>GENERAL</p> </a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Masturbadores</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Bombas al vacio</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Anillos</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Extensiones|Protesis</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Sexo Anal</a>
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

                            {/* <li className="list-none border-b border-zinc-300">

                                <button
                                    className="w-full flex justify-between items-center"
                                    onClick={toggleModal}
                                >
                                    <p className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">
                                        <img src="./+18.png" alt="" width={20} height={20} />
                                    </p>
                                    {isUlOpen ? (
                                        <IoIosRemove className="block text-gray-700 remove-icon" />
                                    ) : (
                                        <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                    )}
                                </button>



                                <ul className={isUlOpen ? 'py-[13px] mb-8 px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : 'max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">Body Sex</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">vibrators</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">KIT DE ROLES DOMINIO Y SUMISIO</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" className="no-underline block py-[6px] text-[0.938rem] text-gray-600 font-[300] hover:text-gray-300">lubricant</a>
                                    </li>

                                </ul>



                            </li>
                            {isModalOpen && (
                                <div className="fixed top-0 left-0 w-full  h-screen bg-red-600/25 flex justify-center items-center  z-10 ">
                                    <div className="absolute top-0 h-full left-0 w-full z-1" onClick={closeModal} ></div>
                                    <div className="relative max-w-[350px] m-[20px] bg-white rounded-[5px]  overflow-hidden z-[2] animate-scaleUp">
                                        <button onClick={closeModal} className="absolute top-[15px] right-[15px] bg-red-600 text-white text-[16px] p-[5px] rounded-[5px] hover:opacity-[0.9]">
                                            <RiCloseLine />
                                        </button>
                                        <div className="hidden md:block" onClick={closeModal}>
                                            <img src="https://media.revistagq.com/photos/5f7f1e8178c4dd5b8fdf255b/16:9/pass/gucci-reventa-segunda-mano.jpg" alt="subscribe newsletter" width={400} height={400} />
                                        </div>
                                        <div className="py-[50px] px-[30px] text-center md:text-left">
                                            <form onSubmit={handleSubmit} >
                                                <div className="mb-[20px]">
                                                    <h3 className="text-neutral-600 text-sm font-semibold mb-[10px]">
                                                        Crea una experiencia mejorada para el entretenimiento adulto 18+.
                                                    </h3>
                                                    <p className="text-[20px] leading-[1.6] text-red-600">
                                                        ¿Eres mayor de 18 años?
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center gap-16">
                                                    <fieldset className="mb-5">
                                                        <div className="flex gap-24">
                                                            <div className="flex gap-1">
                                                                <input
                                                                    id="draft"
                                                                    className="peer/draft"
                                                                    type="radio"
                                                                    name="status"
                                                                    value="si"
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
                                                                    Si
                                                                </label>
                                                            </div>
                                                            <div className="flex gap-1">
                                                                <input
                                                                    id="published"
                                                                    className="peer/published"
                                                                    type="radio"
                                                                    name="status"
                                                                    value="no"
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label htmlFor="published" className="peer-checked/published:text-red-500">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isSiSelected === true && (
                                                            <div className="peer-checked/draft:block">Si soy mayor de 18 años.</div>
                                                        )}
                                                        {isSiSelected === false && (
                                                            <div className="peer-checked/published:block">No soy mayor de 18 años.</div>
                                                        )}
                                                    </fieldset>

                                                </div>
                                                {isError && (
                                                    <p className="text-red-500 text-sm mt-2">Selecciona si eres mayor de 18 años o no</p>
                                                )}
                                                <button
                                                    type="submit"
                                                    className="bg-black text-white text-sm font-semibold uppercase py-[10px] px-[15px] rounded-[5px] mx-auto transition-[0.2s ease] hover:bg-rose-500"

                                                >
                                                    Confirmar
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )} */}

                            <li className="list-none border-b border-zinc-300">
                                <a href="#" className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]">Blog</a>
                            </li>

                            <li className="list-none border-b border-zinc-300">
                                <a
                                    href="#offters"
                                    className="no-underline block text-gray-700 text-[0.938rem] font-[500] py-[12px] px-[0]"
                                    onClick={handleCloseClick}
                                >
                                    Ofertas
                                </a>
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


