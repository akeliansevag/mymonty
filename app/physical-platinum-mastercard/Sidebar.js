import React from 'react'
import TravelIcon from './TravelIcon'
import LifestyleIcon from './LifestyleIcon'
import PeaceofmindIcon from './PeaceofmindIcon'

const Sidebar = ({divInView,travelRef,lifestyleRef,peaceRef}) => {
  const scrollToSection = (sectionRef) => {
    const elementTop = sectionRef.current.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + elementTop - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <div className="sticky-filters">
        <div onClick={()=> scrollToSection(travelRef)} className="cursor-pointer text-center flex flex-col items-center">
            <div className={`max-md:p-2 p-6  rounded-2xl ${divInView=="travel" ? "bg-[#E9EEFB]" : ""}`}>
                <TravelIcon active={divInView=="travel" ? true : false}/>
            </div>
            <span className={`max-md:mt-0 max-md:text-base mt-2 font-bold ${divInView === "travel" ? "text-[#2657D4]" : ""}`}>Travel</span>
        </div>

        <div onClick={()=> scrollToSection(peaceRef)} className="cursor-pointer text-center flex flex-col items-center">
            <div className={`max-md:p-2 p-6  rounded-2xl ${divInView=="peace" ? "bg-[#E9EEFB]" : ""}`}>
                <PeaceofmindIcon active={divInView=="peace" ? true : false}/>  
            </div>
            <span className={`max-md:mt-0 max-md:text-base mt-2 font-bold ${divInView === "peace" ? "text-[#2657D4]" : ""}`}>Peace of Mind</span>
        </div>

        <div onClick={()=> scrollToSection(lifestyleRef)} className="cursor-pointer text-center flex flex-col items-center">
            <div className={`max-md:p-2 p-6  rounded-2xl ${divInView=="lifestyle" ? "bg-[#E9EEFB]" : ""}`}>
                <LifestyleIcon active={divInView=="lifestyle" ? true : false}/>
            </div>
            <span className={`max-md:mt-0 max-md:text-base mt-2 font-bold ${divInView === "lifestyle" ? "text-[#2657D4]" : ""}`}>Lifestyle</span>
        </div>

        
    </div>
  )
}

export default Sidebar