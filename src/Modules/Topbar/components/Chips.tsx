import React from "react";

interface Props {
	icon: any;
	name: string;
	description: string;
}

const ProductChips: React.FC<Props> = ({ icon, name, description }) => {
	return (
		<div className="flex flex-col w-1/2 md:w-1/4 lg:w-full group">
			<div className="flex relative w-full gap-x-2 items-center ">
				<div className="flex w-4 lg:w-8 self-center">{icon}</div>
				
				<div className="flex flex-col lg:gap-y-1 w-full group">
					<p
						className="text-[13px] lg:text-[14px] font-[600] text-black-30 
                  ">
						{name}
					</p>

					<p
						className="text-[14px] text-gray-20 font-normal hidden lg:block
                  hover:text-black-30">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductChips;
