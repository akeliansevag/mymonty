import React from 'react';

const Icon = ({color,image,active,title}) => {
  return (
    <>
      <img className="max-lg:w-[60px]" src={image} alt='Image' width='' height='' />
      <span style={{color: active ? color : 'black' ,fontWeight: active ? 'bold' : 'normal'}} className="max-md:mt-0 max-md:text-base mt-2">{title}</span>
    </>  
  )
}

export default Icon;
