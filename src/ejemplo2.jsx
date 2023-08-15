import { HiOutlineShoppingCart } from "react-icons/hi2";
import React, { useContext, useState, useEffect } from "react";
import { IoIosRemove } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { RiCloseLine } from "react-icons/ri";
import { CartContext } from "./CartContext";
import LocationAutocomplete from './LocationAutocomplete';
import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react';
import Geocode from "react-geocode";
import { FaMotorcycle, FaShoppingBag } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { FcCalendar, FcClock } from "react-icons/fc";
import { calculateDistance, calculateDeliveryCost } from './deliveryUtils';
import { PiCaretDownBold } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { generateHourOptions } from './HoraChile';
// import OrderSummary from './OrderSumary';


function handleConfirmOrderRetiro() {
    if (selectedDelivery === "Retirar") {
        if (!calendarClicked && !clockClicked) {
            setErrorMessage("Debes seleccionar 'Lo antes posible' o 'Programar'");
        } else if (calendarClicked && selectedOption === "Selecciona el día") {
            setErrorMessage("Debes seleccionar una fecha para programar la entrega");
        } else if (calendarClicked && !selectedHour) {
            setErrorMessage("Debes seleccionar una hora para programar la entrega");
        } else {
            setErrorMessage("");
            setRetiroCompleted(true);
            // Aquí puedes realizar la lógica para confirmar el pedido
            // Si se cumplen todas las validaciones correctamente
            setShowMap(false);
        }
    } else {
        // Aquí puedes realizar la lógica para confirmar el pedido
        // Si el método de entrega es 'Delivery'
        setErrorMessage("");

    }
}


const Card = () => {

    return (
        <div className="mt-[10px]">
            <div className="mb-[10px]">
                <p className="capitalize text-[18px] mt-[10px] mb-[5px]">como quieres tu pedido?</p>
                <div className="flex rounded-full relative overflow-hidden bg-slate-200 text-gray-300">
                    <button
                        className={`md:px-5 ${selectedOptions === 'Delivery' ? 'bg-black text-white' : 'focus:bg-black text-sm'
                            } font-semibold flex flex-1 items-center justify-center px-1 py-3 rounded-full transition ease-in-out duration-150 cursor-pointer ${isFormSubmitted && !selectedDelivery ? 'bg-black text-white' : ''
                            }`}
                        onClick={() => handleSelectedDeliveryChange('Delivery')}
                    >
                        <span className="flex gap-2 items-center whitespace-nowrap ">
                            <span className="text-4xl">
                                <FaTruck className="text-blue-900/80" />
                            </span>
                            <span>Entrega</span>
                        </span>
                    </button>
                    <button
                        className={`md:px-5 ${selectedOptions === 'Retirar' ? 'bg-black text-white' : 'focus:bg-black text-sm'
                            } font-semibold flex flex-1 items-center justify-center px-1 py-3 rounded-full transition ease-in-out duration-150 cursor-pointer ${isFormSubmitted && !selectedDelivery ? 'bg-black text-white' : ''
                            }`}
                        onClick={() => handleSelectedRetiroChange('Retirar')}
                    >
                        <span className="flex gap-2 items-center whitespace-nowrap ">
                            <span className="text-4xl">
                                <FcShop />
                            </span>
                            <span>Retirar</span>
                        </span>
                    </button>
                </div>
                {mostrarMensaje && <p className="text-[12px] mt-1 text-red-600">*Falta  como quieres tu pedido</p>}

            </div>



            <div class={`relative z-[1100] ${selectedOptions === 'Delivery' && showMap ? 'block' : 'hidden'}`}>
                <div class="fixed z-[1100] inset-0 overflow-y-auto dark " >
                    <div class="fixed inset-0 bg-custom h-screen " onClick={() => setShowMap(false)}>
                    </div>
                    <div class="flex sm:items-center justify-center min-h-full text-center p-3 items-end">
                        <div className='fixed rounded-[10px] md:rounded-lg text-left  transform transition-all sm:my-8 w-[95%] text-black sm:max-w-md bg-slate-200  text-white dark:bg-zinc-800 font-sans opacity-100 translate-y-0 sm:scale-100'>

                            <div className="flex justify-end m-[5px]">
                                <button class=" cursor-pointer text-2xl bg-slate-400 rounded-[10px]" onClick={() => setShowMap(false)}>

                                    <RiCloseLine />

                                </button>
                            </div>

                            {selectedDelivery === 'Delivery' && showMap && (
                                <div className="p-4">
                                    <div className="">
                                        <label class=" text-sm text-gray-900 dark:text-white" >
                                            <div class="  flex  items-center justify-start">
                                                <svg className="mr-1 h-4 w-4">
                                                    <ImLocation />
                                                </svg>
                                                <span>Ingresa una nueva dirección</span>
                                            </div>
                                        </label>
                                        <LocationAutocomplete
                                            google={google}
                                            userLocation={userLocation}
                                            setUserLocation={setUserLocation}
                                            handleUseLocation={handleUseLocation}
                                            onLocationChange={handleUserLocationChange}
                                            disabled={isUsingCurrentLocation}
                                            deliveryLatitude={businessLocation.lat} // Se pasa la coordenada de latitud del negocio al componente LocationAutocomplete
                                            deliveryLongitude={businessLocation.lng}


                                        // Se pasa la coordenada de longitud del negocio al componente LocationAutocomplete
                                        />
                                        <div className="relative mt-[6px] mb-[20px] ml-[0px]" data-testid="search-address-results">
                                            <button
                                                type="button"
                                                className="focus:text-blue-500"
                                                onClick={handleUseLocation.bind(this)} // Bind the handleUseLocation function to the correct context
                                            >
                                                <span className="flex justify-center items-center gap-[5px]">
                                                    <span className="text-[20px] text-blue-600">
                                                        <BiCurrentLocation />
                                                    </span>
                                                    <p className="text-[12px] text-blue-600">Usar mi ubicación actual</p>
                                                </span>
                                            </button>

                                            {address && (
                                                <div>
                                                    <input
                                                        type="text"
                                                        class="py-3 px-3 placeholder-gray-400 text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 block w-full flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                        value={address}
                                                        onMarkerDragEnd={handleMarkerDragend}
                                                        readOnly
                                                    ></input>
                                                </div>
                                            )}
                                            {locationError && (
                                                <div>
                                                    <p className="text-center text-red-500">{locationError}</p>
                                                </div>
                                            )}
                                        </div>

                                        {showMap && selectedDelivery === 'Delivery' && userLocation && userLocation.latitude && userLocation.longitude && (

                                            <div className="relative h-[260px] w-[100%] mb-[20px] ">

                                                <div className="">
                                                    <Map
                                                        google={google}
                                                        zoom={14}
                                                        initialCenter={{ lat: userLocation.latitude, lng: userLocation.longitude }}
                                                        center={{ lat: userLocation.latitude, lng: userLocation.longitude }}
                                                    >

                                                        <Marker position={{ lat: markerLocation.lat, lng: markerLocation.lng }} draggable={true} onDragend={handleMarkerDragend} />

                                                        <Circle
                                                            center={{ lat: markerLocation.lat, lng: markerLocation.lng }}
                                                            radius={radius}
                                                            strokeColor="#FF0000"
                                                            strokeOpacity={0.3}
                                                            strokeWeight={0.8}
                                                            fillColor="#FF0000"
                                                            fillOpacity={0.12}
                                                        />
                                                    </Map>
                                                </div>
                                            </div>

                                        )}



                                    </div>
                                    <div className="relative">
                                        <button
                                            className="relative bg-orange-400 w-full rounded-md p-2"
                                            onClick={handleConfirmOrder}
                                        >
                                            <span>
                                                <p className="text-white text-[20px]">confirmar</p>
                                            </span>
                                        </button>
                                        {deliveryError && <p className="text-red-500 mt-2">{deliveryError}</p>}

                                    </div>

                                </div>

                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM',
})(Card);















