import { calculateDistance, calculateDeliveryCost } from './deliveryUtils';

const userLatitude = 37.7749; // Latitud de la ubicación del usuario
const userLongitude = -122.4194; // Longitud de la ubicación del usuario

const deliveryLatitude = 40.7128; // Latitud de la ubicación de entrega del producto
const deliveryLongitude = -74.0060; // Longitud de la ubicación de entrega del producto

const distance = calculateDistance(
    userLatitude,
    userLongitude,
    deliveryLatitude,
    deliveryLongitude
);

const deliveryCost = calculateDeliveryCost(distance);
console.log('Distancia en kilómetros:', distance);
console.log('Costo de entrega:', deliveryCost);