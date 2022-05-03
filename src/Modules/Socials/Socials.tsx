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
			className="flex flex-row flex-wrap md:flex-nowrap  relative md:-mt-10 z-30
          pt-[72px] pb-44 w-full gap-y-8 md:gap-x-24 lg:gap-x-28 overflow-y-clip">
			<div className="flex flex-col max-w-[90vw]">
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

			<div className="flex flex-row gap-x-8 md:gap-x-24 lg:gap-x-28">
				<div className="flex flex-col md:-ml-10  max-w-[40%] 320:max-w-full">
					<div className="flex flex-col gap-y-4 h-fit">
						<p className="text-[15px] text-black-30 font-semibold">Products</p>
						<div className="flex flex-col gap-1">
							{products.map((product: chipType, index: number) => (
								<Text key={index} text={product.name} />
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-40 md:gap-y-8">
					<div className="flex flex-col gap-4 h-fit">
						<p className="text-[15px] text-black-30 font-semibold">
							Developers
						</p>
						<div className="flex flex-col gap-1">
							{devText.map((dev: string, index: number) => (
								<Text key={index} text={dev} />
							))}
						</div>
					</div>
					<div className="flex flex-col gap-4 h-fit ">
						<p className="text-[15px] text-black-30 font-semibold">Company</p>
						<div className="flex flex-col gap-1">
							{companyText.map((dev: string, index: number) => (
								<Text key={index} text={dev} />
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row md:flex-col gap-x-8 320:gap-x-16 gap-y-8">
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
				<div className="flex flex-col gap-y-4 h-fit">
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
