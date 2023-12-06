'use client';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { NavigationEvents } from './components/navigation-events';
import { Suspense } from 'react';
import Modal from './components/Modal';
import { useAppContext } from './AppContext';
const App = ({ children }) => {
    const { handleOpenModal, handleCloseModal, openModal } = useAppContext();
    return (
        <>
            <Modal isOpen={openModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
            <Header />
            {children}
            <Footer />
            <Suspense fallback={null}>
                <NavigationEvents />
            </Suspense>
        </>
    )
}

export default App;
