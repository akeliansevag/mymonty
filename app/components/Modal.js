'use client';
import React, { useEffect, useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Form from './Form';

const Modal = ({ isOpen, handleOpenModal, handleCloseModal, formComponent, largeWidth }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center py-4 text-center sm:items-center sm:px-0 w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className='container'>
                <Dialog.Panel className={`relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 w-full ${largeWidth ? 'md:w-3/4 lg:w-3/5 xl:w-3/4' : 'md:w-3/4 lg:w-3/5 xl:w-2/5'}  mx-auto`}>

                  <div className='absolute top-[15px] right-[15px] md:top-[30px] md:right-[30px]' onClick={handleCloseModal}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27 9L9 27M9 9L27 27" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="bg-white gap-10 px-4 md:px-10 py-10 md:py-20" >
                    <div className="flex items-center justify-center w-full">
                      <div className="mt-3 sm:mt-0 w-full">
                        {/* <Dialog.Title as="h2" className="uppercase leading-none font-black text-center text-3xl sm:text-4xl">
                          Get your early access now
                        </Dialog.Title> */}
                        {formComponent && React.cloneElement(formComponent)}
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => handleOpenModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={handleAcceptCookie}
                            ref={cancelButtonRef}
                        >
                            Submit
                        </button>
                    </div> */}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div >
        </div >
      </Dialog >
    </Transition.Root >
  )
}

export default Modal;