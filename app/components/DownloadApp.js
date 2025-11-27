'use client';
import React from 'react';
import { useAppContext } from '../AppContext';


const DownloadApp = () => {
  const { handleOpenModal } = useAppContext();
  return (
    <button onClick={handleOpenModal} className='mm-button my-16'>
      Download App
    </button>
  )
}

export default DownloadApp
