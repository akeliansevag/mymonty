'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileNavParents = ({ data, setSelectedParentIndex, handleMobileMenuToggle }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSelected = (index) => {
        setSelectedIndex(index);
        setSelectedParentIndex(index);
    }
    let liClasses = 'transition-all py-[5px] px-[15px] rounded-full hover:bg-black cursor-pointer hover:text-white whitespace-nowrap';
    return (
        <ul className={`flex gap-3 w-full overflow-auto mb-5 pb-4`}>
            {data && data.map((parent, index) => {
                let selectedClasses = index === selectedIndex ? 'bg-black text-white' : null;
                return (
                    <li key={index} onClick={() => handleSelected(index)} className={`${liClasses} ${selectedClasses}`}>
                        {parent.url ? <Link onClick={handleMobileMenuToggle} href={parent.url}>{parent.title}</Link> : parent?.title}
                    </li>
                )
            })}

        </ul>
    )
}

export default MobileNavParents;
