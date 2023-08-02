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





const Card = ({ isCardOpen, onClose, google }) => {





    Geocode.setApiKey("AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM");

    const [showMap, setShowMap] = useState(false);

    const { cartItems, removeFromCart, handleDecrease, handleIncrease } = useContext(CartContext);
    const [selectedDelivery, setSelectedDelivery] = useState('Delivery');
    const [deliveryCost, setDeliveryCost] = useState(0); // Estado para almacenar el costo de entrega
    const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
    const [address, setAddress] = useState('');
    const [showScheduleDiv, setShowScheduleDiv] = useState(false);
    const [clockClicked, setClockClicked] = useState(false);
    const [calendarClicked, setCalendarClicked] = useState(false);
    const [isUsingCurrentLocation, setIsUsingCurrentLocation] = useState(false);

    const [radius, setRadius] = useState(1000); // Initial radius value in meters


    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState("selecciona el dia");
    const [showSecondOptions, setShowSecondOptions] = useState(true); // Nuevo estado para el segundo conjunto de opciones


    const handleConfirmOrder = () => {
        // Aquí puedes llamar a la función que maneja la impresión del pedido y pasarle la ubicación del usuario
        console.log('Ubicación del usuario:', userLocation);
        // Luego puedes hacer lo que necesites con la ubicación, como enviarla al componente OrderSummary
    };


    const [numero, setNumero] = useState('');


    const handleNumeroChange = (event) => {
        let valorIngresado = event.target.value;

        // Eliminar cualquier caracter no numérico
        valorIngresado = valorIngresado.replace(/\D/g, '');

        // Limitar el valor ingresado a solo 9 dígitos numéricos
        valorIngresado = valorIngresado.slice(0, 9);

        // Agregar el prefijo "+56" al valor ingresado
        setNumero(valorIngresado);
    };

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const handleInputBlur = () => {
        setMostrarMensaje(numero.length < 9);
    };


    const [selectedHour, setSelectedHour] = useState('');




    const handleToggleSecondOptions = () => {
        setShowSecondOptions(!showSecondOptions);
    };
    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
        setShowSecondOptions(false);


    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);

    };

    const handleClearInput = () => {
        setSelectedOption("Selecciona el día");
        handleToggleSecondOptions(false);
        setShowOptions(false); // Cerrar las opciones al hacer clic en el icono de cerrar

    };

    const hourOptions = generateHourOptions();
    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const handleClearClick = () => {
        setSelectedHour('');
    };

    const handleRadioClick = () => {
        setShowDeliveryOptions(true);
    };

    const handleToggleScheduleDiv = () => {
        setShowScheduleDiv(true);
    };





    const handleClockClick = () => {
        setClockClicked(true);
        setCalendarClicked(false);
        setShowScheduleDiv(false);
    };

    const handleCalendarClick = () => {
        setClockClicked(false);
        setCalendarClicked(true);
        handleToggleScheduleDiv();
    };




    const sushiChileLocation = {
        lat: -33.55315558167302,
        lng: -70.58251803640714,
    };



    const [businessLocation, setBusinessLocation] = useState({
        lat: -33.55315558167302,
        lng: -70.58251803640714,
    });
    const acceptableRadius = 5;

    const [userLocation, setUserLocation] = useState(null);

    const [markerLocation, setMarkerLocation] = useState({
        lat: businessLocation.lat,
        lng: businessLocation.lng,
    });






    const handleMarkerDragend = (t, map, coord) => {
        if (coord?.latLng) {
            const { latLng } = coord;
            const lat = latLng.lat();
            const lng = latLng.lng();

            // Call the Geocode service to get the address from the latitude and longitude
            if (google && google.maps && google.maps.Geocoder) {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK && results[0]) {
                        const address = results[0].formatted_address;
                        setAddress(address);
                        setUserLocation({
                            latitude: lat,
                            longitude: lng,
                            address: address,
                        });
                    }
                });
            }

            // Update the marker's location state with the new coordinates
            setMarkerLocation({ lat, lng });
        } else {
            console.error("Invalid 'coord' object or missing 'latLng' property.");
        }
    };



    const handleSelectedDeliveryChange = (deliveryOption) => {
        setSelectedDelivery(deliveryOption);
        setShowMap(true);

        if (deliveryOption === 'Delivery') {
            // Restablece la ubicación del usuario si se selecciona la opción "Delivery"
            setUserLocation(null);
        }
    };





    const handleCardClick = () => {
        onClose();
    };


    useEffect(() => {
        if (userLocation && userLocation.latitude && userLocation.longitude) {
            handleUserLocationChange(userLocation.latitude, userLocation.longitude);
        }
    }, [userLocation]);





    const handleRemoveFromCart = (item) => {
        removeFromCart(item); // Llama a la función removeFromCart para eliminar el producto del carrito
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };



    const [locationError, setLocationError] = useState(null);


    const handleUseLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        // Aquí debes asegurarte de proporcionar la API key correcta para Geocode.fromLatLng
                        const response = await Geocode.fromLatLng(
                            latitude,
                            longitude,
                            "AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM" // Asegúrate de tener la API key correcta aquí
                        );
                        const address = response.results[0].formatted_address;
                        setAddress(address);
                        setUserLocation({
                            latitude: latitude,
                            longitude: longitude,
                            address: address,
                        });

                        setShowMap(true); // Muestra el mapa después de obtener la ubicación actual
                        setIsUsingCurrentLocation(true);
                    } catch (error) {
                        console.error("Geocoding error:", error);
                        setLocationError(
                            "Error getting your current location. Please check your browser settings and try again."
                        );
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setLocationError(
                        "Error getting your current location. Please check your browser settings and try again."
                    );
                }
            );
        } else {
            setLocationError("Geolocation is not supported in your browser.");
        }
    };




    const handleUserLocationChange = (lat, lon) => {
        // Calculate the distance and delivery cost based on the selected coordinates
        const distance = calculateDistance(lat, lon, businessLocation.lat, businessLocation.lng); // Use the businessLocation coordinates for reference
        const cost = calculateDeliveryCost(distance);
        setDeliveryCost(cost);


        const distanceToSantiago = calculateDistance(lat, lon, sushiChileLocation.lat, sushiChileLocation.lng);

        // Check if the selected location is within the acceptable radius of Santiago de Chile
        if (distanceToSantiago <= acceptableRadius) {
            // If the location is within the acceptable radius, update the state with the new user location

            setLocationError(""); // Clear any previous location error
        } else {
            // If the location is outside the acceptable radius, show "Ubicación no disponible"
            setLocationError("lo sentimos mucho su Ubicacion esta fuera de nuestro servicio de Delivery.");
            setDeliveryCost(0);
            setUserLocation(null); // Clear the userLocation state
        }
    };


    const fixedClass = isCardOpen ? "fixed" : "";




    return (
        <div className="mt-[10px]">
            <div className="mb-[10px]">
                <p className="capitalize text-[18px] mt-[10px] mb-[5px]">como quieres tu pedido?</p>
                <div className="flex rounded-full relative overflow-hidden bg-slate-200 text-gray-300">
                    {['Delivery', 'Retirar'].map((method, index) => (
                        <button
                            key={method}
                            className={`md:px-5 ${index === 0 && selectedDelivery === 'Delivery'
                                ? 'focus:bg-black text-white'
                                : 'focus:bg-black'
                                } text-sm font-semibold flex flex-1 items-center justify-center px-1 py-3 rounded-full transition ease-in-out duration-150 cursor-pointer ${isConfirmed && index === 0 ? 'bg-black text-white' : ''}`}
                            onClick={() => handleSelectedDeliveryChange(method)}
                        >
                            <span className="flex gap-2 items-center whitespace-nowrap ">
                                <span className={`text-${index === 0 ? 25 : 21}px`}>
                                    {index === 0 ? <FaMotorcycle /> : <FaShoppingBag />}
                                </span>
                                <span>{method}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {isConfirmed ? null : (

                <div class={`relative z-[1100] ${selectedDelivery === 'Delivery' && showMap ? 'block' : 'hidden'}`}>
                </div>
                
            )}

            <div
                className={`fixed z-[1100] ${selectedDelivery === "Retirar" && showMap ? "block" : "hidden"
                    } ${retiroCompleted ? "bg-black" : ""}`}
            >
                <div class="fixed  inset-0 overflow-y-auto dark " >
                    <div class="flex sm:items-center justify-center min-h-full text-center p-3 items-end">

                        <div class="absolute inset-0  bg-custom h-screen " onClick={() => setShowMap(false)}>
                        </div>
                        <div className={`fixed rounded-[10px]  md:rounded-lg text-left shadow-xl transform transition-all sm:my-8 w-[95%]  sm:max-w-md bg-gradient-to-t from-slate-950 to-slate-100 text-white dark:bg-zinc-800 font-sans opacity-100 translate-y-0 sm:scale-100${selectedDelivery === 'Retirar' && showMap ? 'block' : 'hidden'}`}>
                            <div className="flex justify-end m-[5px]">

                                <button class=" cursor-pointer text-2xl bg-slate-400 rounded-[10px]" onClick={() => setShowMap(false)}>

                                    <RiCloseLine />

                                </button>
                            </div>

                            {selectedDelivery === 'Retirar' && showMap && (
                                <div>



                                    <div class="px-4 py-0 mb-[10px] rounded-[10px]  bg-slate-200 dark:bg-zinc-800">

                                        <div>
                                            <form>
                                                <div class="max-h-[380px] overflow-auto">
                                                    <div class="flex flex-col">
                                                        <div class="text-sm font-medium py-1 mt-1 ">
                                                        </div>
                                                        <div class="border rounded-md mb-3 border-gray-700">
                                                            <div class="flex items-center justify-center px-3 py-4 cursor-pointer transition ease-in-out duration-150 " onClick={handleRadioClick}>
                                                                <div class="p-2 flex flex-col items-center">
                                                                    <input type="radio" value="Retirar" />
                                                                </div>
                                                                <div class="flex-1 text-sm text-gray-400">
                                                                    <p class="text-gray-900 dark:text-white text-md font-semibold">
                                                                        La Florida
                                                                        <span class="text-gray-600 dark:text-gray-300 ml-2 font-normal">
                                                                            Avenida san jose de la estrella 375
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {showDeliveryOptions && (
                                        <div>
                                            <div className={`relative h-[270px] w-[100%] mb-[20px]   ${showMap ? '' : 'hidden'}`}>
                                                <div >
                                                    <Map
                                                        google={google}
                                                        initialCenter={{
                                                            lat: businessLocation.lat,
                                                            lng: businessLocation.lng,
                                                        }}
                                                        center={{
                                                            lat: businessLocation.lat,
                                                            lng: businessLocation.lng,
                                                        }}
                                                        zoom={14}
                                                        style={{ width: "94%", height: "250px", margin: "10px" }}
                                                    >
                                                        <Marker
                                                            position={{
                                                                lat: businessLocation.lat,
                                                                lng: businessLocation.lng,
                                                            }}
                                                            name="Mi Negocio"
                                                        />
                                                    </Map>
                                                </div>
                                            </div>
                                            <div class="px-4 py-[8px] rounded-[10px] mb-2 bg-slate-200 dark:bg-zinc-800 ">
                                                <h2 class="mb-2 text-[14px] text-black uppercase">
                                                    ¿Cuándo lo quieres?
                                                </h2>
                                                <form>
                                                    <div className="pb-2 ">
                                                        <div className="flex rounded-full relative overflow-hidden bg-slate-200 shadow-[0_1px_2px_1px_rgba(0,0,0,3.2)] text-gray-300">
                                                            <div
                                                                className={`absolute h-full button-v3-primary rounded-full transition ease-out duration-150 translate-x-[100%] w-[50%] z-[0] ${calendarClicked ? "bg-black" : ""
                                                                    }`}
                                                            ></div>
                                                            <div
                                                                className={`text-sm font-semibold flex flex-1 items-center justify-center px-1 py-3 rounded-full transition ease-in-out duration-150 cursor-pointer gap-1 z-[1] ${clockClicked ? "bg-black" : ""
                                                                    }`}
                                                                onClick={handleClockClick}
                                                            >
                                                                <FcClock className="text-[30px]" />
                                                                <p className={clockClicked ? "text-white" : "text-black"}>
                                                                    Lo antes posible
                                                                </p>
                                                            </div>
                                                            <div
                                                                className={`text-sm font-semibold flex flex-1 items-center justify-center px-1 py-3 rounded-full transition ease-in-out duration-150 text-white bg-opacity-0 cursor-not-allowed gap-1 z-[1] ${calendarClicked ? "bg-black" : ""
                                                                    }`}
                                                                onClick={handleCalendarClick}
                                                            >
                                                                <FcCalendar className="text-[30px]" />
                                                                <p className={calendarClicked ? "text-white" : "text-black"}>
                                                                    Programar
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {showScheduleDiv && (
                                                        <div>
                                                            <div className="">
                                                                <div className="mt-0 mb-5 first:mt-0">
                                                                </div>
                                                                <div className="">
                                                                    <div className="flex relative ">
                                                                        <div className="relative w-full mb-[10px] " onClick={handleToggleOptions}>
                                                                            <div
                                                                                className="absolute text-green-400 left-[10px] top-[10px] cursor-pointer"
                                                                            >
                                                                                {(selectedOption === "Selecciona el día" ? "Selecciona el día" : selectedOption)}
                                                                            </div>
                                                                            <div>
                                                                                <input

                                                                                    value={selectedOption === "Selecciona el día" ? "" : selectedOption}
                                                                                    className="text-inherit rounded-[5px] h-[50px] opacity-[1] bg-opacity-0 bg-center w-full "
                                                                                    style={{
                                                                                        gridArea: "1 / 2 / auto / auto",
                                                                                        font: "inherit",
                                                                                        minWidth: "2px",
                                                                                        border: "0px",
                                                                                        margin: "0px",
                                                                                        outline: "0px",
                                                                                        padding: "0px",
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="flex absolute text-pink-500 right-[10px] top-[16px] cursor-pointer"

                                                                        >
                                                                            {selectedOption !== 'Selecciona el día' && (
                                                                                <div aria-hidden="true" onClick={handleClearInput}>
                                                                                    <RiCloseLine />
                                                                                </div>
                                                                            )}
                                                                            <span top>
                                                                                <RxDividerVertical />
                                                                            </span>
                                                                            <div aria-hidden="true" onClick={handleToggleOptions}>
                                                                                <PiCaretDownBold />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {showOptions && (
                                                                        <div className="options-container">
                                                                            <div
                                                                                className="option"
                                                                                onClick={() => handleOptionClick("Hoy")}
                                                                            >
                                                                                Hoy
                                                                            </div>
                                                                            <div
                                                                                className="option"
                                                                                onClick={() => handleOptionClick("Mañana")}
                                                                            >
                                                                                Mañana
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <input name="days" type="hidden" value="0" />
                                                            </div>
                                                            {!showSecondOptions && (
                                                                <div className="mb-[9px]">
                                                                    <div class="mt-5 mb-5 first:mt-0">
                                                                    </div>
                                                                    <div className="">

                                                                        <div className="flex relative ">
                                                                            <div className="relative w-full ">

                                                                                <div>

                                                                                    <input
                                                                                        list="hours"


                                                                                        placeholder="selecciona la hora"
                                                                                        value={selectedHour}
                                                                                        onChange={handleHourChange}
                                                                                        className="text-black rounded-[5px] h-[50px] opacity-[1] bg-opacity-0 bg-center w-full pl-5"

                                                                                    />

                                                                                    <datalist id="hours" >
                                                                                        {hourOptions.map((hour, index) => (
                                                                                            <option key={index} value={hour} >
                                                                                                {hour}
                                                                                            </option>

                                                                                        ))}
                                                                                    </datalist>
                                                                                </div>
                                                                            </div>

                                                                            <div className="flex absolute text-pink-500 right-[10px] top-[16px]">
                                                                                {selectedHour && (
                                                                                    <div aria-hidden="true" onClick={handleClearClick}>
                                                                                        <RiCloseLine />
                                                                                    </div>
                                                                                )}
                                                                                <span top>
                                                                                    <RxDividerVertical />
                                                                                </span>
                                                                                <div aria-hidden="true" >
                                                                                    <PiCaretDownBold />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <input name="days" type="hidden" value="0" />
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </form>

                                            </div>

                                        </div>

                                    )}




                                    <button
                                        className={`relative bg-orange-400 w-full rounded-md p-2 transition duration-150 ease-in-out ${selectedDelivery === "Retirar" && retiroCompleted ? "bg-black text-white" : ""
                                            }`}
                                        onClick={handleConfirmOrderRetiro}
                                    >
                                        <span>
                                            <p className="text-white text-[20px]">confirmar</p>
                                        </span>
                                    </button>
                                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

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















