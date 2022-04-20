import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
	icon: any;
	name: string;
	description: string;
}

const ProductChips: React.FC<Props> = ({ icon, name, description }) => {
	return (
		<div className="flex flex-col w-[43%]">
			<div className="flex relative">
				<FontAwesomeIcon
               color="purple"
					icon={icon}
					className="font-semibold absolute left-0 top-[50%]
                translate-x-[-50%] translate-y-[-50%] text-base"
				/>
				<p className="text-sm font-[600] text-black-30 ml-4">
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
