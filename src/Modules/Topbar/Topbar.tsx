import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

const Topbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className="flex w-full justify-between z-10 pt-8 lg:pt-5
          px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px]  4xl:px-[760px]">
			<FontAwesomeIcon
				icon={faStripe}
				color="white"
				className="text-[3rem] -mt-2"
			/>

			<button
				onClick={() => setOpen(true)}
				className="flex lg:hidden sign-btn ">
				<FontAwesomeIcon icon={faBars} className="text-base" />
			</button>

			{open ? <Sidebar setOpen={setOpen} /> : null}
			<Nav />

			<button className="hidden lg:flex sign-btn group">
				Sign in{" "}
				<span className="border-white ml-2 arrow before:border-white align-middle" />
			</button>
		</div>
	);
};

export default Topbar;
