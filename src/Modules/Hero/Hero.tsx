import React from 'react'
import Actions from './components/Actions'
import Event from './components/Event'
import HeroImage from './components/HeroImage'
import HeroText from './components/HeroText'

const Hero = () => {
  return (
		<div className="flex w-full">
			{/* <div className="flex flex-col pt-7 md:pt-[50px] lg:pt-[39px] xl:pt-[42px] 2xl:pt-[42px] w-full">
				<Event />
				<HeroText />
				<Actions />
				
			</div> */}
         <HeroImage />
		</div>
	);
}

export default Hero