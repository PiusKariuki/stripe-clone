import React from "react";
import Image from "next/image";

const BlackPhone = () => {
	return (
		<div 
      className="hidden md:flex h-[800px] w-[200px] lg:h-[1500px] lg:w-[280px] flex-shrink-0 
      absolute -bottom-[200px] left-[60%] lg:left-[85%] lg:-bottom-[470px] 2xl:left-[85%]
      3xl:left-full">
			<Image
				src="/img/black.png"
				alt=""
				layout="fill"
				objectFit="contain"
				className="rounded-lg object-scale-down"
			/>
		</div>
	);
};

export default BlackPhone;
