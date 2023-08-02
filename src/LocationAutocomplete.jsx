import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';



const LocationAutocomplete = ({ google, userLocation, setUserLocation, onLocationChange }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [addressCompleted, setAddressCompleted] = useState(false);

    const handlePlaceSelect = (placeId) => {
        if (google && google.maps && google.maps.places) {
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            service.getDetails({ placeId }, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry && place.geometry.location) {
                    setUserLocation({
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        address: place.formatted_address,
                    });
                    setInputValue(place.formatted_address);
                    setAddressCompleted(true);

                    // Llama a la función onLocationChange para pasar la información de la ubicación al componente padre
                    onLocationChange({
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        address: place.formatted_address,
                    });
                }
                setSuggestions([]); // Clear the suggestions list
            });
        }

    };



    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        if (inputValue && google && google.maps && google.maps.places) {
            const service = new google.maps.places.AutocompleteService();
            service.getPlacePredictions({ input: inputValue }, (predictions, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setSuggestions(predictions);
                } else {
                    setAddressCompleted(false);
                    setSuggestions([]);
                }
            });
        } else {
            setSuggestions([]);
        }
    };






    useEffect(() => {
        if (userLocation && userLocation.latitude && userLocation.longitude) {
            // Llama a la función onLocationChange cuando la ubicación del usuario cambie
            onLocationChange(userLocation.latitude, userLocation.longitude);
        }
    }, [userLocation, onLocationChange]);

    return (
        <div>
            <input
                className='mt-1 block w-[100%] ml-[0px] text-black  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                type="text"
                placeholder="Ej: calle 9999"
                value={inputValue} // Bind the input value to the state variable
                onChange={handleInputChange}

            />
            {suggestions.length > 0 && ( // <--- Condición para mostrar las sugerencias solo cuando haya elementos en el array
                <ul >
                    {suggestions.map((suggestion) => (
                        <li className='cursor-pointer text-black' key={suggestion.place_id} onClick={() => handlePlaceSelect(suggestion.place_id)}>
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
            {addressCompleted && userLocation && userLocation.address && (
                <p className="mt-0">
                    {userLocation.address}
                </p>
            )}

        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM',
})(LocationAutocomplete);