import React from "react";

interface Props {
	icon: any;
	name: string;
	description: string;
}

const ProductChips: React.FC<Props> = ({ icon, name, description }) => {
	return (
		<div className="flex flex-col w-1/2 md:w-1/4 lg:w-full">
			<div className="flex relative w-full gap-x-2 items-center">
				<div className="flex w-4 lg:w-8 self-center">{icon}</div>
				<div className="flex flex-col lg:gap-y-1 w-full ">
					<p
						className="text-[13px] lg:text-[14px] text-black-30 font-semibold">
						{name}
					</p>
					<p
						className="text-[14px] text-gray-20 hidden lg:block  hover:text-black-10
                  font-normal">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductChips;
