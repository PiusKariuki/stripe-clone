import Image from "next/image";
import React from "react";

const Visa = () => {
	return (
		<div
			className="flex h-[150px] w-[250px] lg:w-[330px] lg:h-[180px]  3xl:w-[360px] 3xl:h-[250px]
         relative shadow-lg flex-shrink-0 rounded-2xl bg-yellow-400 p-4 justify-between">
			<div className="flex flex-col justify-between">
				<p className="text-white text-2xl italic">Zestful</p>
				<Image
					src="/img/chip.jpg"
					alt=""
					width={40}
					height={40}
					objectFit="contain"
					className="self-center justify-center"
				/>
				<p className="text-white text-sm">Thomas Degry</p>
			</div>
			<Image
				src="/img/large.webp"
				alt=""
				width={80}
				height={100}
				objectFit="contain"
				className="self-center justify-center"
			/>
			<div className="flex mt-auto">
				<Image
					src="/img/visa.svg"
					alt=""
					width={40}
					height={20}
					objectFit="contain"
					className="rounded-lg "
				/>
			</div>
		</div>
	);
};

export default Visa;
