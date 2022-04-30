import Image from "next/image";
import React from "react";

const Visa = () => {
	return (
		<div
			className="flex h-[150px] w-[250px] lg:w-[330px] lg:h-[180px]  3xl:w-[360px] 3xl:h-[250px]
         relative shadow-lg flex-shrink-0 rounded-2xl">
			<Image
				src="/img/small.png"
				alt=""
				layout="fill"
				objectFit="cover"
				className="rounded-2xl"
			/>
		</div>
	);
};

export default Visa;
