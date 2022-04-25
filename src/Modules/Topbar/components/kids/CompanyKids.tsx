import {
	faBriefcase,
	faCity,
	faEarthAfrica,
	faGift,
   faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CompanyKids = () => {
	return (
		<div
			className="absolute top-[73%] left-0 z-50 overflow-auto bg-transparent flex-col
         hidden group-hover:flex translate-x-[-65%] translate[15%]">
			<div
				className="mx-auto bg-white rounded-md relative shadow-2xl border-[1px]  pt-8 gap-y-6
            min-w-[500px] flex flex-col ">
				<div className="flex flex-wrap px-10 gap-y-6">
					<div className="flex w-1/2 gap-x-3 group">
						<FontAwesomeIcon
							icon={faCity}
							className="text-gray-20 group-hover:text-black-10 text-sm
                  "
						/>
						<p className="text-[14px] text-black-10 group-hover:text-black-10">
							Customers{" "}
						</p>
					</div>
					<div className="flex w-1/2 gap-x-3 group">
						<FontAwesomeIcon
							icon={faCity}
							className="text-gray-20 group-hover:text-black-10 text-sm
                  "
						/>
						<p className="text-[14px] text-black-10">Newsroom </p>
					</div>
					<div className="flex w-1/2 gap-x-3 group">
						<FontAwesomeIcon
							icon={faEarthAfrica}
							className="text-gray-20 group-hover:text-black-10  
                  "
						/>
						<p className="text-[14px] text-black-10">Enterprise </p>
					</div>
					<div className="flex w-1/2 gap-x-3 group">
						<FontAwesomeIcon
							icon={faCity}
							className="text-gray-20 group-hover:text-black-10   text-sm
                  "
						/>
						<p className="text-[14px] text-black-10">Partners </p>
					</div>
					<div className="flex w-1/2 gap-x-3 group">
						<FontAwesomeIcon
							icon={faBriefcase}
							className="text-gray-20 group-hover:text-black-10 
                  "
						/>
						<p className="text-[14px] text-black-10">Jobs </p>
					</div>
					<div className="flex w-1/2 gap-x-3 group">
						<FontAwesomeIcon
							icon={faGift}
							className="text-gray-20 group-hover:text-black-10 
                  "
						/>
						<p className="text-[14px] text-black-10">Sessions </p>
					</div>
				</div>

				<div className="flex w-full gap-y-4 bg-gray-30 px-10 py-8 group gap-x-3">
					<FontAwesomeIcon
						icon={faPenNib}
						className="text-gray-20 group-hover:text-black-10 
                  "
					/>
					<div className="flex flex-col ">
						<p className="text-[15px] text-black-10">From the blog </p>
						<p className="text-[14px] text-gray-20 group-hover:text-black-10 ">
							Stripe’s payments APIs: the first ten years
						</p>
						<p className="text-[14px] text-gray-20 group-hover:text-black-10 ">
							European payment methods available worldwide
						</p>
						<p className="text-[14px] text-gray-20 group-hover:text-black-10 ">
							We built Checkout so you don`t have to
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyKids;
