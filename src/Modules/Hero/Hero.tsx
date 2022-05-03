import React from "react";
import Actions from "./components/Actions";
import Event from "./components/Event";
import HeroImage from "./components/HeroImage";
import HeroText from "./components/HeroText";

const Hero = () => {
	return (
		<div
			className="flex gap-x-56 md:gap-x-44 lg:gap-x-[200px] xl:gap-x-56 relative pb-[128px]">
			<div
				className="flex flex-col pt-7 md:pt-[50px] lg:pt-[39px] xl:pt-[42px] 2xl:pt-[42px]">
				<Event />
				<HeroText />
				<Actions />
			</div>
         <div className="absolute left-2/3">
           <HeroImage /> 
         </div>
			
		</div>
	);
};

export default Hero;
