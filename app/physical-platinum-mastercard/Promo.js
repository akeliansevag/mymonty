import React from 'react';

const Promo = ({code}) => {
  return (
    <div className="w-full min-w-[260px] h-[108px] text-black my-4 bg-white rounded-xl p-5 min-h-[108px] flex text-center items-center justify-center">
        <div>
            <h5>Promo Code:</h5>
            <h6 className="font-bold text-2xl">{code}</h6>
        </div>
    </div>
  )
}

export default Promo
