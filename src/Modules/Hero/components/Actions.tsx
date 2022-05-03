import React from "react";

const Actions = () => {
	return (
		<div className="flex little:flex-col xs:flex-row little:items-start little:gap-y-4
       mt-[32px] xs:items-center gap-x-4">
			<button
				className="group py-[4px]  px-4 items-center  rounded-[2rem] text-white
            bg-black-30 hover:bg-black-30 border-[1px] text-[15px] font-medium">
				Start now
				<span className="border-white ml-2 arrow before:border-white inline-block align-middle" />
			</button>

			<p className="text-black-30 group font-medium text-[15px]">
				Contact sales
				<span className="border-black-30 ml-2 arrow before:border-black-30 inline-block 
            align-middle" />
			</p>
		</div>
	);
};

export default Actions;
