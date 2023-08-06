import React, { useState } from 'react';
import { RiWhatsappFill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";


const PedidoForm = ({ isPedidoOpen, name, number, total, method, deliveryOptions, userLocation, businessLocation, selectedHour, selectedOption, onClose }) => {
  const handlePedidoClosed = () => {
    onClose();
  };

  return (
    <div>
      {isPedidoOpen && (
        <div class="relative z-[1100]" onAnimationEnd={() => { if (!isPedidoOpen) onClose(); }}>
          <div class="fixed z-[1100] inset-0 overflow-y-auto dark " >
            <div class="fixed inset-0 bg-custom h-screen " onClick={handlePedidoClosed} />
            <div class="flex  sm:items-center justify-center min-h-full text-center p-0 items-start">
              <div
                className='relative p-4 ml-8 mt-8 rounded-l-[20px] md:rounded-lg text-center transform transition-all sm:my-8 w-full sm:max-w-md bg-white text-white dark:bg-zinc-800 font-sans opacity-100 translate-y-0 sm:scale-100 bg-repeat'
                style={{ backgroundImage: "url(./cuadrados.jpg)" }}
              >
                <div className="flex justify-end m-[0px]">
                  <button class=" cursor-pointer text-2xl bg-slate-400 rounded-[10px]" onClick={() => onClose()}>
                    <RiCloseLine />
                  </button>
                </div>

                <h2 className='uppercase'>tu de Pedido</h2>
                <div className='flex gap-4 mb-6 justify-center items-center'>
                  <span className=' p-[8px] rounded-[10px] bg-slate-200'>
                    <p className='border-b border-neutral-400 font-[700] text-black '>Nombre:</p>
                    <p className='text-black font-mono'>{name}</p>
                  </span>
                  <span className='border p-[8px] rounded-[10px] bg-slate-200'>
                    <p className='border-b border-neutral-400 font-[700] text-black'>Numero:</p>
                    <p className='text-black font-mono'>{number}</p>
                  </span>
                </div>
                <div className='gap-4  grid items-start '>
                  <span className='p-[8px] bg-slate-200 rounded-[10px]'>
                    <p className='border-b border-neutral-400 font-[700] text-black'>Método de Pago:</p>
                    <p className='text-black font-mono'>{method}</p>
                  </span>
                  <span className='p-[8px] bg-slate-200 rounded-[10px]'>
                    <p className='border-b border-neutral-400 text-black font-[700]'>Total:</p>
                    <p className='text-black font-mono'>{total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                  </span>
                </div>
                {deliveryOptions === 'Delivery' && userLocation && (
                  <div className='rounded-[10px] bg-slate-200 p-[8px]  mt-6'>
                    <p className='border-b border-neutral-400 text-black  font-[700]' >Delivery</p>
                    <p className='text-black font-mono '>Dirección: {userLocation.address}</p>
                    {/* ... Otros detalles del formulario para Delivery ... */}
                  </div>
                )}
                {deliveryOptions === 'Retirar' && selectedOption && selectedHour && (
                  <div>
                    <p>Dirección del local: {businessLocation.address}</p>
                    <p>Día seleccionado: {selectedOption}</p>
                    <p>Hora seleccionada: {selectedHour}</p>
                    {/* ... Otros detalles del formulario para Retirar ... */}
                  </div>
                )}
                <div>
                  <button>
                    <RiWhatsappFill />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PedidoForm;


