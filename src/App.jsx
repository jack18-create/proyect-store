import React, { useState, useRef } from "react";
import Modal from "./Modal";
import NotificationToast from "./NotificationToast";
import Header from "./Header";
import Mains from "./Mains";
import DetailsProduct from "./DetailsProduct";
import Card from "./card";
import PedidoListo from "./PedidoListo";
import PedidoForm from "./PedidoForm";


import { CartProvider } from "./CartContext"; // Import the context provider
import AnimationProduct from "./AnimationProduct";

const productsData = [
  {
    pricefake: "$16.500",
    price: 16500,
    pricetachao: 18000,
    desc: "30%",
    img1: "pollo.png",
    img2: "sushi.png",
    description: "pollo mas bebida de 1/5L",
    title: "1/4 de pollo - 1",
    badgeColor: "absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
  },
  {
    pricefake: "$13.500",
    price: 13500,
    pricetachao: 15000,
    desc: "30%",
    img1: "Cards.png",
    img2: "Casco-Moto.jpg",
    description: "pollo mas ",
    title: "papas fritas",
    badgeColor: "absolute top-[15px] left-[15px] bg-emerald-600 text-[0.813rem] font-[500] text-white py-[0] px-[8px] rounded-[5px] z-[1]"
  },
];

function App() {
  const [showModal, setShowModal] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleHideModal() {
    setShowModal(false);
  }

  const scrollToRef = useRef(null);

  const handleSearch = (searchValue) => {
    const filteredProductsDict = {};

    productsData.forEach((product) => {
      filteredProductsDict[product.title] = product;
    });

    const filteredProducts = Object.values(filteredProductsDict).filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredProducts(filteredProducts);

    // Scroll to the Mains component when a search is performed
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CartProvider>
      <Header onSearch={handleSearch} />
      {showModal && <Modal closeModal={handleHideModal} />}
      <PedidoListo />
      <PedidoForm />
      <NotificationToast />
      <Mains products={filteredProducts} scrollToRef={scrollToRef} />
      <Card userLocation={userLocation} setUserLocation={setUserLocation} />
      <DetailsProduct />
      <AnimationProduct />
    </CartProvider>
  );
}

export default App;
