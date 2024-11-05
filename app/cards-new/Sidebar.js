import React from 'react'
import TravelIcon from './TravelIcon'
import LifestyleIcon from './LifestyleIcon'
import PeaceofmindIcon from './PeaceofmindIcon'

const Sidebar = () => {
  return (
    <div className="bg-white sticky top-[calc(var(--header-height)+30px)] w-[15%] rounded-xl p-5 self-start flex-none flex flex-col gap-7">
        <div className="text-center flex flex-col items-center">
            <div className="p-6 bg-[#E9EEFB] rounded-2xl">
                <TravelIcon active={true}/>
            </div>
            <span className={"mt-2 text-[#2657D4] font-bold"}>Travel</span>
        </div>

        <div className="text-center flex flex-col items-center">
            <div className="p-6 rounded-2xl">
                <LifestyleIcon active={false}/>
            </div>
            <span className="mt-2 font-bold">Lifestyle</span>
        </div>

        <div className="text-center flex flex-col items-center">
            <div className="p-6 rounded-2xl">
                <PeaceofmindIcon active={false}/>  
            </div>
            <span className="mt-2 font-bold">Peace of Mind</span>
        </div>
    </div>
  )
}

export default Sidebar
