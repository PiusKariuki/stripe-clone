import React from "react";

const Event = () => {
	return (
		<div
			className="flex bg-[#121252]/[.3] 
         w-[96%] 375:w-[78%] 425:w-[70%] md:w-[52%] lg:w-[38%] xl:w-[35%] 2xl:w-[35%]
         py-2 md:py-[4px]
         rounded  md:rounded-2xl
         text-white  text-sm md:text-xs font-medium
         justify-center items-center
         group">
			<p className="font-semibold px-2">
				Event
				<div className="inline-block mx-2 align-middle bg-white h-[5px] w-[5px] rounded-full" />
				May 24th
				<div
					className="hidden md:inline-block md:mx-2  align-middle rounded-full bg-white
               h-[5px] w-[5px]"
				/>
				<span className="block md:inline opacity-80">
					Register for the Sessions keynote{" "}
					<span className="ml-1 arrow inline-block" />
				</span>
			</p>
		</div>
	);
};

export default Event;
