import React from "react";
import { techs, techType } from "../../../Shared/TechIcons";

const Jumbo: React.FC<techType> = ({ icon, title, description }) => {
	return (
		<div className="flex flex-col gap-y-2 md:max-w-xs lg:max-w-[200px]">
			{icon}
			<p className="text-black-30 text-[15px] font-semibold tracking-wide">{title}</p>
			{description}
		</div>
	);
};

export default Jumbo;
