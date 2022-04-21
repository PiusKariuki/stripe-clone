import React from "react";
import { chipType, products } from "../../../Shared/Products";
import Chips from "./Chips";

const ProductsKids = () => {
	return (
		<div className="grid grid-cols-3 gap-6">
			{/* col 1 */}
			<div className="flex flex-col">
				<p className="text-xl text-gray-20 uppercase">Payments</p>
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
			<div className="flex flex-col">
				<p className="text-xl text-gray-20 uppercase">Financial Services</p>
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
			<div className="flex flex-col">
				<p className="text-xl text-gray-20 uppercase">Business Operations</p>
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
	);
};

export default ProductsKids;
