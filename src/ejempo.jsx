import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5"; // Import the search icon

function Header({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

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

    return (
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
    );
}

export default Header;





function Mains({ products, scrollToRef }) {



    return (
        <div class="product-main" className="mb-[30px]">

            <h2 class="title" className=" text-stone-900 text-[1rem] font-[600] tracking-[0.4px] capitalize pb-[10px] border-b border-slate-300 mb-[30px]">New Products</h2>

            <div class="product-grid" className=" grid grid-cols-2 gap-[25px] min-[480px]:grid-cols-2 min-[480px]:gap-[30px] min-[1024px]:grid-cols- min-[1200px]:grid-cols-4">

                {products.map(product => (
                    <ProductMain
                        key={product.title}
                        pricefake={product.pricefake}
                        price={product.price}
                        pricetachao={product.pricetachao}
                        desc={product.desc}
                        img1={product.img1}
                        img2={product.img2}
                        description={product.description}
                        title={product.title}
                        badgeColor={product.badgeColor}
                    />
                ))}


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

    )
}
Mains.defaultProps = {
    products: []
};
export default Mains;