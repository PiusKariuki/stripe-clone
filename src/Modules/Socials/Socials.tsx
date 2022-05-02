import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { companyText } from "../../Shared/Company";
import { devText } from "../../Shared/Developers";
import { products, chipType } from "../../Shared/Products";
import { resourcesText } from "../../Shared/Resources";
import { uses } from "../../Shared/Uses";
import Text from "./components/Text";

const Socials = () => {
	return (
		<div
			className="flex flex-row flex-wrap md:flex-nowrap relative z-30 min-h-screen gap-14 md:gap-16  lg:gap-36
         py-[72px] px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[760px]">
			<div
				className="flex absolute w-[200vw] h-full lg:h-[110%] 4xl:h-[120%] origin-bottom-left
            -z-20 bg-gray-30 -skew-y-6 -left-1/4 top-10 "
			/>
			{/* ................................ */}
			<div className="flex flex-col max-w-[90vw] md:max-w-xs">
				<FontAwesomeIcon icon={faStripe} className="self-start text-6xl" />
				<div className="flex gap-x-4 items-center">
					<FontAwesomeIcon icon={faPaperPlane} className=" text-xs" />
					<p className="text-black-20 text-[15px]">United States</p>
				</div>
				<div className="flex gap-x-4 items-center">
					<FontAwesomeIcon icon={faComment} className=" text-xs" />
					<p className="text-black-20 text-[15px]">English (United States)</p>
				</div>
				<div className="flex gap-x-4  mt-8 md:mt-auto items-center">
					<p className="text-black-20 text-[15px] ">© 2022 Stripe, Inc.</p>
				</div>
			</div>

			<div className="flex flex-col md:-ml-10">
				<div className="flex flex-col gap-4 h-fit">
					<p className="text-[15px] text-black-30 font-semibold">Products</p>
					<div className="flex flex-col gap-1">
						{products.map((product: chipType, index: number) => (
							<Text key={index} text={product.name} />
						))}
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4 h-fit">
					<p className="text-[15px] text-black-30 font-semibold">Developers</p>
					<div className="flex flex-col gap-1">
						{devText.map((dev: string, index: number) => (
							<Text key={index} text={dev} />
						))}
					</div>
				</div>
				<div className="flex flex-col gap-4 h-fit">
					<p className="text-[15px] text-black-30 font-semibold">Company</p>
					<div className="flex flex-col gap-1">
						{companyText.map((dev: string, index: number) => (
							<Text key={index} text={dev} />
						))}
					</div>
				</div>
			</div>

			<div className="flex flex-row md:flex-col gap-20 md:gap-8">
				<div className="flex flex-col gap-4 h-fit">
					<p className="text-[15px] text-black-30 font-semibold">Use cases</p>
					<div className="flex flex-col gap-1">
						{uses
							.filter((dev: chipType, index: number) => index < 6)
							.map((dev: chipType, index: number) => (
								<Text key={index} text={dev.name} />
							))}
					</div>
				</div>
				<div className="flex flex-col gap-4 h-fit">
					<p className="text-[15px] text-black-30 font-semibold">Resources</p>
					<div className="flex flex-col gap-1">
						{resourcesText.map((dev: string, index: number) => (
							<Text key={index} text={dev} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Socials;
