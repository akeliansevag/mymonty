import React from 'react';

const Promo = ({code}) => {
  return (
    <div className="relative w-[230px] h-[108px] text-black my-4 bg-white p-5 flex text-center items-center justify-center">
      <div className="absolute left-0 -translate-x-full">
        <svg width="15" height="108" viewBox="0 0 15 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3486_5594)">
          <path d="M5.42349e-05 13.5084C5.42349e-05 6.04793 6.04798 0 13.5085 0H247.654C255.115 0 261.163 6.04792 261.163 13.5084V39.0244H261.161C252.84 39.0244 246.094 45.7701 246.094 54.0915C246.094 62.4128 252.84 69.1585 261.161 69.1585H261.163V94.9746C261.163 102.435 255.115 108.483 247.654 108.483H13.5085C6.04799 108.483 5.42349e-05 102.435 5.42349e-05 94.9746V69.1585V69.1585C8.32137 69.1585 15.0677 62.4128 15.0677 54.0915C15.0677 45.7701 8.32194 39.0244 0.000617856 39.0244V39.0244L5.42349e-05 13.5084Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_3486_5594">
          <rect width="15" height="108" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      
        <div>
            <h5>Promo Code:</h5>
            <h6 className="font-bold text-2xl">{code}</h6>
        </div>

        <div className="absolute right-0 translate-x-full">
          <svg width="15" height="108" viewBox="0 0 15 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3486_5595)">
            <path d="M14.9999 13.5084C14.9999 6.04793 8.95202 0 1.49153 0H-232.654C-240.115 0 -246.163 6.04792 -246.163 13.5084V39.0244H-246.161C-237.84 39.0244 -231.094 45.7701 -231.094 54.0915C-231.094 62.4128 -237.84 69.1585 -246.161 69.1585H-246.163V94.9746C-246.163 102.435 -240.115 108.483 -232.654 108.483H1.49151C8.95201 108.483 14.9999 102.435 14.9999 94.9746V69.1585V69.1585C6.67863 69.1585 -0.0676994 62.4128 -0.0676994 54.0915C-0.0676994 45.7701 6.67806 39.0244 14.9994 39.0244V39.0244L14.9999 13.5084Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_3486_5595">
            <rect width="15" height="108" fill="white" transform="matrix(-1 0 0 1 15 0)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        
    </div>
  )
}

export default Promo
