import React from "react";
import Image from "next/image";

const Today = () => {
	return (
		<div
			className="col-start-2 row-start-2  col-span-3 row-span-7 flex flex-col bg-white rounded-md p-6
      shadow-lg">
			<p className="text-base border-b-[0.5px]">Today</p>
			<div className="flex w-full items-center pt-4">
				<div className="flex flex-col w-full border-gray-200 border-[0.5px]">
					<Image
						src="/img/grphic.svg"
						alt=""
						width={200}
						height={150}
						quality={100}
						objectFit="cover"
						className="text-white justify-start object-center"
					/>
				</div>

				<div className="flex flex-col gap-y-6 items-center border-gray-200 border-[0.5px] p-2">
					<Image
						src="/img/line.png"
						alt=""
						width={200}
						height={72}
						quality={100}
						objectFit="contain"
						className="text-white justify-start object-center"
					/>
					<Image
						src="/img/line.png"
						alt=""
						width={200}
						height={72}
						quality={100}
						objectFit="contain"
						className="text-white justify-start object-center "
					/>
				</div>
			</div>
		</div>
	);
};

export default Today;
