import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import styles from "./styles/Topbar.module.css";

const Topbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-nowrap  justify-between relative pt-8 px-8 pb-3">
			<div className={styles.gradient} />
			<p className="text-white font-semibold text-2xl">stripe</p>
			<button
				onClick={() => setOpen(true)}
				className="md:hidden h-8 px-4  self-center py-[0rem] rounded-[2rem] text-white
            bg-[hsla(0,0%,100%,0.2)] border-[1px] border-[hsla(0,0%,100%,0.2)]">
				<FontAwesomeIcon icon={faBars} className="text-base" />
			</button>
			{open ? <Sidebar setOpen={setOpen} /> : null}
		</div>
	);
};

export default Topbar;
