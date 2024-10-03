'use client';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import OldFooter from './components/OldFooter';
import { NavigationEvents } from './components/navigation-events';
import { Suspense } from 'react';
import Modal from './components/Modal';
import { useAppContext } from './AppContext';
import Form from './components/Form';
import Link from 'next/link';
import Image from 'next/image';
import feesMobile from '@/public/0fees-mobile.webp';
import fees from '@/public/0fees-desktop.webp';



const App = ({ children }) => {
    const { handleOpenModal, handleCloseModal, openModal, setFormComponent, formComponent, largeWidth, setLargeWidth } = useAppContext();

    const dynamicFormComponent = <Form />;

    return (
        <>
            <Link href="/zero-fees" className="fixed z-20 bottom-0 w-full">
                <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={fees} />
                <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={feesMobile} />
            </Link>
            <Modal formComponent={formComponent || dynamicFormComponent} isOpen={openModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} largeWidth={largeWidth} />
            <Header />
            <div>
                {children}
                <OldFooter />
                {/* <Footer /> */}
                <Suspense fallback={null}>
                    <NavigationEvents />
                </Suspense>
            </div>
        </>
    )
}

export default App;
