import React from "react";
import ForDevs from "./Components/ForDevs";
import Integrations from "./Components/Integrations";
import SourceCode from "./Components/SourceCode";
import Tools from "./Components/Tools";

const Code = () => {
	return (
		<div
			className="flex flex-col md:flex-row relative py-[140px] 2xl:-mt-20
         gap-x-8 2xl:gap-x-24 gap-y-8">
			<div
				className="flex absolute w-[300vw] h-full  z-0
            bg-black-30 -skew-y-6 -left-[100vw] top-1/2 -translate-y-1/2 5xl:-translate-y-[70%]"
			/>
			<div className="flex flex-col z-10 gap-6 w-full">
				<ForDevs />
				<div className="flex flex-col lg:flex-row lg:gap-x-6">
					<Tools />
					<Integrations />
				</div>
			</div>
			<div className="flex w-full z-10 self-center justify-center">
				<SourceCode />
			</div>
		</div>
	);
};

export default Code;
