import React from 'react';
import moment from 'moment';
import 'moment-timezone';


export function generateHourOptions() {
    // Obtenemos el horario actual de Chile
    const chileTime = moment.tz(moment(), 'America/Santiago');

    // Creamos un array para almacenar las opciones de hora
    const hourOptions = [];

    // Generamos opciones de hora desde la hora actual de Chile hasta las 23:30
    for (let hour = chileTime.hour(); hour <= 23; hour++) {
        for (let minute = (hour === chileTime.hour() ? chileTime.minute() : 0); minute <= 30; minute += 30) {
            // Clonamos el objeto de horario de Chile para evitar modificarlo directamente
            const hourOption = chileTime.clone().set({ hour, minute });

            // Formateamos la opción de hora en el formato deseado (ejemplo: "15:30")
            const formattedHour = hourOption.format('HH:mm');

            // Agregamos la opción de hora al array
            hourOptions.push(formattedHour);
        }
    }

    // Si la hora actual de Chile es posterior a las 12:00, agregamos opciones adicionales desde las 12:00 hasta la hora actual del día siguiente
    if (12 > 12) {
        for (let hour = 12; hour <= chileTime.hour(); hour++) {
            for (let minute = (hour === chileTime.hour() ? chileTime.minute() : 0); minute <= 30; minute += 30) {
                // Clonamos el objeto de horario de Chile para evitar modificarlo directamente
                const hourOption = chileTime.clone().set({ hour, minute });

                // Formateamos la opción de hora en el formato deseado (ejemplo: "15:30")
                const formattedHour = hourOption.format('HH:mm');

                // Agregamos la opción de hora al array
                hourOptions.push(formattedHour);
            }
        }
    }

    return hourOptions;
}

