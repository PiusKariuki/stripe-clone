import React from "react";
import { techs, techType } from "../../Shared/TechIcons";
import Jumbo from "./components/Jumbo";

const Tech = () => {
	return (
		<div
			className="flex flex-col py-[72px] 2xl:py-[200px] gap-y-6
         px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[760px]">
			<p className="text-blue-10 text-[18px] font-semibold  md:max-w-[700px]">
				Why Stripe
			</p>
			<p className="text-black-30 text-[34px] font-semibold  md:max-w-[700px]">
				A technology-first approach to payments and finance
			</p>
			<div className="flex flex-col md:flex-row md:flex-wrap w-full gap-x-7 lg:gap-x-10">
				{techs.map((tech: techType, index: number) => (
					<Jumbo
						key={index}
						icon={tech.icon}
						title={tech.title}
						description={tech.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Tech;
