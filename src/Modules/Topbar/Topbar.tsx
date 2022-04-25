import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import styles from "./styles/Topbar.module.css";
import arrow from "../../../styles/Arrow.module.css";

const Topbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className="flex flex-nowrap w-screen justify-between  relative
         pt-8 px-8 pb-3 lg:pt-[10.3px] xl:px-[150px]">
			<div className={styles.gradient} />
			<FontAwesomeIcon
				icon={faStripe}
				color="white"
				className="flex text-5xl"
			/>
			<button
				onClick={() => setOpen(true)}
				className="flex md:hidden sign-btn justify-end">
				<FontAwesomeIcon icon={faBars} className="text-base" />
			</button>

			{open ? <Sidebar setOpen={setOpen} /> : null}

			<Nav />
			<button className="hidden lg:flex sign-btn mt-3 group">
				Sign in{" "}
				<span className="border-white ml-2 arrow before:border-white"></span>
			</button>
		</div>
	);
};

export default Topbar;
