import React, { Children } from "react";

interface Props {
	children?: React.ReactNode;
}

const NavModal: React.FC<Props>= ({children}) => {
	return (
		<div
			className="absolute top-[0%] left-0 z-50 overflow-auto bg-transparent flex-col
         hidden group-hover:flex translate-x-[-22%] translate-y-[6%]">
			<div className="dialog shadow-2xl border-2">{children}</div>
		</div>
	);
};

export default NavModal;
