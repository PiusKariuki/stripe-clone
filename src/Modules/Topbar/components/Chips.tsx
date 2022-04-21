import React from "react";

interface Props {
	icon: any;
	name: string;
	description: string;

}

const ProductChips: React.FC<Props> = ({ icon, name, description }) => {
	return (
		<div className="flex flex-col w-1/2">
			<div className="flex relative w-full gap-x-2">
				<div className="flex w-3 items-center">{icon}</div>
				<p className="text-[13px] font-[600] text-black-30 self-center 
            ">
					{name}
				</p>
			</div>
			<p className="text-sm font-semibold hidden lg:flex text-black-30">
				{description}
			</p>
		</div>
	);
};

export default ProductChips;
