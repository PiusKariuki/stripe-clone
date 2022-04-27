
import React from "react";
import Phone from "./ImgParts/Phone";

const HeroImage = () => {
	return (
		<div className="w-full hidden md:flex relative bg-transparent">
         {/* phone div */}
         <Phone />
		</div>
	);
};

export default HeroImage;
