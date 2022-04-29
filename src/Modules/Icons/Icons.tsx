import React from "react";
import { svgs, svgType } from "../../Shared/Svgs";

const Icons = () => {
	return (
		<div
			className="flex w-full flex-wrap items-center justify-between gap-y-[60px] py-[72px]
         px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[760px] 
      ">
			{svgs.map((svg: svgType, index) => (
				<div
					className="flex flex-shrink-0 max-w-[50%] md:max-w-[25%] 3xl:min-w-[25%]"
					key={index}>
					{svg.icon}
				</div>
			))}
		</div>
	);
};

export default Icons;
