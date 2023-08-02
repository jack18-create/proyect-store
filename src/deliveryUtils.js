
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Radio de la Tierra en kilómetros

    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;


    return distance; // Distancia en kilómetros
}

const userLatitude = -33.5517440600021; // Latitud de la ubicación del usuario en Chile
const userLongitude = -70.58131863224365; // Longitud de la ubicación del usuario en Chile

const deliveryLatitude = -33.5529421822221; 
const deliveryLongitude = -70.58267046560526; 

const distance = calculateDistance(
    userLatitude,
    userLongitude,
    deliveryLatitude,
    deliveryLongitude
);

export function calculateDeliveryCost(distance) {
    // Aquí calculamos el costo de entrega multiplicando la distancia por la tarifa fija de $1000 por kilómetro
    const deliveryCost = distance * 1000;
    return deliveryCost;
}

const deliveryCost = calculateDeliveryCost(distance);
console.log("Distance (in kilometers):", distance);
console.log("Delivery Cost:", deliveryCost);