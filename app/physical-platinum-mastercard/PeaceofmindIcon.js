import React from 'react'

const PeaceofmindIcon = ({active}) => {
  return (
    <svg className="max-md:h-[35px] max-md:w-auto" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.668 26.1667C13.668 26.1667 16.793 30.3334 22.0013 30.3334C27.2096 30.3334 30.3346 26.1667 30.3346 26.1667M32.418 16.2501C31.5951 17.2605 30.4701 17.8334 29.293 17.8334C28.1159 17.8334 27.0221 17.2605 26.168 16.2501M17.8346 16.2501C17.0117 17.2605 15.8867 17.8334 14.7096 17.8334C13.5326 17.8334 12.4388 17.2605 11.5846 16.2501M42.8346 22.0001C42.8346 33.506 33.5072 42.8334 22.0013 42.8334C10.4954 42.8334 1.16797 33.506 1.16797 22.0001C1.16797 10.4941 10.4954 1.16675 22.0013 1.16675C33.5072 1.16675 42.8346 10.4941 42.8346 22.0001Z" stroke={active ? "#2657d4" : "black"} stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default PeaceofmindIcon