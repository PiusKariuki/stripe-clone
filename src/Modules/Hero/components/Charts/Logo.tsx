import Image from "next/image";
import React from "react";

const Logo = () => {
	return (
		<div className="flex w-full justify-between col-span-1 row-span-1 self-start">
			<div className="flex items-center gap-x-2">
				<Image
					src="/img/rocketrides.png"
					alt=""
					width={15}
					height={27}
					objectFit="contain"
					className="object-scale-down opacity-40 text-white"
				/>
				<p className="text-xs text-white">ROCKET RIDES</p>
			</div>

		</div>
	);
};

export default Logo;
