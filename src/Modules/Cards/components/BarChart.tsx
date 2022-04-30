import React from "react";
import Image from "next/image";

const BarChart = () => {
	return (
		<div
			className="flex h-[450px] w-[700px] lg:w-[640px]
         relative bg-white  rounded-md shadow-xl flex-shrink-0">
			<Image
				src="/img/barchart.svg"
				alt=""
				layout="fill"
				objectFit="cover"
				className="rounded-lg object-scale-down"
			/>
		</div>
	);
};

export default BarChart;
