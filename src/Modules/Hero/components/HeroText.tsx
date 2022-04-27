import React from "react";

const HeroText = () => {
	return (
		<div 
      className="mt-[48px] flex flex-col text-black-10 font-black
      text-[40px] 375:text-[48px] md:text-[67px] lg:text-[88px]
      gap-y-0">
			<p className="-mt-2">Payments</p>
			<p className="hero-text">infrastructure</p>
			<p className="hero-text">
				<span className="">for the</span>
				<span className="block 320:inline-block -mt-4 ml-2">internet</span>
			</p>

			<p className="mt-[32px] text-[18px] font-normal text-black-20 pr-4 425:pr-[6px]">
				Millions of companies of all sizes—from startups to Fortune 500s—use
				Stripe’s software and APIs to accept payments, send payouts, and manage
				their businesses online.
			</p>
		</div>
	);
};

export default HeroText;
