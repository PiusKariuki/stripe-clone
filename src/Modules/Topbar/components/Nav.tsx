import React from "react";
import CompanyKids from "./CompanyKids";
import DeveloperKids from "./DeveloperKids";
import ProductsKids from "./ProductsKids";
import UseCaseKids from "./UseCaseKids";

const Nav = () => {
	return (
		<div className=" hidden lg:flex self-center gap-x-10 h-20">
			<div className="flex flex-col group relative">
				<p className="text-[15px] cursor-pointer text-white">Products</p>
				<ProductsKids />
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Use cases</p>
				<UseCaseKids />
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Developers</p>
            <DeveloperKids />
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Company</p>
            <CompanyKids />
			</div>
			<div className="flex flex-col group relative ">
				<p className="text-[15px] cursor-pointer text-white">Pricing</p>
			</div>
		</div>
	);
};

export default Nav;
