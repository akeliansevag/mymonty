import React from 'react';

const Icon = ({color,image,active,title}) => {
  return (
    <>
      <img src={image} />
      <span style={{color: active ? color : 'black' ,fontWeight: active ? 'bold' : 'normal'}} className="max-md:mt-0 max-md:text-base mt-2">{title}</span>
    </>  
  )
}

export default Icon;
