import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import styles from "./styles/Topbar.module.css";

const Topbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className="flex flex-nowrap w-full justify-between lg:justify-between  relative
         pt-8 px-8 pb-3 lg:pt-[10.3px] xl:px-[150px]">
			<div className={styles.gradient} />
			<FontAwesomeIcon icon={faStripe} color="white" className="text-5xl" />
			<button onClick={() => setOpen(true)} className="md:hidden sign-btn">
				<FontAwesomeIcon icon={faBars} className="text-base" />
			</button>
			<div className="pt-3">
				{open ? <Sidebar setOpen={setOpen} /> : null}
				<Nav />
			</div>
			<button className="hidden lg:flex sign-btn mt-3">Sign in {">"}</button>
		</div>
	);
};

export default Topbar;
