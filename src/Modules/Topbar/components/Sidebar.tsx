import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { chips, chipType } from "../../../Shared/Chips";
import ProductChips from "./ProductChips";

interface Props {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ setOpen }) => {
	return (
		<div className=" dialog-wrapper">
			<div className="dialog px-6 pt-6 h-screen mt-4">
				<div className="flex justify-between items-center text-[#8898AA] mb-5">
					<p className=" text-sm uppercase font-semibold">products</p>
					<FontAwesomeIcon
						icon={faTimes}
						className="text-2xl"
						onClick={() => setOpen(false)}
					/>
				</div>
				<div 
            className="flex flex-row flex-wrap w-full gap-y-4 gap-x-10 pl-3">
					{chips.map((chip: chipType, key: number) => (
						<ProductChips
							name={chip.name}
							icon={chip.icon}
							description={chip.description}
							key={key}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
