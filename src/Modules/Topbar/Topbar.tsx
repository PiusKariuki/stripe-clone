import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles/Topbar.module.css";

const Topbar = () => {
	return (
		<div className="flex flex-nowrap  justify-between relative pt-8 px-8 pb-3">
			<div className={styles.gradient} />
			<p className="text-white font-semibold text-2xl">stripe</p>
			<button
				className="md:hidden h-8 px-4  self-center py-[0rem] rounded-[2rem] text-white
            bg-[hsla(0,0%,100%,0.2)] border-[1px] border-[hsla(0,0%,100%,0.2)]">
				<FontAwesomeIcon icon={faBars} className="text-base" />
			</button>
		</div>
	);
};

export default Topbar;
