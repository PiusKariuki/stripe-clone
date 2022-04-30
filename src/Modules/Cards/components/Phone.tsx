import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApplePay } from "@fortawesome/free-brands-svg-icons";
import {
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Phone = () => {
	return (
		<div
			className="flex flex-col w-[264px] h-[550px] lg:w-[280px] rounded-[36px]  bg-gray-300 shadow-lg
         pt-[24px] pb-1 px-1 items-center border-8 border-white flex-shrink-0 lg:self-end">
			<p className="text-xs leading-3">WARBY PARKER</p>
			<Image
				src="/img/glasses.png"
				alt=""
				width={120}
				height={60}
				objectFit="contain"
				className=" rounded-lg object-scale-down"
			/>
			<p className="text-xs leading-3 font-semibold text-black-10">Wilkie</p>
			<p className="text-[10px] font-light text-black-20 mt-1">
				Purely functional
			</p>

			<div className="flex w-full justify-center gap-x-2 items-center mt-3">
				<div className="flex w-3 h-3 bg-black-20 rounded-full ring-2 ring-white" />
				<div className="flex w-2 h-2 bg-blue-500 rounded-full " />
				<div className="flex w-2 h-2 bg-blue-20 rounded-full " />
				<div className="flex w-2 h-2 bg-yellow-500 rounded-full " />
			</div>

			<FontAwesomeIcon
				icon={faApplePay}
				className="w-full bg-black-30 text-white py-[2px] rounded-md text-[1.4rem] mt-5 mb-4"
			/>

			<div className="flex flex-col w-full h-full bg-white rounded-t-md rounded-b-[26px] px-4">
				<div className="flex w-dull justify-between items-center">
					<FontAwesomeIcon
						icon={faApplePay}
						className=" text-black-10 text-[1.8rem]"
					/>
					<p className="text-blue-10 text-xs font-medium">Cancel</p>
				</div>

				<hr />
				<div className="flex w-full py-4 justify-center gap-x-3 items-center text-black-20">
					<Image
						src="/img/visa.svg"
						alt=""
						width={40}
						height={6}
						objectFit="contain"
						className=" rounded-lg object-scale-down"
					/>
					<p className="text-[9px]">
						CHASE FREEDOM (...234) <br />
						27 FREDRICK AVE BROTHERS OR{" "}
					</p>
					<FontAwesomeIcon
						icon={faChevronRight}
						className=" text-blue-20 font-medium text-[0.6rem]"
					/>
				</div>
				<hr />
				<div className="flex w-full py-4 justify-center gap-x-3 items-center">
					<Image
						src="/img/visa.svg"
						alt=""
						width={40}
						height={6}
						objectFit="contain"
						className=" rounded-lg object-scale-down"
					/>
					<p className="text-[9px]">
						CHASE FREEDOM (...234) <br />
						27 FREDRICK AVE BROTHERS OR{" "}
					</p>
					<FontAwesomeIcon
						icon={faChevronRight}
						className=" text-blue-20 font-medium text-[0.6rem]"
					/>
				</div>
				<hr />
				<div className="flex w-full py-4 justify-center gap-x-3 items-center">
					<Image
						src="/img/visa.svg"
						alt=""
						width={40}
						height={6}
						objectFit="contain"
						className=" rounded-lg object-scale-down"
					/>
					<p className="text-[9px]">
						CHASE FREEDOM (...234) <br />
						27 FREDRICK AVE BROTHERS OR{" "}
					</p>
					<FontAwesomeIcon
						icon={faChevronRight}
						className=" text-blue-20 font-medium text-[0.6rem]"
					/>
				</div>
				<hr />
				<div className="flex w-full py-4 justify-center gap-x-3 items-center">
					<Image
						src="/img/visa.svg"
						alt=""
						width={40}
						height={6}
						objectFit="contain"
						className=" rounded-lg object-scale-down"
					/>
					<p className="text-[9px]">
						CHASE FREEDOM (...234) <br />
						27 FREDRICK AVE BROTHERS OR{" "}
					</p>
					<FontAwesomeIcon
						icon={faChevronRight}
						className=" text-blue-20 font-medium text-[0.6rem]"
					/>
				</div>
				<hr />
				<div className="flex py-2">
					<div className="flex w-1/4"></div>
					<p className="text-[9px] mr-auto">PAY-TOTAL</p>
					<p className="text-[9px]">$250.00</p>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default Phone;
