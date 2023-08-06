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
import { FaMotorcycle, FaMoneyBillAlt } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsFillCreditCardFill, BsPhoneFlip } from "react-icons/bs";
import { FcCalendar, FcClock, FcShop } from "react-icons/fc";
import { calculateDistance, calculateDeliveryCost } from './deliveryUtils';
import { PiCaretDownBold } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { generateHourOptions } from './HoraChile';
import PedidoForm from './PedidoForm';





const Card = ({ isCardOpen, onClose, google }) => {





    Geocode.setApiKey("AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM");

    const [showMap, setShowMap] = useState(false);
    const [PedidoFormProps, setPedidoFromProps] = useState(null);
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
    const [isLocationInputCompleted, setIsLocationInputCompleted] = useState(false);

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isConfirmedRetiro, setIsConfirmedRetiro] = useState(false);
    const [deliveryError, setDeliveryError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [retiroCompleted, setRetiroCompleted] = useState(false);
    const [isFieldsComplete, setIsFieldsComplete] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [numero, setNumero] = useState('');
    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [isRetiroConfirmed, setIsRetiroConfirmed] = useState(false);
    const [selectedRetiro, setSelectedRetiro] = useState(false);
    const [showDiv, setShowDiv] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(null);





    const handleNameChange = (event) => {
        setName(event.target.value);
        setIsFieldsComplete(event.target.value !== '' && numero !== '');
    };


    const handleNumeroChange = (event) => {
        let valorIngresado = event.target.value;
        valorIngresado = valorIngresado.replace(/\D/g, '');
        valorIngresado = valorIngresado.slice(0, 9);
        setNumero(valorIngresado);
        setIsFieldsComplete(valorIngresado.length === 10);
    };



    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
        // Actualizamos el estado de isFieldsComplete con la nueva condición
    };

    const handleSelectedDeliveryChange = () => {
        setSelectedDelivery('Delivery');
        setShowMap(true);
        setMostrarMensaje(false);
        setUserLocation(null);
        setSelectedOptions('Delivery'); // Actualizar selectedOption con "Delivery" al hacer clic en el botón "Delivery"
    };

    const handleSelectedRetiroChange = () => {
        setSelectedDelivery('Retirar');
        setShowMap(true);
        setMostrarMensaje(false); // Restablecer mostrarMensaje a false
        setUserLocation(null);
        setSelectedOptions('Retirar'); // Actualizar selectedOption con "Retirar" al hacer clic en el botón "Retirar"
    };


    const handleCardCloseClick = () => {
        if (name !== '' && numero !== '' && selectedPaymentMethod !== '' && (selectedDelivery === 'Delivery' || selectedDelivery === 'Retirar')) {
            setShowDiv(true); // Show the PedidoForm using setShowDiv
        } else {
            setIsFormSubmitted(true);
            setMostrarMensaje(numero.length < 9);
        }
    };




    const handleConfirmOrderRetiro = () => {
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
                setIsRetiroConfirmed(true); // Marcar el retiro como confirmado
                setShowMap(false);
                setIsFieldsComplete(true);
            }
        } else {
            setErrorMessage("");
        }
    };

    const handleConfirmOrder = () => {
        if (!isLocationInputCompleted) {
            setDeliveryError("Por favor, agrega tu ubicación antes de confirmar el pedido.");
            return; // Prevent confirming the order
        }

        // Resto del código para confirmar el pedido (opcional)
        // ...

        setDeliveryError(""); // Limpia el mensaje de error si todo está correcto
        setIsConfirmed(true); // Marcar como confirmado
        setSelectedDelivery('Delivery'); // Actualizar el estado de selectedDelivery a 'Delivery'
        setShowMap(false); // Cerrar el contenido
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












    const handleCardClick = () => {
        onClose();
    };


    useEffect(() => {
        if (userLocation && userLocation.latitude && userLocation.longitude) {
            handleUserLocationChange(userLocation.latitude, userLocation.longitude);
            setIsLocationInputCompleted(true);
        }
    }, [userLocation]);





    const handleRemoveFromCart = (item) => {
        removeFromCart(item); // Llama a la función removeFromCart para eliminar el producto del carrito
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalOrderCost = calculateTotalPrice() + deliveryCost;



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
                        setIsLocationInputCompleted(true);

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
            setIsLocationInputCompleted(true);
        } else {
            // If the location is outside the acceptable radius, show "Ubicación no disponible"
            setLocationError("lo sentimos mucho su Ubicacion esta fuera de nuestro servicio de Delivery.");
            setDeliveryCost(0);
            setUserLocation(null); // Clear the userLocation state
        }
    };













    const fixedClass = isCardOpen ? "fixed" : "";

    return (
        <div>
            {isCardOpen && (
                <div
                    className={`showcase top-0 right-0 w-full h-screen bg-y2k justify-center items-center z-50 ${fixedClass} animate-slideInFromRight`}
                    onAnimationEnd={() => {
                        if (!isCardOpen) onClose();
                    }}
                >
                    <div className="absolute top-0 h-full left-0 w-full z-1" onClick={handleCardClick}></div>
                    <div className="relative  m-[10px] mt-[18px] rounded-[10px] overflow-hidden z-[2]   min-[570px]:m-[35px] min-[570px]:my-[27px] min-[625px]:m-[70px] min-[625px]:my-[35px]">
                        <button className="absolute top-[0px] right-[0px] bg-zinc-50 text-zinc-500 text-[32px] p-[5px] rounded-[50%] hover:opacity-[0.9] z-[2]" onClick={() => onClose()}>
                            <RiCloseLine />
                        </button>

                        <div className="p-[20px] bg-white rounded-[10px] pb-[62px] overflow-y-auto max-h-[730px]">
                            <h2 className="mb-[5px] uppercase ml-[4px]">Productos en el carrito</h2>
                            {cartItems.length === 0 ? (

                                <div className="bg-white rounded-[10px] min-[768px]:text-left">
                                    <h1 className="my-[30px] uppercase ml-[4px] text-red-600">¡Carrito vacío!</h1>

                                </div>
                            ) : (


                                <div className=" overflow-y-auto max-h-[217px] snap-y mb-2">
                                    {cartItems.slice(0, 1000).map((item, index) => (
                                        <div key={index} className="my-2 relative flex items-center snap-center justify-end bg-slate-200 h-[90px] w-full rounded-[10px] mb-[15px] gap-3 pr-[15px]">
                                            <img className="rounded-[10px] absolute left-1" src={item.img1} alt="qew" width={80} height={80} />
                                            <div className="absolute left-[90px] top-[5px]">
                                                <p className="uppercase">{item.title}</p>
                                                <p className="bg-gray-200 border text-emerald-500 w-[70%] border-gray-300 rounded-[10px] mt-[30px]">
                                                    {(item.price * item.quantity).toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
                                                </p>

                                            </div>



                                            <div className="relative flex gap-4 rounded-[10px] bg-suave p-[8px]">
                                                <button className="text-amber-500 left-9 font-[1100] border border-black" onClick={() => handleDecrease(item)}>
                                                    <IoIosRemove />
                                                </button>
                                                <p className="font-semibold">{item.quantity}</p>
                                                <button
                                                    className="text-orange-500 font-extrabold"
                                                    onClick={() => handleIncrease(item)} // Asegúrate de que esté siendo utilizada como función aquí
                                                >
                                                    <IoAddSharp />
                                                </button>
                                            </div>
                                            <GoTrash
                                                className="text-zinc-900 shadow-md  text-[20px] font-bold cursor-pointer"
                                                onClick={() => handleRemoveFromCart(item)} // Llama a la función handleRemoveFromCart para eliminar el producto
                                            />


                                        </div>
                                    ))}
                                </div>




                            )}
                            <div className="border-y border-y-orange-400">
                                <p className="capitalize text-[18px] mt-[px]">payment method</p>
                                <div className="grid grid-cols-none mb-[10px] gap-2">
                                    <div className="bg-slate-200 rounded-[10px]">
                                        <button
                                            class="bg-slate-200" className={`min-w-full  flex items-center gap-[10px] p-[8px]  rounded-[10px] min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)] ${selectedPaymentMethod === 'efectivo' ? 'bg-green-400' : ''
                                                }`}
                                            onClick={() => handlePaymentMethodSelect('efectivo')}
                                        >
                                            <div className={`bg-slate-300 border border-y-zinc-400/30 rounded-[8px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px] ${selectedPaymentMethod === 'efectivo' ? 'bg-green-400' : ''
                                                }`}>
                                                <FaMoneyBillAlt className={`text-4xl ${selectedPaymentMethod === 'efectivo' ? 'text-green-500' : ''}`} alt="dsf" />
                                            </div>
                                            <div className="text-left normal-case">
                                                <p className="uppercase">efectivo</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="bg-slate-200 rounded-[10px]">
                                        <button
                                            className={`min-w-full  flex items-center gap-[10px] p-[8px] border border-x-zinc-700  rounded-[10px] snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)] ${selectedPaymentMethod === 'debito' ? 'bg-green-400' : ''
                                                }`}
                                            onClick={() => handlePaymentMethodSelect('debito')}
                                        >
                                            <div className={`bg-slate-300 border border-y-zinc-400/30 rounded-[8px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px] ${selectedPaymentMethod === 'debito' ? 'after:bg-green-400' : ''
                                                }`}>
                                                <BsFillCreditCardFill className={`text-4xl ${selectedPaymentMethod === 'debito' ? 'text-blue-700' : ''}`} alt="dsf" />
                                            </div>
                                            <div className="text-left normal-case">
                                                <p className="uppercase">debito</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="bg-slate-200 rounded-[10px] col-span-2">
                                        <button
                                            className={`min-w-full   flex items-center gap-[10px] p-[8px] rounded-[10px] border border-x-zinc-700   snap-start min-[570px]:min-w-[calc(50%-15px)] min-[1024px]:min-w-[calc(33.33%-20px)] min-[1200px]:min-w-[calc(25%-22.5px)] ${selectedPaymentMethod === 'transbank' ? 'bg-green-400' : ''
                                                }`}
                                            onClick={() => handlePaymentMethodSelect('transbank')}
                                        >
                                            <div className={`bg-slate-300 border border-y-zinc-400/30 rounded-[8px] p-[10px] min-[768px]:p-[20px] min-[1024px]:p-[10px] ${selectedPaymentMethod === 'transbank' ? 'after:bg-green-400' : ''
                                                }`}>
                                                <BsPhoneFlip className={`text-4xl ${selectedPaymentMethod === 'transbank' ? 'text-sky-900' : ''}`} />
                                            </div>
                                            <div className="text-left normal-case">
                                                <p className="uppercase">transbank</p>
                                            </div>
                                        </button>

                                    </div>
                                </div>
                                {isFormSubmitted && selectedPaymentMethod === '' && (
                                    <p className="text-[12px] mt-1 text-red-600">*Elige tu método de pago</p>
                                )}
                            </div>
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
                                                    <FaMotorcycle className="text-blue-900/80" />
                                                </span>
                                                <span>Delivery</span>
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





                                <div class={`fixed z-[1100] ${selectedOptions === 'Retirar' && showMap ? 'block' : 'hidden'}`}>
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
                                                                                        <div class="description">
                                                                                        </div>
                                                                                        <div class="os-input-error">
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
                                                            className="relative bg-orange-400 w-full rounded-md p-2 transition duration-150 ease-in-out"
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

                            <div className="flex flex-row gap-[24px]  mt-4">

                                <div className="basis-[50%]">
                                    <p className="capitalize"> nombre:</p>
                                    <input
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        className={`w-full text-sm p-1 rounded-[6px] border ${isFormSubmitted && name === '' ? 'border-red-600' : 'border-slate-900'
                                            } focus:outline-none focus:ring ${isFormSubmitted && name === '' ? 'ring-red-600' : 'ring-blue-500'
                                            }`}
                                        placeholder="ingresa tu nombre"
                                    />
                                    {isFormSubmitted && name === '' && <p className="text-[12px] mt-1 text-red-600">*Campo requerido</p>}
                                </div>
                                <div className="basis-[45%]">
                                    <p className="capitalize">numero:</p>
                                    <div className="relative">
                                        <img className="absolute left-1" src="./chile.png" alt="" width={30} height={30} />
                                        <p className="absolute top-[4.5px] left-9 text-[15px] capitalize">+56</p>
                                        <input
                                            type="tel"
                                            value={numero}
                                            onChange={handleNumeroChange}

                                            className={`w-full text-[15px] pt-[3.50px] pr-[2.4px] pb-[2.4px] 9 text-zinc-950 rounded-[6px] pl-[65px] border ${isFormSubmitted && numero.length < 9 ? 'border-red-600' : 'border-slate-900'
                                                } focus:outline-none focus:ring ${isFormSubmitted && numero.length < 9 ? 'ring-red-600' : 'ring-blue-500'
                                                }`}
                                        />
                                        {mostrarMensaje && <p className="text-[12px] mt-1 text-red-600">*Falta {9 - numero.length} dígitos</p>}
                                        {isFormSubmitted && numero === '' && <p className="text-[12px] mt-1 text-red-600">*Campo requerido</p>}

                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px] mb-[12px] border-y-[1px] border-neutral-300  pt-3">
                                <span className="uppercase flex justify-between mb-[5px]">
                                    <p>Item total</p>
                                    <p>{calculateTotalPrice().toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                                </span>
                                <span className="uppercase flex justify-between pb-3">
                                    <p>Delivery</p>
                                    <p>{deliveryCost.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} </p>
                                </span>
                            </div>
                            <div className="border-b-[1px] mb-3  border-neutral-300">
                                <span className="uppercase flex justify-between pb-3">
                                    <p>Total</p>
                                    <p>{totalOrderCost.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                                </span>
                            </div>





                            <div className="absolute bottom-[0px] left-0 right-0 py-[10px] px-[px] mx-[9px] my-[0px] bg-white rounded-[10px]">
                                <button
                                    type="submit"
                                    className="bg-orange-400 w-full h-[50px] justify-center items-center rounded-[10px] transition duration-150 ease-in-out"
                                    onClick={handleCardCloseClick}
                                    disabled={isFieldsComplete}
                                >
                                    <div className="flex justify-around">
                                        <HiOutlineShoppingCart className="text-white font-bold text-[20px]" />
                                        <span className="ml-[-70px] text-white">Ir a pagar</span>
                                        <span className="font-size-15 body-font text-uppercase text-white bold">
                                            {totalOrderCost.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            )}


            {showDiv && (
                <PedidoForm
                    name={name}
                    number={numero}
                    total={totalOrderCost}
                    method={selectedPaymentMethod}
                    deliveryOptions={selectedOptions}
                    userLocation={userLocation}
                    selectedHour={selectedHour}
                    businessLocation={businessLocation}
                    isPedidoOpen={true}
                    onClose={() => setShowDiv(false)}
                />
            )}
        </div >
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM',
})(Card);





