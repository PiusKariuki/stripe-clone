import React from "react";
import Logo from "./Logo";
import Reports from "./Reports";
import SearchBar from "./SearchBar";
import Today from "./Today";

const Charts = () => {
	return (
		<div
			className="w-[929px] h-[550px] p-6 bg-transparent opacity-100 rounded-xl shadow-2xl
          grid grid-cols-4 grid-rows-15 gap-2 ">
			<Logo />
			<SearchBar />
			<Today />
			<Reports />
		</div>
	);
};

export default Charts;
