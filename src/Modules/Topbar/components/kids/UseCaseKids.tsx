import React from "react";
import { chipType } from "../../../../Shared/Products";
import { uses } from "../../../../Shared/Uses";
import Chips from "../Chips";

const UseCaseKids = () => {
	return (
		<div
			className="absolute top-[66%] left-[-100%] z-50 overflow-auto bg-transparent flex-col
         hidden group-hover:flex">
			<div
				className="mx-auto bg-white rounded-md relative shadow-2xl border-[1px] px-8 py-8
            gap-y-6 min-w-[520px] flex flex-col">
				{uses
					.filter((chip: chipType, index: number) => index < 6)
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

export default UseCaseKids;
