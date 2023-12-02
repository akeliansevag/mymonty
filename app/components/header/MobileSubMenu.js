'use client';
import React from 'react';
import MobileMenuAccordion from './MobileMenuAccordion';

const MobileSubMenu = ({ data, handleMobileMenuToggle }) => {
    return (
        <ul>
            {data && data.children?.map((children, index) => {
                return (<MobileMenuAccordion handleMobileMenuToggle={handleMobileMenuToggle} key={index} data={children} />)
            })}
        </ul>
    )
}

export default MobileSubMenu;
