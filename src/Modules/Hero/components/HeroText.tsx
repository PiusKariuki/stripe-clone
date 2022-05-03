import React from "react";

const HeroText = () => {
	return (
		<div
			className="mt-[48px] flex flex-col text-black-10 font-black
         text-[35px] 320:text-[48px]  375:text-[48px] tab:text-[70px] md:text-[74px] lg:text-[94px]
         gap-y-0 w-full tracking-tight md:tracking-[-0.06em]
         ">
			<p className="">Payments</p>
			<p className="hero-text">infrastructure</p>
			<p className="hero-text w-full ">
				<span className="">for the </span>
				<span className="little:block little:-mt-4 xs:inline tracking-tighter">
					internet
				</span>
			</p>

			<p className="mt-[32px] text-[18px] font-normal text-black-20 little:pr-10 pr-4 425:pr-[6px] tracking-wide">
				Millions of companies of all sizes—from startups to Fortune 500s—use
				Stripe’s software and APIs to accept payments, send payouts, and manage
				their businesses online.
			</p>
		</div>
	);
};

export default HeroText;
