import React, { Children } from "react";

interface Props {
	children?: React.ReactNode;
}

const NavModal: React.FC<Props>= ({children}) => {
	return (
		<div className="dialog-wrapper hidden group-hover:flex">
			<div className="dialog">{children}</div>
		</div>
	);
};

export default NavModal;
