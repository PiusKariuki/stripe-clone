
import React from "react";
import Charts from "./Charts/Charts";
import Phone from "./Phone/Phone";

const HeroImage = () => {
	return (
		<div className="hidden md:flex relative bg-transparent flex-shrink-0 mt-4">
         {/* phone div */}
         <Phone />
         <Charts />
		</div>
	);
};

export default HeroImage;
