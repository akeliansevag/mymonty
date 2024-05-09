'use client';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { NavigationEvents } from './components/navigation-events';
import { Suspense } from 'react';
import Modal from './components/Modal';
import { useAppContext } from './AppContext';
import Form from './components/Form';

const App = ({ children }) => {
    const { handleOpenModal, handleCloseModal, openModal, setFormComponent, formComponent, largeWidth, setLargeWidth } = useAppContext();

    const dynamicFormComponent = <Form />;

    return (
        <>
            <Modal formComponent={formComponent || dynamicFormComponent} isOpen={openModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} largeWidth={largeWidth} />
            <Header />
            <div className='-mt-[var(--header-height)]'>
                {children}
                <Footer />
                <Suspense fallback={null}>
                    <NavigationEvents />
                </Suspense>
            </div>
        </>
    )
}

export default App;
