import React, { useState } from "react";
import Modal from "./Modal";
import NotificationToast from "./NotificationToast";
import Header from "./Header";
import Mains from "./Mains";
import DetailsProduct from "./DetailsProduct";
import Card from "./card";
import PedidoListo from "./PedidoListo";
import PedidoForm from "./PedidoForm";
import { CartProvider } from "./CartContext"; // Importar el proveedor del contexto

function App() {
  const [showModal, setShowModal] = useState(true);
  const [userLocation, setUserLocation] = useState(null); // Add userLocation state here

  function handleHideModal() {
    setShowModal(false);
  }

  return (
    <CartProvider> {/* Envuelve los componentes con el proveedor del contexto */}
      <Header />
      {showModal && <Modal closeModal={handleHideModal} />}
      <PedidoListo />
      <PedidoForm />
      <NotificationToast />
      <Mains />
      <Card userLocation={userLocation} setUserLocation={setUserLocation} /> {/* Pass userLocation and setUserLocation as props */}
      <DetailsProduct />
      
    </CartProvider>
  );
}

export default App;