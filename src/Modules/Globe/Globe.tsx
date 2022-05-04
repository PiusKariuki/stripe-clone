import React from "react";

const Globe = () => {
	return (
		<div
			className="relative flex flex-col  gap-y-8 lg:gap-y-16  2xl:-mt-20
         pt-[140px] pb-[400px]">
			<div
				className="flex absolute w-[300vw] h-full  z-0
            bg-black-30 -skew-y-6 -left-[100vw] top-1/2 -translate-y-1/2 5xl:-translate-y-[70%]"
			/>
			<div
				className="bg-globe bg-center bg-contain lg:bg-cover w-[1000px] h-full
            md:h-full md:w-full  absolute md:left-1/3 top-1/2 -translate-y-1/2 bg-no-repeat"
			/>

			<div className="flex flex-col gap-6 z-20 max-w-[300px] lg:max-w-[400px] ">
				<p className="text-[18px] text-blue-20 font-semibold">Global scale</p>
				<p className="text-[34px] text-white font-semibold">
					The backbone for internet business
				</p>
				<p className="text-[18px] text-gray-10">
					For ambitious companies around the world, Stripe makes moving money as
					simple, borderless, and programmable as the rest of the internet. Our
					teams are based in dozens of offices around the world and we process
					hundreds of billions of dollars each year for{" "}
					<span className="text-blue-20 hover:text-white">
						startups to Fortune 500s
					</span>
				</p>
			</div>

			<div className="flex flex-col md:flex-row md:flex-wrap gap-y-8 gap-x-20 lg:gap-x-8 z-20">
				<div className="flex flex-col max-w-[300px] lg:max-w-[200px]">
					<p className="text-white text-[26px]">250M+</p>
					<p className="text-[15px] text-gray-10 tracking-wide">
						API requests per day, peaking at 13,000 requests a second.
					</p>
				</div>
				<div className="flex flex-col max-w-[300px] lg:max-w-[200px]">
					<p className="text-white text-[26px]">90%</p>
					<p className="text-[15px] text-gray-10 tracking-wide">
						of U.S. adults have bought from businesses using Stripe.
					</p>
				</div>
				<div className="flex flex-col max-w-[300px] lg:max-w-[200px]">
					<p className="text-white text-[26px]">135+</p>
					<p className="text-[15px] text-gray-10 tracking-wide">
						currencies and payment methods supported.
					</p>
				</div>
				<div className="flex flex-col max-w-[300px] lg:max-w-[200px]">
					<p className="text-white text-[26px]">35+</p>
					<p className="text-[15px] text-gray-10 tracking-wide">
						countries with local acquiring, optimizing acceptance rates.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Globe;
