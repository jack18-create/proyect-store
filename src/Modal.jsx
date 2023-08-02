import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";

function Modal({ closeModal }) {
  const [email, setEmail] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Realizar acciones con el correo electrónico, como enviarlo a una API
    console.log("Correo electrónico:", email);
    setEmail(""); // Limpiar el campo de correo electrónico
    closeModal(); // Cerrar el modal
  }

  const [isOpen, setIsOpen] = useState(true); // Estado para controlar la visibilidad del div
  const handleClose = () => {
    setIsOpen(false); // Ocultar el div al hacer clic en el botón de cierre

  };
  if (!isOpen) {
    return null; // Devolver null para no renderizar el componente si isOpen es false
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-custom flex justify-center items-center opacity-0 z-10 animate-popup">
      <div className="absolute top-0 h-full left-0 w-full z-1" onClick={handleClose}></div>
      <div className="relative max-w-[350px] m-[20px] bg-white rounded-[5px] overflow-hidden z-[2] animate-scaleUp">
        <button onClick={closeModal} className="absolute top-[15px] right-[15px] bg-rose-500 text-white text-[16px] p-[5px] rounded-[5px] hover:opacity-[0.9]">
          <RiCloseLine />
        </button>
        <div className="hidden md:block" onClick={closeModal}>
          <img src="https://media.revistagq.com/photos/5f7f1e8178c4dd5b8fdf255b/16:9/pass/gucci-reventa-segunda-mano.jpg" alt="subscribe newsletter" width={400} height={400} />
        </div>
        <div className="py-[50px] px-[30px] text-center md:text-left">
          <form onSubmit={handleSubmit}>
            <div className="mb-[20px]">
              <h3 className="text-zinc-400 text-sm font-semibold mb-[10px]">
                Subscribe Newsletter
              </h3>
              <p className="text-sm leading-[1.6]">
                Subscribe to get the latest products and discount updates from Anon
              </p>
            </div>
            <input type="email" placeholder="Email Address" className="font-semibold py-[8px] px-[16px] rounded-[5px] border-2 border-rose-600 mb-[16px]" value={email} onChange={handleEmailChange}
            />
            <button type="submit" className="bg-black text-white text-sm font-semibold uppercase py-[10px] px-[15px] rounded-[5px] mx-auto transition-[0.2s ease] hover:bg-rose-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Modal;