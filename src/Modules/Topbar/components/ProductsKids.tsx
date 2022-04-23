import React from "react";
import { chipType, products } from "../../../Shared/Products";
import Chips from "./Chips";

const ProductsKids = () => {
	return (
		<div
			className="absolute top-0 left-0 z-50 overflow-auto bg-transparent flex-col
         hidden group-hover:flex translate-x-[-22%] translate-y-[8%]">
			<div className=" mx-auto bg-white rounded-md relative w-full grid grid-cols-3
          gap-x-10 min-w-[900px] py-8 px-8 shadow-2xl border-2">
				{/* col 1 */}
				<div className="flex flex-col space-y-8">
					<p className="text-[13px] font-medium text-gray-20 uppercase">
						Payments
					</p>
					{products
						.filter((chip: chipType, index: number) => index < 8)
						.map((chip: chipType, index: number) => (
							<Chips
								name={chip.name}
								icon={chip.icon}
								description={chip.description}
								key={index}
							/>
						))}
				</div>
				{/* col2 */}
				<div className="flex flex-col space-y-8">
					<p className="text-[13px] font-medium text-gray-20 uppercase">
						Financial Services
					</p>
					{products
						.filter((chip: chipType, index: number) => index > 14)
						.map((chip: chipType, index: number) => (
							<Chips
								name={chip.name}
								icon={chip.icon}
								description={chip.description}
								key={index}
							/>
						))}
				</div>
				{/* col3 */}
				<div className="flex flex-col space-y-8">
					<p className="text-[13px] font-medium text-gray-20 uppercase">
						Business Operations
					</p>
					{products
						.filter((chip: chipType, index: number) => index > 11)
						.map((chip: chipType, index: number) => (
							<Chips
								name={chip.name}
								icon={chip.icon}
								description={chip.description}
								key={index}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default ProductsKids;
