import React from "react";
import NavModal from "./NavModal";
import ProductsKids from "./ProductsKids";
import UseCaseKids from "./UseCaseKids";

const Nav = () => {
	return (
		<div className=" hidden lg:flex self-center gap-x-10 items-center ">
			<div className="flex flex-col group relative h-10 justify-center">
				<p className="text-[15px] cursor-pointer text-white">Products</p>
				<NavModal>
					<ProductsKids />
				</NavModal>
			</div>
			<div className="flex flex-col group h-10 justify-center">
				<p className="text-[15px] cursor-pointer text-white">Use cases</p>
				<NavModal>
					<UseCaseKids />
				</NavModal>
			</div>
			<div className="flex flex-col group h-10 justify-center">
				<p className="text-[15px] cursor-pointer text-white">Developers</p>
			</div>
			<div className="flex flex-col group h-10 justify-center">
				<p className="text-[15px] cursor-pointer text-white">Company</p>
			</div>
			<div className="flex flex-col group h-10 justify-center">
				<p className="text-[15px] cursor-pointer text-white">Pricing</p>
			</div>
		</div>
	);
};

export default Nav;
