import React from "react";
import Actions from "./components/Actions";
import Event from "./components/Event";
import HeroImage from "./components/HeroImage";
import HeroText from "./components/HeroText";

const Hero = () => {
	return (
		<div className="flex w-screen gap-x-56 md:gap-x-44 lg:gap-x-[200px] xl:gap-x-56">
			<div
				className="flex flex-col pt-7 md:pt-[50px] lg:pt-[39px] xl:pt-[42px] 2xl:pt-[42px]
            w-[100%] md:w-[100%] 4xl:w-[20%]">
				<Event />
				<HeroText />
				<Actions />
			</div>
			<HeroImage />
		</div>
	);
};

export default Hero;
