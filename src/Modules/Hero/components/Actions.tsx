import React from "react";

const Actions = () => {
	return (
		<div className="flex little:flex-col xs:flex-row little:items-start little:gap-y-4
       mt-[32px] xs:items-center gap-x-4">
			<button
				className="group
            pt-[3px] pr-3 pb-[6px] pl-4
            items-center  rounded-[2rem] text-white bg-black-30
            hover:bg-black-30 border-[1px]">
				Start now
				<span className="border-white ml-2 arrow before:border-white inline-block align-middle" />
			</button>

			<p className="text-black-30 group font-medium">
				Contact sales
				<span className="border-black-30 ml-2 arrow before:border-black-30 inline-block 
            align-middle" />
			</p>
		</div>
	);
};

export default Actions;
