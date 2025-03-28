import React from 'react';

const Ticket = ({index,title}) => {
  return (
    <div className="bg-white relative text-black h-[125px] my-4 px-4 flex text-center items-center justify-center shadow-2xl">
      <div className="absolute left-0 -translate-x-full">
      <svg width="17" height="125" viewBox="0 0 17 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4814_8382)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.5172C0 6.94731 6.94731 0 15.5172 0H204.483C213.053 0 220 6.94731 220 15.5172V45C210.611 45 203 52.6112 203 62C203 71.3888 210.611 79 220 79V109.483C220 118.053 213.053 125 204.483 125H15.5172C6.94731 125 0 118.053 0 109.483V79C9.38884 79 17 71.3888 17 62C17 52.6112 9.38884 45 0 45V15.5172Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_4814_8382">
        <rect width="17" height="125" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      </div>
      
        <div className='flex justify-between items-center gap-5'>
            <div className='font-black'>{index}</div>
            <div className='w-[2px] h-20 border-right border border-[#09111133] border-dashed'></div>
            <div className='leading-tight text-[18px]'>{title}</div>
        </div>

        <div className="absolute right-0 translate-x-full">
        <svg width="17" height="125" viewBox="0 0 17 125" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4844_8382)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-203 15.5172C-203 6.94731 -196.053 0 -187.483 0H1.48276C10.0527 0 17 6.94731 17 15.5172V45C7.61116 45 0 52.6112 0 62C0 71.3888 7.61116 79 17 79V109.483C17 118.053 10.0527 125 1.48276 125H-187.483C-196.053 125 -203 118.053 -203 109.483V79C-193.611 79 -186 71.3888 -186 62C-186 52.6112 -193.611 45 -203 45V15.5172Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_4844_8382">
          <rect width="17" height="125" fill="white"/>
          </clipPath>
          </defs>
        </svg>

        </div>
        
    </div>
  )
}

export default Ticket;
