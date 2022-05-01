import React from "react";
import ForDevs from "./Components/ForDevs";
import Integrations from "./Components/Integrations";
import SourceCode from "./Components/SourceCode";
import Tools from "./Components/Tools";

const Code = () => {
	return (
		<div
			className="flex flex-col w-screen md:flex-row relative py-[140px] px-4 xl:pl-[120px] 
         2xl:px-[150px] 3xl:px-[165px] 4xl:px-[710px] gap-x-8 2xl:gap-x-24 gap-y-8">
			<div
				className="flex absolute w-[200vw] h-[98%] lg:h-[110%] origin-bottom-left z-0 bg-black-30 -skew-y-6
            -left-1/4 top-10"
			/>
			<div className="flex flex-col z-10 gap-6 w-full">
				<ForDevs />
            <div className="flex flex-col lg:flex-row lg:gap-x-6">
              <Tools />
				<Integrations /> 
            </div>
				
			</div>
			<div className="flex w-full z-10">
				<SourceCode />
			</div>
		</div>
	);
};

export default Code;
