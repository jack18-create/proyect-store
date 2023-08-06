import React, { useState } from "react";
import PedidoForm from "./PedidoForm";
import { RiCloseLine } from "react-icons/ri";

function PedidoListo() {
    const [visible, setVisible] = useState(true);
    const [isPedidoOpen, setIsPedidoOpen] = useState(false);
    
    const handlePedidoOpen = () => {
        setIsPedidoOpen(true);
    };
    const handlePedidoClosed = () => {
        setIsPedidoOpen(false);
    };


    function handlePedidoClose() {
        setVisible(false);
    }

    if (!visible) {
        return null; // Si el componente no es visible, retorna null para no mostrar nada
    }

    return (
        <div>
            <div className=" fixed  h-[10%] top-[30px] left-[98px] right-[0px] bg-white max-w-[300px] flex items-start gap-[15px] p-[15px] rounded-[5px] shadow-custom translate-x-custom transition-transform duration-05 z-[20] animate-slideInFromRight animate-circularShapeAnimation">
                <button
                    className="absolute top-[4px] left-[7px] text-yellow-400"
                    onClick={handlePedidoClose}
                >
                    <RiCloseLine />
                </button>

                <button className="w-[70px] h-[70px] border-rose-600 rounded-[5px]" onClick={handlePedidoOpen}>
                    <img
                        className="w-[100%] h-[100%] object-contain object-center"
                        src="https://cdn.mer-cat.com/yapones/400x400/img/products/promocion_40_tempura_1683064342g03XWA.png?pass=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiNDAweDQwMC9pbWcvcHJvZHVjdHMvcHJvbW9jaW9uXzQwX3RlbXB1cmFfMTY4MzA2NDM0MmcwM1hXQS5wbmcifQ.bSntjpbsjoLRlsmOd7sQc8r-3tGuQY0V44_ONiY88RM"
                        alt=""
                    />
                </button>
                <div className="w-custom pt-[3px]" onClick={handlePedidoOpen}>
                    <p className="text-[0.688rem] mb-[8px] text-red-600">Revisa los detalles de tu pedido</p>
                    <p className="text-[0.875rem] font-[500] text-blue-600">Nombre:</p>
                    <p className="text-[0.688rem] text-red-600">
                        <time dateTime="PT2M">2 Minutes</time> ago
                    </p>
                </div>

            </div>

            
            {isPedidoOpen && (
                <PedidoForm
                    isPedidoOpen={isPedidoOpen}
                    onClose={handlePedidoClosed}
                
                />
            )}
        </div>
    );
}

export default PedidoListo;