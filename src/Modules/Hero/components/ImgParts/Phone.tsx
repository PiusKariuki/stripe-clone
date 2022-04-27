import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApplePay } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Phone = () => {
	return (
		<div
			className="flex flex-col w-[264px] h-[533px] rounded-[36px] bg-white
         py-[24px] px-4 items-center border-8 gap-y-4">
			<Image
				src="/img/small.png"
				alt=""
				width={100}
				height={100}
				objectFit="contain"
				className="-rotate-90 rounded-lg object-scale-down"
			/>
			<div className="flex flex-col items-center">
				<p className="text-black-10 text-[0.8rem] font-semibold">
					Increment Magazine
				</p>
				<p className="text-black-20 text-[0.8rem] font-light">
					$14 per quarter
				</p>
			</div>

			<FontAwesomeIcon
				icon={faApplePay}
				className="w-full bg-black-30 text-white py-1 rounded-md text-[1.4rem]"
			/>

			<div className="flex w-full items-center justify-center text-black-20">
				<hr className="w-1/4" />
				<p className="mx-2 text-xs">Or pay with card</p>
				<hr className="w-1/4" />
			</div>

			<div className="flex flex-col w-full gap-y-4">
				{/* email */}
				<div className="flex flex-col gap-y-1">
					<label htmlFor="email" className="text-xs text-black-20">
						Email
					</label>
					<input
						id="email"
						className="border-[1px] rounded shadow-md focus:outline-none"
						readOnly
					/>
				</div>

				{/* card info */}
				<div className="flex flex-col gap-y-1">
					<label htmlFor="card" className="text-xs text-black-20">
						Card Information
					</label>
					<div className="flex flex-col w-full placeholder:text-green-500">
						<div className="flex w-full relative">
							<input
								id="card"
								className="border-x-[0.5px] border-t-[0.5px] rounded-t
                        focus:outline-none w-full  placeholder:text-xs px-2 placeholder:text-black-20"
								readOnly
								placeholder="Number"
							/>
							{/* absolute cards */}
							<div className="absolute left-[60%]">
								<Image
									src="/img/small.png"
									alt=""
									width={15}
									height={27}
									objectFit="contain"
									className="object-scale-down"
								/>
							</div>
							<div className="absolute left-[70%]">
								<Image
									src="/img/cc3.png"
									alt=""
									width={15}
									height={27}
									objectFit="contain"
									className="object-scale-down"
								/>
							</div>
							<div className="absolute left-[80%]">
								<Image
									src="/img/cc3.png"
									alt=""
									width={15}
									height={27}
									objectFit="contain"
									className="object-scale-down"
								/>
							</div>
							<div className="absolute left-[90%]">
								<Image
									src="/img/cc4.png"
									alt=""
									width={15}
									height={27}
									objectFit="contain"
									className="object-scale-down"
								/>
							</div>
						</div>
						<div className="flex w-full">
							<div className="flex w-full relative rounded-bl border-[0.5px]">
								<input
									id="card"
									className="shadow-md focus:outline-none w-full rounded-bl
                           placeholder:text-xs px-2 placeholder:text-black-20"
									readOnly
									placeholder="MM/YY"
								/>
							</div>
							<div className="flex w-full relative rounded-br border-[0.5px] border-l-0">
								<input
									id="card"
									className="shadow-md focus:outline-none w-full rounded-br
                           placeholder:text-xs px-2 placeholder:text-black-20"
									readOnly
									placeholder="CVC"
								/>
								<div className="absolute left-[80%]">
									<Image
										src="/img/cc3.png"
										alt=""
										width={15}
										height={27}
										objectFit="contain"
										className="object-scale-down"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* country */}
				<div className="flex flex-col w-full">
					<label htmlFor="email" className="text-xs text-black-20 mb-2">
						Country or region
					</label>
					<div className="flex w-full relative border-[0.5px]">
						<input
							id="email"
							className=" rounded-t focus:outline-none w-full
                     placeholder:text-xs px-2 placeholder:text-black-20"
							readOnly
							placeholder="United States"
						/>
						<FontAwesomeIcon
							icon={faChevronDown}
							className=" absolute left-[90%] text-black-20 text-xs top-[30%]"
						/>
					</div>
					<div className="flex w-full border-[0.5px] border-t-0">
						<input
							id="email"
							className=" rounded-b shadow-md focus:outline-none w-full
                     placeholder:text-xs px-2 placeholder:text-black-20"
							readOnly
							placeholder="ZIP"
						/>
					</div>
				</div>
			</div>
			<button className="w-full bg-black-30 text-white py-[3px] rounded-md text-sm mt-1">
				Pay
			</button>
		</div>
	);
};

export default Phone;
