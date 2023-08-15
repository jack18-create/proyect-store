import React, { createContext, useState, useContext } from "react";

const OffersContext = createContext();

const OffersProvider = ({ children }) => {
    const [showOffers, setShowOffers] = useState(false);

    const toggleOffers = () => {
        setShowOffers(!showOffers);
    };

    return (
        <OffersContext.Provider value={{ showOffers, toggleOffers }}>
            {children}
        </OffersContext.Provider>
    );
};

export { OffersContext, OffersProvider };
