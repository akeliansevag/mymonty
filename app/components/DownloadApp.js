'use client';
import React from 'react';
import { useAppContext } from '../AppContext';


const DownloadApp = ({ title = 'Download App' }) => {
  const { handleOpenModal } = useAppContext();
  return (
    <button onClick={handleOpenModal} className='mm-button my-12 w-max mx-auto'>
      { title }
    </button>
  )
}

export default DownloadApp
