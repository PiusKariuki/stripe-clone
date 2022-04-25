import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CompanyKids from "./kids/CompanyKids";
import DeveloperKids from "./kids/DeveloperKids";
import ProductsKids from "./kids/ProductsKids";
import UseCaseKids from "./kids/UseCaseKids";

const Nav = () => {
	return (
		<div className="hidden lg:flex gap-x-10 h-20 mt-3 relative">
			<div className="flex flex-col group relative">
				<p className="text-[15px] cursor-pointer text-white">Products</p>
				<ProductsKids />
				<FontAwesomeIcon
					icon={faDiamond}
					className="hidden group-hover:block group-hover:absolute text-white
               text-2xl top-[60%] z-50 left-[25%]"
				/>
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Use cases</p>
				<UseCaseKids />
				<FontAwesomeIcon
					icon={faDiamond}
					className="hidden group-hover:block group-hover:absolute text-white
               text-2xl top-[60%] z-50 left-[25%]"
				/>
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Developers</p>
				<DeveloperKids />
				<FontAwesomeIcon
					icon={faDiamond}
					className="hidden group-hover:block group-hover:absolute text-white
               text-2xl top-[60%] z-50 left-[25%]"
				/>
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Company</p>
				<CompanyKids />
				<FontAwesomeIcon
					icon={faDiamond}
					className="hidden group-hover:block group-hover:absolute text-white
               text-2xl top-[60%] z-50 left-[25%]"
				/>
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Pricing</p>
			</div>
		</div>
	);
};

export default Nav;
