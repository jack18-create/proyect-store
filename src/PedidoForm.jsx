import React, { useState } from 'react';
import { RiWhatsappFill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";


const PedidoForm = ({ isPedidoOpen, name, number, total, method, selectedOptions, userLocation, businessLocation, selectedHour, onClose }) => {



  const handlePedidoClosed = () => {
    onClose();
  };



  return (

    <div>
      {isPedidoOpen && (

        <div class="relative z-[1100]"
          onAnimationEnd={() => {
            if (!isPedidoOpen) onClose();
          }}
        >
          <div class="fixed z-[1100] inset-0 overflow-y-auto dark " >
            <div class="fixed inset-0 bg-custom h-screen " onClick={handlePedidoClosed}>
            </div>
            <div class="flex  sm:items-center justify-center min-h-full text-center p-0 items-start">
              <div className='relative ml-8 mt-8 rounded-l-[20px] md:rounded-lg text-center  transform transition-all sm:my-8 w-full  sm:max-w-md bg-slate-200  text-white dark:bg-zinc-800 font-sans opacity-100 translate-y-0 sm:scale-100'>

                <div className="flex justify-end m-[5px]">
                  <button class=" cursor-pointer text-2xl bg-slate-400 rounded-[10px]" onClick={() => onClose()}>
                    <RiCloseLine />
                  </button>
                </div>

                <div className='px-4 pb-3'>

                  <h2 className='uppercase'>tu de Pedido</h2>
                  <div>

                    <label>

                      <p></p>
                    </label>
                    <label>
                      Nombre:
                      <p>{name}</p>
                    </label>
                    <p>
                      Numero:
                      <p>{number}</p>
                    </p>
                  </div>
                  <div>
                    <label>
                      Producto
                      <p></p>
                    </label>
                    <label>
                      Cantidad:
                      <p></p>
                    </label>
                    {deliveryOptions === 'Delivery' && userLocation && (
                      <div>
                        <p>Delivery</p>
                        <p>Dirección: {userLocation.address}</p>
                        {/* ... Otros detalles del formulario para Delivery ... */}
                      </div>
                    )}
                    {deliveryOptions === 'Retirar' && userLocation && (
                      <div>
                        <p>Dirección del local: {businessLocation.address}</p>
                        <p>Día seleccionado: {selectedOption}</p>
                        <p>Hora seleccionada: {selectedHour}</p>
                        {/* ... Otros detalles del formulario para Retirar ... */}
                      </div>
                    )}


                    <label>
                      method
                      <p>{method}</p>
                    </label>
                    <label>
                      Total
                      <p>{total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                    </label>

                  </div>
                  <div>

                  </div>
                  <button><RiWhatsappFill /></button>
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

