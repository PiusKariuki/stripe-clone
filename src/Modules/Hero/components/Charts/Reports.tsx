import React from "react";
import Image from "next/image";

const Reports = () => {
	return (
		<div
			className="col-start-2 row-start-8 col-span-3 row-span-7 flex justify-between
         bg-white rounded-md p-6 shadow-lg">
			<Image
				src="/img/chart.svg"
				alt=""
				width={200}
				height={40}
				quality={100}
				objectFit="cover"
				className="text-white justify-start object-center border-2"
			/>
			<Image
				src="/img/chart.svg"
				alt=""
				width={200}
				height={40}
				quality={100}
				objectFit="cover"
				className="text-white justify-start object-center border-2"
			/>
			<Image
				src="/img/chart.svg"
				alt=""
				width={200}
				height={40}
				quality={100}
				objectFit="cover"
				className="text-white justify-start object-center border-2"
			/>
		</div>
	);
};

export default Reports;
