'use client';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const contextValue = {
        openModal,
        handleOpenModal,
        handleCloseModal,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
