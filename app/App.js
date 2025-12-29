'use client';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { NavigationEvents } from './components/navigation-events';
import { Suspense } from 'react';
import Modal from './components/Modal';
import { useAppContext } from './AppContext';
import QrCode from './components/QrCode';
import { usePathname } from 'next/navigation';
import BannerAd from './components/BannerAd';

const App = ({ children }) => {
    const { handleOpenModal, handleCloseModal, openModal, setFormComponent, formComponent, largeWidth, setLargeWidth } = useAppContext();

    const dynamicFormComponent = <QrCode />;
    const pathname = usePathname();
    return (
        <>
            {/* {pathname != '/khoury-home' && (
                <KhouryHome />
            )} */}

            <BannerAd />

            <Modal formComponent={formComponent || dynamicFormComponent} isOpen={openModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} largeWidth={largeWidth} />
            <Header />
            <div>
                {children}
                {/* <OldFooter /> */}
                <Footer />
                <Suspense fallback={null}>
                    <NavigationEvents />
                </Suspense>
            </div>
        </>
    )
}

export default App;
