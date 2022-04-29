import React from "react";

const Unified = () => {
	return (
		<div
			className="w-full py-[72px] flex flex-col relative bg-gray-30 gap-y-8
         px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[760px]">
			<p className="text-blue-10 font-bold text-[18px]">Unified platform</p>
			<p className="text-[34px]  font-bold text-black-30 leading-normal max-w-[250px] 320:max-w-sm
         md:max-w-xs lg:max-w-md">
				A fully integrated suite of payments products
			</p>

			<div className="flex flex-col  md:flex-row w-full gap-y-8 md:gap-x-20">
				<p className="text-lg  font-light text-black-20 tracking-wide w-full">
					We bring together everything that’s required to build websites and
					apps that accept payments and send payouts globally. Stripe’s products
					power payments for{" "}
					<span className="blue-text">
						{" "}
						online and in-person retailers, subscriptions businesses, software
						platforms and marketplaces,
					</span>
					and everything in between.
				</p>

				<p className="text-lg  font-light text-black-20 tracking-wide w-full">
					We also help companies{" "}
					<span className="blue-text">
						{" "}
						beat fraud, send invoices, issue virtual and physical cards, get
						financing, manage business spend,
					</span>
					and much more.
				</p>
			</div>

			<button
				className="group
            pt-[3px]  pb-[6px] 
            items-center  rounded-[16.5px] text-white bg-blue-10 w-[200px]
            hover:bg-black-30 border-[1px]">
				Start with payments
				<span className="border-white ml-2 arrow before:border-white inline-block align-middle" />
			</button>
		</div>
	);
};

export default Unified;
