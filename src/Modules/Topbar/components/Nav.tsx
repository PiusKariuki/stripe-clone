import React from "react";
import NavModal from "./NavModal";
import ProductsKids from "./ProductsKids";

const Nav = () => {
	return (
		<div className=" hidden lg:flex self-center gap-x-10">
			<div className="flex flex-col group">
				<p className="text-[15px] cursor-pointer text-white">Products</p>
            <NavModal>
               <ProductsKids />
            </NavModal>
			</div>
			<div className="flex flex-col group">
				<p className="text-[15px] cursor-pointer text-white">Use cases</p>
			</div>
			<div className="flex flex-col group">
				<p className="text-[15px] cursor-pointer text-white">Developers</p>
			</div>
			<div className="flex flex-col group">
				<p className="text-[15px] cursor-pointer text-white">Company</p>
			</div>
			<div className="flex flex-col group">
				<p className="text-[15px] cursor-pointer text-white">Pricing</p>
			</div>
		</div>
	);
};

export default Nav;
