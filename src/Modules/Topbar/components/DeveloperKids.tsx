import { faBars, faBookOpen, faChartLine, faCode, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeveloperKids = () => {
	return (
		<div
			className="absolute top-0 left-0 z-50 overflow-auto bg-transparent flex-col
         hidden group-hover:flex translate-x-[-45%] translate-y-[15%]">
			<div
				className="mx-auto bg-white rounded-md relative shadow-2xl border-[1px]  pt-8 gap-y-6
            min-w-[600px] flex flex-col ">
				<div className="flex w-full gap-x-3 relative group px-16">
					<FontAwesomeIcon
						icon={faBookOpen}
						className="absolute text-[15px] text-gray-20 group-hover:text-black-10
                  top-[10%] left-[25px]"
					/>
					<div className="flex flex-col">
						<p className="text-[15px]">Documentation</p>
						<p className="text-[14px] text-gray-20 hover:text-black-10">
							Start integrating Stripe’s products and tools
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 px-16">
					<div className="flex flex-col gap-y-3">
						<p className="text-[15px] text-gray-20 upercase">Get started</p>

						<p className="text-[14px] text-black-10">Prebuilt checkout</p>
						<p className="text-[14px] text-black-10">Libraries and SDKs </p>
						<p className="text-[14px] text-black-10">Plugins </p>
						<p className="text-[14px] text-black-10">Code samples </p>
					</div>
					<div className="flex flex-col gap-y-3">
						<p className="text-[15px] text-gray-20 upercase">GUIDES</p>

						<p className="text-[14px] text-black-10">Accept online payments </p>
						<p className="text-[14px] text-black-10">Manage subscriptions </p>
						<p className="text-[14px] text-black-10">Send payments </p>
						<p className="text-[14px] text-black-10">
							Set up in-person payments{" "}
						</p>
					</div>
				</div>

				<div className="flex flex-wrap w-full gap-y-4 bg-gray-30 px-16 py-8">
					<div className="flex w-1/2">
						<FontAwesomeIcon icon={faBars} className="" />
						<p className="text-[14px] text-black-10">Full API reference </p>
					</div>
					<div className="flex w-1/2">
						<FontAwesomeIcon icon={faChartLine} className="" />
						<p className="text-[14px] text-black-10">API status </p>
					</div>
					<div className="flex w-1/2">
						<FontAwesomeIcon icon={faComments} className="" />
						<p className="text-[14px] text-black-10">Support </p>
					</div>
					<div className="flex w-1/2">
						<FontAwesomeIcon icon={faCode} className="" />
						<p className="text-[14px] text-black-10">API changelog </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeveloperKids;
