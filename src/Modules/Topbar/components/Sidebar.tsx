import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { chips, chipType } from "../../../Shared/Chips";
import Chips from "./Chips";

interface Props {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ setOpen }) => {
	return (
		<div className=" dialog-wrapper">
			<div className="dialog px-6 pt-6 pb-6 mt-4">
				<div className="flex justify-between items-center text-[#8898AA] mb-5">
					<p className=" text-sm uppercase font-semibold text-gray-20">
						products
					</p>
					<FontAwesomeIcon
						icon={faTimes}
						className="text-2xl"
						onClick={() => setOpen(false)}
					/>
				</div>
				{/* .....................product chips div................. */}
				<div className="flex flex-wrap w-full gap-y-4 pl-3 justify-between">
					{chips.map((chip: chipType, key: number) => (
						<Chips
							name={chip.name}
							icon={chip.icon}
							description={chip.description}
							color="purple"
							key={key}
						/>
					))}
				</div>

				<p className=" text-sm uppercase font-semibold text-gray-20 mt-12">
					use cases
				</p>

				{/* ........................use case chips div............. */}
				<div className="flex flex-wrap w-full gap-y-4 pl-3 justify-between pt-4">
					{chips
						.filter((chip: chipType, index: number) => index < 6)
						.map((chip: chipType, index: number) => (
							<Chips
								name={chip.name}
								icon={chip.icon}
								description={chip.description}
								color="#88add2"
								key={index}
							/>
						))}
				</div>
				{/* ........................2ndd row use case chips div............. */}
				<div className="flex flex-wrap w-full gap-y-4 pl-3 justify-between pt-4 mt-8">
					{chips
						.filter((chip: chipType, index: number) => index > 9)
						.map((chip: chipType, index: number) => (
							<Chips
								name={chip.name}
								icon={chip.icon}
								description={chip.description}
								color="#88add2"
								key={index}
							/>
						))}
				</div>
            <button className="blue-btn self-center mt-12">Sign in</button>
			</div>
		</div>
	);
};

export default Sidebar;
