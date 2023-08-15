import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { calculateDistance } from './deliveryUtils';



const LocationAutocomplete = ({ google, userLocation, setUserLocation, onLocationChange, businessLocation, acceptableRadius, markerAddress, setMarkerLocation, }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [addressCompleted, setAddressCompleted] = useState(false);

    const handlePlaceSelect = (placeId) => {
        if (google && google.maps && google.maps.places) {
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            service.getDetails({ placeId }, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry && place.geometry.location) {
                    const latitude = place.geometry.location.lat();
                    const longitude = place.geometry.location.lng();

                    // Calculate the distance based on the selected coordinates
                    const distance = calculateDistance(latitude, longitude, businessLocation.lat, businessLocation.lng);

                    // Check if the selected location is within the acceptable radius of Santiago de Chile
                    if (distance <= acceptableRadius) {
                        setUserLocation({
                            latitude: latitude,
                            longitude: longitude,
                            address: place.formatted_address,
                        });
                        setInputValue(place.formatted_address); // Update inputValue with the new address
                        setAddressCompleted(true);

                        // Call the onLocationChange function to pass location information to the parent component
                        onLocationChange({
                            latitude: latitude,
                            longitude: longitude,
                            address: place.formatted_address,
                        });
                    } else {
                        // Location is outside the acceptable radius
                        setLocationError("Lo sentimos mucho, su ubicación está fuera de nuestro servicio de Delivery.");
                    }
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

                    // Update the marker's position based on the first prediction's coordinates
                    if (predictions.length > 0 && predictions[0].place_id) {
                        const predictionPlaceId = predictions[0].place_id;
                        const predictionService = new google.maps.places.PlacesService(document.createElement('div'));
                        predictionService.getDetails({ placeId: predictionPlaceId }, (place, status) => {
                            if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry && place.geometry.location) {
                                const latitude = place.geometry.location.lat();
                                const longitude = place.geometry.location.lng();

                                // Update the marker's position
                                setMarkerLocation({ lat: latitude, lng: longitude });
                            }
                        });
                    }
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
                autoComplete='off'
            />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestion) => (
                        <li
                            className='cursor-pointer text-black'
                            key={suggestion.place_id}
                            onClick={() => handlePlaceSelect(suggestion.place_id)}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
            

        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlM-pqiYVmNq_m6pJDVzY8vV0F_yftFfM',
})(LocationAutocomplete);