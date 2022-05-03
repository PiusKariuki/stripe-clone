import { faBars, faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SourceCode = () => {
	return (
		<div className="flex flex-col overflow-x-clip md:max-w-[50vw] 2xl:max-w-[560px] font-code">
			<code
				className="w-full flex flex-col overflow-x-clip bg-[#0c2e4e] p-6 shadow-2xl rounded-t-md
            gap-y-2 pb-32 font-code">
				<pre className="text-sm font-code">
					<span className="line-number">1</span>
					<span className="text-blue-10">const</span>
					<span className="text-white"> stripe</span>
					<span className="text-white"> =</span>
					<span className="text-blue-10"> require</span>
					<span className="text-white">(</span>
					<span className="text-[#FFA956]"> {"'stripe'"}</span>
					<span className="text-white">)</span>
					<span className="text-white">(</span>
					<span className="text-[#FFA956]"> {"'sk_test_BQokikJOvBi2Hl4'"}</span>
				</pre>
				<pre className="text-sm font-code">
					<span className="line-number">2</span>
				</pre>
				<pre className="text-sm font-code">
					<span className="line-number">3</span>
					<span className="text-blue-10">await</span>
					<span className="text-white"> stripe.paymentIntents.</span>
					<span className="text-blue-10">create</span>
					<span className="text-white">{"({"}</span>
				</pre>
				<pre className="text-sm font-code">
					<span className="line-number">4</span>
					<span className="text-white ml-2"> amount:</span>
					<span className="text-[#FFA956]"> 2000</span>
					<span className="text-white">,</span>
				</pre>
				<pre className="text-sm font-code">
					<span className="line-number">5</span>
					<span className="text-white ml-2"> currency:</span>
					<span className="text-[#FFA956]"> {"'usd'"}</span>
				</pre>
				<pre className="text-sm font-code">
					<span className="line-number">6</span>
					<span className="text-white"> {"});"}</span>
				</pre>
			</code>

			<div className="flex gap-x-8 items-center">
				<div className="flex items-center justify-center relative bg-[#8095FF] w-20">
					NORMAL
					<FontAwesomeIcon
						icon={faDiamond}
						className="text-[#8095FF] absolute -right-3 top-1/2 text-2xl
                  -translate-y-1/2"
					/>
				</div>
				<p className="text-[#8095FF]">server.js</p>
				<div className="flex ml-auto items-center text-sm">
					<p className="text-[#55718D] ">600%</p>
					<FontAwesomeIcon icon={faBars} className="text-[#55718D] text-lg " />
					<p className="text-[#55718D] ">6/1 ln:4</p>
				</div>
			</div>

			<div
				className="flex flex-col p-6 bg-[#06182C]   text-[14px] tracking-widest
            leading-relaxed overflow-x-clip pb-24 lg:pb-44 gap-y-2 rounded-b-lg">
				<p className="text-white flex gap-x-2">
					<span className="text-blue-10">$</span>
					<span>node {"server.js "} && stripe listen</span>
				</p>
				<p className="text-white ">{">"} Ready! Waiting for requests...</p>
				<p className="text-[#55718D] w-[200vw] text-clip">
					2022-04-06 17:24:40
					<span className="text-white"> [</span>
					<span className="text-blue-10">200</span>
					<span className="text-white">] payment_intent.created</span>
				</p>
				<p className="text-[#55718D] w-[200vw] text-clip">
					2022-04-06 17:24:40
					<span className="text-white"> [</span>
					<span className="text-blue-10">200</span>
					<span className="text-white">] charge.succeeded</span>
				</p>
				<p className="text-[#55718D] w-[200vw] text-clip">
					2022-04-06 17:24:40
					<span className="text-white"> [</span>
					<span className="text-blue-10">200</span>
					<span className="text-white">] payment_intent.succeeded</span>
				</p>
			</div>
		</div>
	);
};

export default SourceCode;
