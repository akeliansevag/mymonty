import React from 'react'
import TravelIcon from './TravelIcon'
import LifestyleIcon from './LifestyleIcon'
import PeaceofmindIcon from './PeaceofmindIcon'
import Icon from './Icon'

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
              <Icon title="Travel" color="#E8A600" active={divInView=="travel" ? true : false} image={divInView=="travel" ? '/travel-active.webp' : '/travel.webp'}/>
        </div>

        <div onClick={()=> scrollToSection(peaceRef)} className="cursor-pointer text-center flex flex-col items-center">
          <Icon title="Peace of Mind" color="#1380E9" active={divInView=="peace" ? true : false} image={divInView=="peace" ? '/peace-of-mind-active.webp' : '/peace-of-mind.webp'}/>
        </div>

        <div onClick={()=> scrollToSection(lifestyleRef)} className="cursor-pointer text-center flex flex-col items-center">
         <Icon title="lifestyle" color="#04886B" active={divInView=="lifestyle" ? true : false} image={divInView=="lifestyle" ? '/lifestyle-active.webp' : '/lifestyle.webp'}/>  
        </div>

        
    </div>
  )
}

export default Sidebar
