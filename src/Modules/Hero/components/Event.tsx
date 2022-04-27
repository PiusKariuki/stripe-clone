import React from "react";

const Event = () => {
	return (
		<div
			className="flex bg-[#121252]/[.3]  w-[95%] 425:w-[70%] md:w-[52%] lg:w-[38%] xl:w-[35%] 2xl:w-[35%]
         rounded-md text-white px-4 md:px-[0px] text-[13px] justify-center
         font-medium items-center group py-3 md:py-[2px] md:rounded-2xl ">
			<p className="font-semibold text-[13px]">
				Event
				<span className="mx-2 font-black text-[10px] align-text-top ">.</span>
				May 24th
				<span className="hidden md:inline md:mx-2 font-black md:text-[10px] align-text-top leading-3">
					.
				</span>
				<span className="block md:inline text-xs">
					Register for the Sessions keynote{" "}
					<span className="ml-1 arrow inline-block" />
				</span>
			</p>
		</div>
	);
};

export default Event;
