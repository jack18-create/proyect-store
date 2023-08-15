


const AnimationProduct = ({ img1, isAnimationOpen }) => {
    const fixedClass = isAnimationOpen ? "fixed" : "";
    return (
        <div>
            {isAnimationOpen && (
                <div className={`showcase bottom-[59px] left-[101px]  z-50  ${fixedClass}`}>
                    
                    <img src={img1}  width={50} height={50} className=" rounded-[10px]"/>
                    
                </div>
            )}
        </div>
    );
};

export default AnimationProduct;
