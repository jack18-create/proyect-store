import { IoBagHandleOutline } from "react-icons/io5";
import { LiaHeart } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { GrHomeRounded } from "react-icons/gr";
import { TfiLayoutGrid2 } from "react-icons/tfi";


function Header() {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const handleCardOpen = () => {
        setIsCardOpen(true);
    };

    const handleCardClose = () => {
        setIsCardOpen(false);
    };

    return (
        <header>
            <div className="bg-white fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full max-w-[500px] m-auto flex justify-around items-center py-[5px] px-[0px] shadow-custom z-[5] min-[480px]:rounded-t-xl min-[1024px]:hidden">

                <button
                    className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]">
                    <LuMenu />
                </button>

                <button className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]" onClick={handleCardOpen}>
                    <IoBagHandleOutline />

                    <span className="inline-block bg-red-500 absolute text-white top-0 right-0 text-[12px] font-[500] leading-[1] py-[2px] px-[4px] rounded-[20px]">0</span>
                </button>

                <button className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]">
                    <GrHomeRounded />
                </button>

                <button className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]">
                    <LiaHeart />

                    <span className="inline-block bg-red-500 absolute text-white top-0 right-0 text-[12px] font-[500] leading-[1] py-[2px] px-[4px] rounded-[20px]">0</span>
                </button>

                <button
                    className="block bg-transparent font-inherit border-none cursor-pointer relative text-[26px] text-zinc-900 p-[10px]">
                    <TfiLayoutGrid2 />
                </button>

            </div>


            {isCardOpen && (
                <Card
                    isCardOpen={isCardOpen}
                    onClose={handleCardClose}
                />
            )}
        </header>

    )
}

export default Header;