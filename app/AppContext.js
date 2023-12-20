'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

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
    const [formComponent, setFormComponent] = useState('');
    const [largeWidth, setLargeWidth] = useState(false);
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.apiUrl;
                const userResponse = await fetch(`${apiUrl}/user-ip`);
                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    setGeoData(userData);
                }
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
        formComponent,
        setFormComponent,
        largeWidth,
        setLargeWidth,
        geoData
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};



