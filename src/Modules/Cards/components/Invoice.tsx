import { faSlack } from "@fortawesome/free-brands-svg-icons";
import {
	faBuildingColumns,
	faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Invoice = () => {
	return (
		<div
			className="flex w-[400px] h-[200px] md:w-[400px] md:h-[300px] lg:h-[380px] lg:w-[500px]
         3xl:w-[600px] 3xl:h-[420px]
         relative shadow-2xl border-2 overflow-clip rounded-lg flex-shrink-0">
			<div
				className="flex bg-fuchsia-900 h-[70%] w-full absolute top-0 left-0 
            -skew-y-12 origin-bottom-left "
			/>
			<div
				className="flex flex-col gap-y-6 md:gap-y-2 2xl:gap-y-8 w-[80%] h-[80%] md:w-[68%] 
            md:h-[75%] lg:w-2/3  lg:h-[70%] 3xl:w-[60%] 3xl:h-[70%]
             m-auto bg-white z-20 items-center rounded-lg pt-8 shadow-lg relative">
				{/* slack icon */}
				<div
					className="rounded-full flex items-center justify-center absolute shadow-2xl border-2
               p-2 h-8 w-8 md:w-12 md:h-12 -top-3 md:-top-5 bg-white">
					<FontAwesomeIcon
						icon={faSlack}
						className="text-orange-400 text-xl md:text-3xl"
					/>
				</div>

				<div className="flex flex-col">
					<p className="text-[10px] lg:text-xs text-center font-bold text-black-10">
						Invoice from slack
					</p>
					<p className="text-[10px] lg:text-xs text-black-10 text-center">
						Billed to Jenny Rosen
					</p>
				</div>

				<div
					className="flex flex-col bg-gray-30 rounded-b-lg w-full h-full px-6 items-center
               gap-y-4 pt-4  pb-7 2xl:pb-4 shadow-lg">
					<p className="text-xs text-black-10">
						<span className="font-bold">$750.00</span> due Aug 1, 2020
					</p>

					<div className="flex w-full gap-x-2 md:gap-x-6 2xl:gap-y-6">
						<div className="flex relative w-full ">
							<input
								id="card"
								className="shadow-md focus:outline-none w-full rounded
                           placeholder:text-xs pl-8 h-4 lg:h-5
                           placeholder:text-fuchsia-900  placeholder:font-bold ring-2 ring-fuchsia-900"
								readOnly
								placeholder="Card"
							/>
							<FontAwesomeIcon
								icon={faCreditCard}
								className="absolute text-fuchsia-900 top-1/2 left-2 -translate-y-1/2 text-xs"
							/>
						</div>

						<div className="flex relative w-full">
							<input
								id="card"
								className="shadow-md focus:outline-none w-full rounded
                           placeholder:text-xs pl-8 h-4 lg:h-5 py-1  placeholder:text-gray-400
                           placeholder:font-bold ring-2 ring-white"
								readOnly
								placeholder="Bank"
							/>
							<FontAwesomeIcon
								icon={faBuildingColumns}
								className="absolute text-gray-300  top-1/2 left-2 -translate-y-1/2 text-xs"
							/>
						</div>
					</div>

					<div className="flex relative w-full">
						<input
							id="card"
							className="shadow-md focus:outline-none w-full rounded
                           placeholder:text-xs px-8 h-4 lg:h-6 placeholder:text-gray-400
                           placeholder:font-bold ring-2 ring-white"
							readOnly
							placeholder="Card number"
						/>
						<FontAwesomeIcon
							icon={faCreditCard}
							className="absolute text-gray-300  top-1/2 left-2 -translate-y-1/2 text-xs"
						/>
						<p className="text-gray-400 absolute right-10 top-1/2 -translate-y-1/2 text-xs">
							MMY/YY CVC
						</p>
					</div>

					<button
						className="bg-fuchsia-900 py-[2px] lg:py-[3px] w-full rounded-md 
               text-white text-xs lg:text-sm">
						Pay invoice
					</button>
				</div>
			</div>
		</div>
	);
};

export default Invoice;
