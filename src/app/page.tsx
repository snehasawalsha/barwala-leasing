import Slider from '@/components/Slider' 
import WhatWeDo from '@/components/WhatWeDo';
import WhyChooseUs from '@/components/WhyChooseUs';
// import LoansPurpose from '@/components/LoansPurpose';
import OurProducts from '@/components/OurProducts';    
// import OurDirectors from '@/components/OurDirectors';  
import CallBack from '@/components/CallBack';                                                                                                                                     

export default function Home() {
  return (
    <div> 
      <Slider />
      <WhatWeDo />
      <WhyChooseUs />      
      {/* <LoansPurpose /> */}
      <OurProducts />
      {/* <OurDirectors /> */}
      <CallBack />
    </div>
    
  );
}