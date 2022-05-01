import React from 'react'

const ForDevs = () => {
  return (
		<div className="flex flex-col w-full gap-6 ">
			<p className="text-[18px] text-blue-20 font-semibold">
				Designed for developers
			</p>
			<p className="text-[34px] text-white font-semibold">
				The world’s most powerful and easy-to-use APIs
			</p>
			<p className="text-[18px] text-gray-10 font-semibold">
				We agonize over the right abstractions so your teams don’t need to
				stitch together disparate systems or spend months integrating payments
				functionality.
			</p>
			<button
				className="w-44 px-4 py-1 items-center  rounded-[2rem] text-black-10 font-bold bg-blue-20
            hover:bg-white border-[1px] group">
				Read the docs
				<span 
            className="border-black-10 ml-2 arrow before:border-black-10 align-middle
            hover:border-black-10 hover:before:border-black-10 inline-block " />
			</button>
		</div>
	);
}

export default ForDevs