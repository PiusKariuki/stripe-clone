import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
	icon: any;
	name: string;
	description: string;
   color: string;
}

const ProductChips: React.FC<Props> = ({ icon, name, description,color }) => {
	return (
		<div className="flex flex-col w-[48%]">
			<div className="flex relative">
				<FontAwesomeIcon
               color={color}
					icon={icon}
					className="font-semibold absolute left-0 top-[50%]
                translate-x-[-50%] translate-y-[-50%] text-base"
				/>
				<p className="text-[13px] font-[600] text-black-30 ml-4 self-center">
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
