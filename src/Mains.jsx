import { BsFacebook, BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoSearchOutline, IoPersonOutline, IoBagHandleOutline, IoCloseSharp, IoCaretBack } from "react-icons/io5";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
import "./index.css";
import { useState } from 'react';
import ProductMinimal from "./Product";
import ProductMain from "./ProductoMains";



function Mains({ isMainsOpen, onClose }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const [isClothesOpen, setIsClothesOpen] = useState(false);
    const [isFootwearOpen, setIsFootwearOpen] = useState(false);
    const [isJewelryOpen, setIsJewelryOpen] = useState(false);
    const [isPerfumeOpen, setIsPerfumeOpen] = useState(false);
    const [isCosmeticsOpen, setIsCosmeticsOpen] = useState(false);
    const [isGlassesOpen, setIsGlassesOpen] = useState(false);
    const [isBagsOpen, setIsBagsOpen] = useState(false);



    const toggleClothesSubmenu = () => {
        setIsClothesOpen(!isClothesOpen);
        setIsFootwearOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsCosmeticsOpen(false);
        setIsGlassesOpen(false);
        setIsBagsOpen(false);
    };

    const toggleFootwearSubmenu = () => {
        setIsFootwearOpen(!isFootwearOpen);
        setIsClothesOpen(false);
        setIsJewelryOpen(false);
        setIsPerfumeOpen(false);
        setIsCosmeticsOpen(false);
        setIsGlassesOpen(false);
        setIsBagsOpen(false);
    };
    const toggleJewelrySubmenu = () => {
        setIsJewelryOpen(!isJewelryOpen);
        setIsFootwearOpen(false);
        setIsClothesOpen(false);
        setIsPerfumeOpen(false);
        setIsCosmeticsOpen(false);
        setIsGlassesOpen(false);
        setIsBagsOpen(false);
    };

    const togglePerfumeSubmenu = () => {
        setIsPerfumeOpen(!isPerfumeOpen);
        setIsJewelryOpen(false);
        setIsClothesOpen(false);
        setIsFootwearOpen(false);
        setIsCosmeticsOpen(false);
        setIsGlassesOpen(false);
        setIsBagsOpen(false);
    };
    const toggleCosmeticsSubmenu = () => {
        setIsCosmeticsOpen(!isCosmeticsOpen);
        setIsJewelryOpen(false);
        setIsClothesOpen(false);
        setIsFootwearOpen(false);
        setIsPerfumeOpen(false);
        setIsGlassesOpen(false);
        setIsBagsOpen(false);
    };
    const toggleGlassesSubmenu = () => {
        setIsGlassesOpen(!isGlassesOpen);
        setIsJewelryOpen(false);
        setIsClothesOpen(false);
        setIsFootwearOpen(false);
        setIsPerfumeOpen(false);
        setIsCosmeticsOpen(false);
        setIsBagsOpen(false);
    };
    const toggleBagsSubmenu = () => {
        setIsBagsOpen(!isBagsOpen);
        setIsJewelryOpen(false);
        setIsClothesOpen(false);
        setIsFootwearOpen(false);
        setIsPerfumeOpen(false);
        setIsGlassesOpen(false);
        setIsCosmeticsOpen(false);
    };


    const closeClothesSubmenu = () => {
        setIsClothesOpen(false);
    };

    const closeFootwearSubmenu = () => {
        setIsFootwearOpen(false);
    };
    const closeJewelrySubmenu = () => {
        setIsjewelryOpen(false);
    };

    const closePerfumeSubmenu = () => {
        setIsPerfumeOpen(false);
    };


    const handleCloseClick = () => {
        setIsMenuOpen(false);
        // Llamar a la función onClose pasada desde el componente padre (Header)
    };


    return (

        <main className="m-0 p-0 box-border">

            <div class="banner" className='my-[30px] mx-[0px] min-[1024px]:mt-[0px]'>

                <div class="container" className='py-[0px] px-[15px] min-[768px]:max-w-[750px] min-[768px]:m-auto min-[1024px]:max-w-[980px] min-[1200px]:max-w-[1200px] min-[1400px]:max-w-[1350px]'>

                    <div class="slider-container has-scrollbar" className="flex items-center gap-[10px] rounded-[10px] overflow-x-auto overflow-y-contain snap-mandatory snap-x min-[1024px]:h-[380px] scrollbar-thin">

                        <div class="slider-item" className='relative min-w-[100%] max-w-[450px] aspect-square rounded-[10px] overflow-hidden snap-start min-[480px]:aspect-[5/3] min-[570px]:aspect-[4/2] min-[768px]:aspect-[auto] min-[768px]:h-[350px] min-[1400px]:h-[450px]'>

                            <img src="./avo22.jpg" alt="women's latest fashion sale" class="banner-img" className='w-full h-full object-cover object-right min-[480px]:object-contain  min-[480px]: min-[1200px]:object-top' />

                            <div class="banner-content" className='bg-zinc-300/40 absolute bottom-[25px] left-[25px] right-[25px] rounded-[10px] py-[20px] px-[25px] min-[480px]:top-[50%] min-[480px]:right-auto min-[480px]:bottom-auto min-[480px]:translate-y-[-50%] min-[480px]:max-w-[320px] min-[570px]:bg-inherit min-[768px]:max-w-[380px] min-[768px]:font-[1.25rem] min-[1024px]:l-[75px] min-[1024px]:max-w-[400px] min-[1400px]:max-w-[460px]'>

                                <p class="banner-subtitle" className='text-red-600 text-[0.875rem] font-[500] capitalize tracking-[10px] mb-[10px] min-[768px]:text-[1.25rem] min-[1024px]:text-[1-625rem]'>Trending item</p>

                                <h2 class="banner-title" className='text-stone-900 text-[1.563rem] uppercase tracking-[1] mb-[10px]'>Women's latest fashion sale</h2>

                                <p class="banner-text" className='hidden min-[480px]:block min-[480px]:text-gray-500 min-[480px]:text-[0.875rem] min-[480px]:font-[500] min-[480px]:mb-[10px] min-[768px]:text-[1.125rem] min-[1024px]:text-[1.375rem]'>
                                    starting at &dollar; <b className='min-[480px]:text-[1.375rem] min-[768px]:text-[1.875rem]'>20</b>.00
                                </p>

                                <a href="#" class="banner-btn" className='block no-underline bg-red-600 text-white max-w-max uppercase py-[4px] px-[10px] rounded-[5px] text-[0.688rem] font-[600] transition duration-200 hover:bg-neutral-900 min-[480px]:py-[7px] min-[480px]:px-[20px] min-[768px]:text-[0.75rem] min-[1024px]:text-[0.875rem]'>Shop now</a>

                            </div>

                        </div>

                        <div class="slider-item" className='relative min-w-[100%] max-w-[450px] aspect-square rounded-[10px] overflow-hidden snap-start min-[480px]:aspect-[5/3] min-[570px]:aspect-[4/2] min-[768px]:aspect-[auto] min-[768px]:h-[350px] min-[1400px]:h-[450px]'>

                            <img src="http://127.0.0.1:5501/assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img" className='w-full h-full object-cover object-right min-[1200px]:object-top' />

                            <div class="banner-content" className='bg-zinc-100/60 absolute bottom-[25px] left-[25px] right-[25px] rounded-[10px] py-[20px] px-[25px] min-[480px]:top-[50%] min-[480px]:right-auto min-[480px]:bottom-auto min-[480px]:translate-y-[-50%] min-[480px]:max-w-[320px] min-[570px]:bg-inherit min-[768px]:max-w-[380px] min-[768px]:font-[1.25rem] min-[1024px]:l-[75px] min-[1024px]:max-w-[400px] min-[1400px]:max-w-[460px]'>

                                <p class="banner-subtitle" className='text-red-600 text-[0.875rem] font-[500] capitalize tracking-[10px] mb-[10px] min-[768px]:text-[1.25rem] min-[1024px]:text-[1-625rem]'>Trending accessories</p>

                                <h2 class="banner-title" className='text-stone-900 text-[1.563rem] uppercase tracking-[1] mb-[10px]'>Modern sunglasses</h2>

                                <p class="banner-text" className='hidden min-[480px]:block min-[480px]:text-gray-500 min-[480px]:text-[0.875rem] min-[480px]:font-[500] min-[480px]:mb-[10px] min-[768px]:text-[1.125rem] min-[1024px]:text-[1.375rem]'>
                                    starting at &dollar; <b className='min-[480px]:text-[1.375rem] min-[768px]:text-[1.875rem]'>15</b>.00
                                </p>

                                <a href="#" class="banner-btn" className='block no-underline bg-red-600 text-white max-w-max uppercase py-[4px] px-[10px] rounded-[5px] text-[0.688rem] font-[600] transition duration-200 hover:bg-neutral-900 min-[480px]:py-[7px] min-[480px]:px-[20px] min-[768px]:text-[0.75rem] min-[1024px]:text-[0.875rem]'>Shop now</a>

                            </div>

                        </div>

                        <div class="slider-item" className='relative min-w-[100%] max-w-[450px] aspect-square rounded-[10px] overflow-hidden snap-start min-[480px]:aspect-[5/3] min-[570px]:aspect-[4/2] min-[768px]:aspect-[auto] min-[768px]:h-[350px] min-[1400px]:h-[450px]'>

                            <img src="http://127.0.0.1:5501/assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img" className='w-full h-full object-cover object-right min-[1200px]:object-top' />

                            <div class="banner-content" className='bg-zinc-100/60 absolute bottom-[25px] left-[25px] right-[25px] rounded-[10px] py-[20px] px-[25px] min-[480px]:top-[50%] min-[480px]:right-auto min-[480px]:bottom-auto min-[480px]:translate-y-[-50%] min-[480px]:max-w-[320px] min-[570px]:bg-inherit min-[768px]:max-w-[380px] min-[768px]:font-[1.25rem] min-[1024px]:l-[75px] min-[1024px]:max-w-[400px] min-[1400px]:max-w-[460px]'>

                                <p class="banner-subtitle" className='text-red-600 text-[0.875rem] font-[500] capitalize tracking-[10px] mb-[10px] min-[768px]:text-[1.25rem] min-[1024px]:text-[1-625rem]'>Sale Offer</p>

                                <h2 class="banner-title" className='text-stone-900 text-[1.563rem] uppercase tracking-[1] mb-[10px]'>New fashion summer sale</h2>

                                <p class="banner-text" className='hidden min-[480px]:block min-[480px]:text-gray-500 min-[480px]:text-[0.875rem] min-[480px]:font-[500] min-[480px]:mb-[10px] min-[768px]:text-[1.125rem] min-[1024px]:text-[1.375rem]'>
                                    starting at &dollar; <b className='min-[480px]:text-[1.375rem] min-[768px]:text-[1.875rem]'>29</b>.99
                                </p>

                                <a href="#" class="banner-btn" className='block no-underline bg-red-600 text-white max-w-max uppercase py-[4px] px-[10px] rounded-[5px] text-[0.688rem] font-[600] transition duration-200 hover:bg-neutral-900 min-[480px]:py-[7px] min-[480px]:px-[20px] min-[768px]:text-[0.75rem] min-[1024px]:text-[0.875rem]'>Shop now</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div class="category" className='mb-[30px]'>

                <div class="container" className='py-[0px] px-[15px] min-[768px]:max-w-[750px] min-[768px]:m-auto min-[1024px]:max-w-[980px] min-[1200px]:max-w-[1200px] min-[1400px]:max-w-[1350px]'>

                    <div class="category-item-container" className='flex items-center gap-[10px] overflow-x-auto overflow-y-contain snap-mandatory snap-x scrollbar-thin min-[570px]:gap-[30px]'>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/dress.svg" alt="dress & frock" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Dress & frock</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(53)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/coat.svg" alt="winter wear" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Winter wear</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(58)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/glasses.svg" alt="glasses & lens" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Glasses & lens</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(68)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/shorts.svg" alt="shorts & jeans" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Shorts & jeans</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(84)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/tee.svg" alt="t-shirts" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>T-shirts</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(35)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/jacket.svg" alt="jacket" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Jacket</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(16)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/watch.svg" alt="watch" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Watch</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(27)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                        <div class="category-item" className='min-w-full flex items-center gap-[10px] p-[15px] border border-x-gray-400 rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)]'>

                            <div class="category-img-box" className='bg-slate-200 border border-y-blue-300 rounded-[5px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px]'>
                                <img src="http://127.0.0.1:5501/assets/images/icons/hat.svg" alt="hat & caps" width="30" />
                            </div>

                            <div class="category-content-box" className='w-full'>

                                <div class="category-content-flex" className='flex justify-between items-center mb-[10px]'>
                                    <h3 class="category-item-title" className='text-neutral-900 text-[0.75rem] font-[600] uppercase min-[1200px]:text-[0.824rem]'>Hat & caps</h3>

                                    <p class="category-item-amount" className='text-zinc-500 text-[0.625rem]'>(39)</p>
                                </div>

                                <a href="#" class="category-btn" className='text-pink-600 text-[0.75rem] font-[500] capitalize'>Show all</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="product-container">
                <div class="container" className='py-[0px] px-[15px] min-[768px]:max-w-[750px] min-[768px]:m-auto min-[1024px]:max-w-[980px] min-[1200px]:max-w-[1200px] min-[1400px]:max-w-[1350px]
                 min-[1024px]:relative min-[1024px]:flex min-[1024px]:items-start min-[1024px]:gap-[30px] min-[1024px]:mb-[30px]'>

































                    {isMenuOpen && (
                        <div className={`bg-white fixed top-[0px] left-${isMainsOpen ? "0" : "[-100%]"} bottom-[0px] w-full max-w-[320px] p-[30px] overflow-y-scroll overscroll-contain visible duration-500 ease-ease z-[2] min-[1024px]:text-[0.941rem] min-[1024px]:sticky top-[30px] min-[1024px]:left-0 min-[1024px]:p-0 min-[1024px]:min-w-[calc(25%-15px)] min-[1024px]:mb-[30px] min-[1024px]:visible min-[1024px]:overflow-y-auto min-[1024px]:overscroll-auto min-[1024px]:z-[0]`}>

                            <div class="sidebar-category" className='mb-[15px] pb-[15px] border-b border-b-black min-[1024px]:p-[20px] min-[1024px]:mb-[30px] min-[1024px]:border min-[1024px]:border-neutral-400 min-[1024px]:rounded-[10px]'>

                                <div class="sidebar-top" className='flex justify-between items-center mb-[10px]'>
                                    <h2 class="sidebar-title" className='text-gray-600 text-[1rem] uppercase tracking-[0.8px] font-[600]'>Category</h2>

                                    <button className="text-stone-900 text-[22px] font-[600] min-[1024px]:hidden" onClick={handleCloseClick}>
                                        <IoCloseSharp className="block" />
                                    </button>
                                </div>

                                <ul class="sidebar-menu-category-list">

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => toggleClothesSubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                                                    class="menu-title-img" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Clothes</p>
                                            </div>

                                            <div>

                                                {isClothesOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeClothesSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}

                                            </div>

                                        </button>


                                        <ul class="sidebar-submenu-category-list" data-accordion className={isClothesOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Shirt</p>
                                                    <data value="300" class="stock" title="Available Stock">300</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">shorts & jeans</p>
                                                    <data value="60" class="stock" title="Available Stock">60</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category" >
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">jacket</p>
                                                    <data value="50" class="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">dress & frock</p>
                                                    <data value="87" class="stock" title="Available Stock">87</data>
                                                </a>
                                            </li>

                                        </ul>


                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => toggleFootwearSubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/shoes.svg" alt="footwear" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Footwear</p>
                                            </div>

                                            <div>
                                                {isFootwearOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeFootwearSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}
                                            </div>

                                        </button>


                                        <ul class="sidebar-submenu-category-list" data-accordion className={isFootwearOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Sports</p>
                                                    <data value="45" class="stock" title="Available Stock">45</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Formal</p>
                                                    <data value="75" class="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Casual</p>
                                                    <data value="35" class="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Safety Shoes</p>
                                                    <data value="26" class="stock" title="Available Stock">26</data>
                                                </a>
                                            </li>

                                        </ul>


                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => toggleJewelrySubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/jewelry.svg" alt="clothes" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Jewelry</p>
                                            </div>

                                            <div>
                                                {isJewelryOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeClothesSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion className={isJewelryOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Earrings</p>
                                                    <data value="46" class="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Couple Rings</p>
                                                    <data value="73" class="stock" title="Available Stock">73</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Necklace</p>
                                                    <data value="61" class="stock" title="Available Stock">61</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => togglePerfumeSubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/perfume.svg" alt="perfume" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Perfume</p>
                                            </div>

                                            <div>
                                                {isPerfumeOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeClothesSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion className={isPerfumeOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Clothes Perfume</p>
                                                    <data value="12" class="stock" title="Available Stock">12 pcs</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Deodorant</p>
                                                    <data value="60" class="stock" title="Available Stock">60 pcs</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">jacket</p>
                                                    <data value="50" class="stock" title="Available Stock">50 pcs</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">dress & frock</p>
                                                    <data value="87" class="stock" title="Available Stock">87 pcs</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => toggleCosmeticsSubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/cosmetics.svg" alt="cosmetics" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Cosmetics</p>
                                            </div>

                                            <div>
                                                {isCosmeticsOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeClothesSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion className={isCosmeticsOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Shampoo</p>
                                                    <data value="68" class="stock" title="Available Stock">68</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Sunscreen</p>
                                                    <data value="46" class="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Body Wash</p>
                                                    <data value="79" class="stock" title="Available Stock">79</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Makeup Kit</p>
                                                    <data value="23" class="stock" title="Available Stock">23</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => toggleGlassesSubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Glasses</p>
                                            </div>

                                            <div>
                                                {isGlassesOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeClothesSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion className={isGlassesOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Sunglasses</p>
                                                    <data value="50" class="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Lenses</p>
                                                    <data value="48" class="stock" title="Available Stock">48</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn className='w-full flex justify-between items-center py-[7px] px-[0px]' onClick={() => toggleBagsSubmenu(true)}>

                                            <div class="menu-title-flex" className='flex items-center gap-[10px]'>
                                                <img src="./assets/images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20" />

                                                <p class="menu-title" className='text-[1rem] text-neutral-500 font-[500]'>Bags</p>
                                            </div>

                                            <div>
                                                {isBagsOpen ? (
                                                    <IoIosRemove className="block text-gray-700 remove-icon" onClick={closeClothesSubmenu} />
                                                ) : (
                                                    <GrFormAdd className="block text-gray-700 stroke-ionicon add-icon" />
                                                )}
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion className={isBagsOpen ? 'py-[13px] px-[0px] pb-[8px] border-t border-zinc-950 max-h-[122px] visible duration-500 ease-in-out' : '  max-h-0 overflow-hidden invisible duration-500 ease-in-out'}>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Shopping Bag</p>
                                                    <data value="62" class="stock" title="Available Stock">62</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Gym Backpack</p>
                                                    <data value="35" class="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Purse</p>
                                                    <data value="80" class="stock" title="Available Stock">80</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title" className="flex justify-between items-center text-zinc-500 text-[0.875rem] py-[2px] px-[0px] hover:text-zinc-900">
                                                    <p class="product-name" className="capitalize">Wallet</p>
                                                    <data value="75" class="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                </ul>

                            </div>

                            <div class="product-showcase">

                                <h3 class="showcase-heading" className="text-[1rem] font-[600] text-zinc-600 uppercase tracking-[0.8px] mb-[15px]">best sellers</h3>

                                <div class="showcase-wrapper">

                                    <div class="showcase-container">

                                        <div class="showcase" className="flex items-center gap-[15px] mb-[15px]">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
                                                    class="showcase-img" className="rounded-[5px]" />
                                            </a>

                                            <div class="showcase-content" className="w-[calc(100%-90px)]">

                                                <a href="#">
                                                    <h4 class="showcase-title" className="text-stone-800 text-[0.875rem] font-[400] capitalize overflow-hidden whitespace-nowrap text-ellipsis tracking-[0.5px]">baby fabric shoes</h4>
                                                </a>

                                                <div class="showcase-rating" className="flex items-center text-orange-500 text-[13px] py-[4px] px-[0]">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </div>

                                                <div class="price-box" className="mb-[-15px] flex items-center gap-[15px]">
                                                    <del className="text-neutral-500 text-[13px]">$5.00</del>
                                                    <p class="price" className="text-[0.875rem] font-[600] text-zinc-400">$4.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase" className="flex items-center gap-[15px] mb-[15px]">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" class="showcase-img"
                                                    width="75" height="75" className="rounded-[5px]" />
                                            </a>

                                            <div class="showcase-content" className="w-[calc(100%-90px)]">

                                                <a href="#">
                                                    <h4 class="showcase-title" className="text-stone-800 text-[0.875rem] font-[400] capitalize overflow-hidden whitespace-nowrap text-ellipsis tracking-[0.5px]">men's hoodies t-shirt</h4>
                                                </a>
                                                <div class="showcase-rating" className="flex items-center text-orange-500 text-[13px] py-[4px] px-[0]">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarHalf />
                                                </div>

                                                <div class="price-box" className="mb-[-15px] flex items-center gap-[15px]">
                                                    <del className="text-neutral-500 text-[13px]">$17.00</del>
                                                    <p class="price" className="text-[0.875rem] font-[600] text-zinc-400">$7.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase" className="flex items-center gap-[15px] mb-[15px]">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/3.jpg" alt="girls t-shirt" class="showcase-img" width="75"
                                                    height="75" className="rounded-[5px]" />
                                            </a>

                                            <div class="showcase-content" className="w-[calc(100%-90px)]">

                                                <a href="#">
                                                    <h4 class="showcase-title" className="text-stone-800 text-[0.875rem] font-[400] capitalize overflow-hidden whitespace-nowrap text-ellipsis tracking-[0.5px]">girls t-shirt</h4>
                                                </a>
                                                <div class="showcase-rating" className="flex items-center text-orange-500 text-[13px] py-[4px] px-[0]">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarHalf />
                                                </div>

                                                <div class="price-box" className="mb-[-15px] flex items-center gap-[15px]">
                                                    <del className="text-neutral-500 text-[13px]">$5.00</del>
                                                    <p class="price" className="text-[0.875rem] font-[600] text-zinc-400">$3.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase" className="flex items-center gap-[15px] mb-[15px]">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/4.jpg" alt="woolen hat for men" class="showcase-img" width="75"
                                                    height="75" className="rounded-[5px]" />
                                            </a>

                                            <div class="showcase-content" className="w-[calc(100%-90px)]">

                                                <a href="#">
                                                    <h4 class="showcase-title" className="text-stone-800 text-[0.875rem] font-[400] capitalize overflow-hidden whitespace-nowrap text-ellipsis tracking-[0.5px]">woolen hat for men</h4>
                                                </a>
                                                <div class="showcase-rating" className="flex items-center text-orange-500 text-[13px] py-[4px] px-[0]">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </div>

                                                <div class="price-box" className="mb-[-15px] flex items-center gap-[15px]">
                                                    <del className="text-neutral-500 text-[13px]">$15.00</del>
                                                    <p class="price" className="text-[0.875rem] font-[600] text-zinc-400">$12.00</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    )}





                    <div class="product-box" className="min-[1024px]:min-w-[clac(75%-15px)]">







                        <div class="product-minimal" className="mb-[30px] min-[768px]:flex min-[768px]:flex-wrap min-[768px]:justify-center min-[768px]:gap-[20px] min-[1024px]:mb-[20px]">

                            <div class="product-showcase" className="mb-[10px] min-[768px]:min-w-[calc(50%-10px)] min-[768px]:[calc(50%-10px)] min-[1024px]:min-w-[calc(33.33%-14px)] min-[1024px]:w-[calc(33.33%-14px)] min-[1024px]:flex-grow-[1]">

                                <h2 class="title" className=" text-stone-900 text-[1rem] font-[600] tracking-[0.4px] capitalize pb-[10px] border-b border-slate-300 mb-[30px]">New Arrivals</h2>

                                <div class="showcase-wrapper has-scrollbar" className="flex items-center overflow-x-auto overflow-y-contain snap-mandatory snap-x scrollbar-thin min-[1024px]:gap-[10px]">

                                    <div class="showcase-container" className=" min-w-[100%] py-[0] px-[5px] snap-start min-[570px]:min-w-[50%] min-[768px]:min-w-[100%] min-[1024px]:p-[2px]">

                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghgf"
                                            price="12"
                                            inventory="gfhgf"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghfh"
                                            price="13"
                                            inventory="gfgfgh"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description=""
                                            price="23"
                                            inventory="213"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="123"
                                            price="34"
                                            inventory="123"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="dfgfdg"
                                            price="123"
                                            inventory="fgfdg"
                                        />


                                    </div>

                                    <div class="showcase-container" className=" min-w-[100%] py-[0] px-[5px] snap-start min-[570px]:min-w-[50%] min-[768px]:min-w-[100%] min-[1024px]:p-[2px]">
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghgf"
                                            price="12"
                                            inventory="gfhgf"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghfh"
                                            price="13"
                                            inventory="gfgfgh"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description=""
                                            price="23"
                                            inventory="213"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="123"
                                            price="34"
                                            inventory="123"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="dfgfdg"
                                            price="123"
                                            inventory="fgfdg"
                                        />
                                    </div>

                                </div>

                            </div>

                            <div class="product-showcase" className="mb-[10px] min-[768px]:min-w-[calc(50%-10px)] min-[768px]:[calc(50%-10px)] min-[1024px]:min-w-[calc(33.33%-14px)] min-[1024px]:w-[calc(33.33%-14px)] min-[1024px]:flex-grow-[1]">

                                <h2 class="title" className=" text-stone-900 text-[1rem] font-[600] tracking-[0.4px] capitalize pb-[10px] border-b border-slate-300 mb-[30px]">Trending</h2>

                                <div class="showcase-wrapper  has-scrollbar" className="flex items-center overflow-x-auto overflow-y-contain snap-mandatory snap-x scrollbar-thin min-[1024px]:gap-[10px]">

                                    <div class="showcase-container" className=" min-w-[100%] py-[0] px-[5px] snap-start min-[570px]:min-w-[50%] min-[768px]:min-w-[100%] min-[1024px]:p-[2px]">

                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghgf"
                                            price="12"
                                            inventory="gfhgf"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghfh"
                                            price="13"
                                            inventory="gfgfgh"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description=""
                                            price="23"
                                            inventory="213"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="123"
                                            price="34"
                                            inventory="123"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="dfgfdg"
                                            price="123"
                                            inventory="fgfdg"
                                        />

                                    </div>

                                    <div class="showcase-container" className=" min-w-[100%] py-[0] px-[5px] snap-start min-[570px]:min-w-[50%] min-[768px]:min-w-[100%] min-[1024px]:p-[2px]">
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghgf"
                                            price="12"
                                            inventory="gfhgf"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghfh"
                                            price="13"
                                            inventory="gfgfgh"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description=""
                                            price="23"
                                            inventory="213"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="123"
                                            price="34"
                                            inventory="123"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="dfgfdg"
                                            price="123"
                                            inventory="fgfdg"
                                        />
                                    </div>

                                </div>

                            </div>

                            <div class="product-showcase" className="mb-[10px] min-[768px]:min-w-[calc(50%-10px)] min-[768px]:[calc(50%-10px)] min-[1024px]:min-w-[calc(33.33%-14px)] min-[1024px]:w-[calc(33.33%-14px)] min-[1024px]:flex-grow-[1]">

                                <h2 class="title" className=" text-stone-900 text-[1rem] font-[600] tracking-[0.4px] capitalize pb-[10px] border-b border-slate-300 mb-[30px]">Top Rated</h2>

                                <div class="showcase-wrapper  has-scrollbar" className="flex items-center overflow-x-auto overflow-y-contain snap-mandatory snap-x scrollbar-thin min-[1024px]:gap-[10px]">

                                    <div class="showcase-container" className=" min-w-[100%] py-[0] px-[5px] snap-start min-[570px]:min-w-[50%] min-[768px]:min-w-[100%] min-[1024px]:p-[2px]">
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghgf"
                                            price="12"
                                            inventory="gfhgf"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghfh"
                                            price="13"
                                            inventory="gfgfgh"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description=""
                                            price="23"
                                            inventory="213"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="123"
                                            price="34"
                                            inventory="123"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="dfgfdg"
                                            price="123"
                                            inventory="fgfdg"
                                        />
                                    </div>

                                    <div class="showcase-container" className=" min-w-[100%] py-[0] px-[5px] snap-start min-[570px]:min-w-[50%] min-[768px]:min-w-[100%] min-[1024px]:p-[2px]">
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghgf"
                                            price="12"
                                            inventory="gfhgf"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="fghfh"
                                            price="13"
                                            inventory="gfgfgh"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description=""
                                            price="23"
                                            inventory="213"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="123"
                                            price="34"
                                            inventory="123"
                                        />
                                        <ProductMinimal
                                            img="salchipapa.jpg"
                                            description="dfgfdg"
                                            price="123"
                                            inventory="fgfdg"
                                        />
                                    </div>

                                </div>

                            </div>

                        </div>




                        <div class="product-featured" className="mb-[30px]">

                            <h2 class="title" className=" text-stone-900 text-[1rem] font-[600] tracking-[0.4px] capitalize pb-[10px] border-b border-slate-300 mb-[30px]">Deal of the day</h2>

                            <div class="showcase-wrapper has-scrollbar" className="flex items-center gap-[20px] overflow-x-auto overflow-y-contain snap-mandatory snap-x scrollbar-thin">

                                <div class="showcase-container" className="min-w-[100%] p-[30px] border border-zinc-400 rounded-[10px] snap-start">

                                    <div class="showcase" className="min-[768px]:flex justify-center items-center gap-[20px]">

                                        <div class="showcase-banner" className="min-[1200px]:[calc(50%-10px)] ">
                                            <img src="./assets/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" class="showcase-img" className="w-full h-full object-cover min-[570px]:max-w-[450px] min-[570px]:m-auto min-[768px]:max-w-fit" />
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
                                                <h3 class="showcase-title" className="text-[0.875rem] text-stone-900 overflow-hidden whitespace-nowrap text-ellipsis uppercase mb-[3px]">shampoo, conditioner & facewash packs</h3>
                                            </a>

                                            <p class="showcase-desc" className="text-neutral-500 text-[0.875rem] font-[300] mb-[10px]">
                                                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                dolor dolor sit amet consectetur Lorem ipsum dolor
                                            </p>

                                            <div class="price-box" className="text-[1.25rem] flex gap-[10px] mb-[10px] min-[1200px]:[calc(50%-10px)]" >
                                                <p class="price" className="text-pink-600 font-[700]">$150.00</p>

                                                <del className="text-zinc-600 font-[300]">$200.00</del>
                                            </div>

                                            <button class="add-cart-btn" className="bg-pink-600 py-[8px] px-[15px] text-white text-[0.75rem] font-[700] uppercase rounded-[10px] mb-[15px] transition duration-500 ease-ease hover:bg-zinc-900 hover:text-white">add to cart</button>

                                            <div class="showcase-status" className="mb-[15px] min-[1200px]:[calc(50%-10px)]">
                                                <div class="wrapper" className="flex justify-between items-center text-zinc-900 text-[0.75rem] font-[400] uppercase mb-[10px] min-[1200px]:[calc(50%-10px)]">
                                                    <p>
                                                        already sold: <b>20</b>
                                                    </p>

                                                    <p>
                                                        available: <b>40</b>
                                                    </p>
                                                </div>

                                                <div class="showcase-status-bar" className="bg-neutral-300 relative h-[10px] rounded-[5px] before:absolute before:content-[''] before:top-[3px] before:left-[4px] before:w-[40%] before:bg-pink-600 rounded-[4px] min-[1200px]:[calc(50%-10px)]"></div>
                                            </div>

                                            <div class="countdown-box min-[1200px]:[calc(50%-10px)]">

                                                <p class="countdown-desc" className="text-zinc-800 text-[0.75rem] font-[600] uppercase mb-[10px]">
                                                    Hurry Up! Offer ends in:
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

                                </div>

                                <div class="showcase-container" className="min-w-[100%] p-[30px] border border-zinc-400 rounded-[10px] snap-start">

                                    <div class="showcase" className="min-[768px]:flex justify-center items-center gap-[20px]">

                                        <div class="showcase-banner" className="min-[1200px]:[calc(50%-10px)]">
                                            <img src="./assets/images/products/jewellery-1.jpg" alt=" Gold diamonds Earring" class="showcase-img" className="w-full h-full object-cover min-[570px]:max-w-[450px] min-[570px]:m-auto min-[768px]:max-w-fit" />
                                        </div>

                                        <div class="showcase-content" className="mt-[30px] min-[768px]:mt-0 min-[768px]:min-w-[calc(100%-345px)] min-[1200px]:[calc(50%-10px)]">

                                            <div class="showcase-rating" className="text-orange-600 flex items-center text-[16px] mb-[15px]">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                            </div>

                                            <h3 class="showcase-title">
                                                <a href="#" class="showcase-title" className="text-[0.875rem] text-stone-900 overflow-hidden whitespace-nowrap text-ellipsis uppercase mb-[3px]">Rose Gold diamonds Earring</a>
                                            </h3>

                                            <p class="showcase-desc" className="text-neutral-500 text-[0.875rem] font-[300] mb-[10px]">
                                                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                dolor dolor sit amet consectetur Lorem ipsum dolor
                                            </p>

                                            <div class="price-box" className="text-[1.25rem] flex gap-[10px] mb-[10px] min-[1200px]:[calc(50%-10px)]">
                                                <p class="price" className="text-pink-600 font-[700]">$1990.00</p>
                                                <del className="text-zinc-600 font-[300]">$2000.00</del>
                                            </div>

                                            <button class="add-cart-btn" className="bg-pink-600 py-[8px] px-[15px] text-white text-[0.75rem] font-[700] uppercase rounded-[10px] mb-[15px] transition duration-500 ease-ease hover:bg-zinc-900 hover:text-white">add to cart</button>

                                            <div class="showcase-status" className="mb-[15px] min-[1200px]:[calc(50%-10px)]">
                                                <div class="wrapper" className="flex justify-between items-center text-zinc-900 text-[0.75rem] font-[400] uppercase mb-[10px] min-[1200px]:[calc(50%-10px)]">
                                                    <p> already sold: <b>15</b> </p>

                                                    <p> available: <b>40</b> </p>
                                                </div>

                                                <div class="showcase-status-bar" className="bg-neutral-300 relative h-[10px] rounded-[5px] before:absolute before:content-[''] before:top-[3px] before:left-[4px] before:w-[40%] before:bg-pink-600 rounded-[4px] min-[1200px]:[calc(50%-10px)]"></div>
                                            </div>

                                            <div class="countdown-box min-[1200px]:[calc(50%-10px)]">

                                                <p class="countdown-desc" className="text-zinc-800 text-[0.75rem] font-[600] uppercase mb-[10px]">Hurry Up! Offer ends in:</p>

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

                                </div>

                            </div>

                        </div>









                        <div class="product-main" className="mb-[30px]">

                            <h2 class="title" className=" text-stone-900 text-[1rem] font-[600] tracking-[0.4px] capitalize pb-[10px] border-b border-slate-300 mb-[30px]">New Products</h2>

                            <div class="product-grid" className=" grid grid-cols-1 gap-[25px] min-[480px]:grid-cols-2 min-[480px]:gap-[30px] min-[1024px]:grid-cols- min-[1200px]:grid-cols-4">


                                <ProductMain
                                    pricefake="$ 26.500" // Pasa el precio como un número en lugar de una cadena
                                    price={26500}
                                    pricetachao={28000}
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="pollo entero acompañado mas papas fritas"
                                    title="pollo entero"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
                                />

                                <ProductMain
                                    pricefake="$16.500"
                                    price={16500}
                                    pricetachao={18000}
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="pollo mas bebida de 1/5L"
                                    title="1/4 de pollo"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
                                />

                                <ProductMain
                                    pricefake="$13.500"
                                    price={13500}
                                    pricetachao={15000}
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="1/2 de pollo"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3]"
                                />
                                
                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="30%"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3]"
                                />

                                <ProductMain
                                    price="$124"
                                    pricetachao="12"
                                    desc="sale"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3] top-[8px] left-[-29px] rotate-[-45deg] uppercase text-[11px] py-[5px] px-[40px]"
                                />
                                
                                <ProductMain
                                    price="124"
                                    pricetachao="12"
                                    desc="sale"
                                    img1="pollo.png"
                                    img2="sushi.png"
                                    description="fghgf"
                                    title="kamisa"
                                    badgeColor="absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[3] top-[8px] left-[-29px] rotate-[-45deg] uppercase text-[11px] py-[5px] px-[40px]"
                                />



                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </main>
    )
}

export default Mains;