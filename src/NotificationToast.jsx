import React, { useState } from "react";

import { RiCloseLine } from "react-icons/ri";

function NotificationToast() {
  const [visible, setVisible] = useState(true);

  function handleClose() {
    setVisible(false);
  }

  if (!visible) {
    return null; // Si el componente no es visible, retorna null para no mostrar nada
  }

  return (
    <div className=" fixed bottom-[80px] left-[20px] right-[20px] bg-white max-w-[300px] flex items-start gap-[15px] p-[15px] rounded-[5px] shadow-custom translate-x-custom transition-transform duration-05 z-[20] animate-slideInOut">
      <button
        className="absolute top-[10px] right-[10px] text-yellow-400"
        onClick={handleClose}
      >
        <RiCloseLine />
      </button>
      <div className="w-[70px] h-[70px] border-rose-600 rounded-[5px]">
        <img
          className="w-[100%] h-[100%] object-contain object-center"
          src="https://cdn.mer-cat.com/yapones/400x400/img/products/promocion_40_tempura_1683064342g03XWA.png?pass=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiNDAweDQwMC9pbWcvcHJvZHVjdHMvcHJvbW9jaW9uXzQwX3RlbXB1cmFfMTY4MzA2NDM0MmcwM1hXQS5wbmcifQ.bSntjpbsjoLRlsmOd7sQc8r-3tGuQY0V44_ONiY88RM"
          alt=""
        />
      </div>
      <div className="w-custom pt-[10px]">
        <p className="text-[0.688rem] mb-[8px] text-red-600">Somene in new just bought</p>
        <p className="text-[0.875rem] font-[500] text-blue-600">Rose Gold Earrings</p>
        <p className="text-[0.688rem] text-red-600">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
}

export default NotificationToast;