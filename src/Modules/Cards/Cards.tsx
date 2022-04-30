import React from "react";
import BarChart from "./components/BarChart";
import BlackPhone from "./components/BlackPhone";
import Invoice from "./components/Invoice";
import Phone from "./components/Phone";
import Visa from "./components/Visa";

const Cards = () => {
	return (
		<div
			className="flex  bg-gray-30 gap-6 lg:gap-8 overflow-x-clip
         pl-3 xl:pl-[120px] 2xl:pl-[160px] 3xl:pl-[200px] 4xl:pl-[760px]">
			<div className="flex flex-col items-center gap-6">
				<Visa />
				<Phone />
			</div>

			<div className="flex flex-col  gap-6">
            <div className="flex gap-x-4 relative">
              <Invoice /> 
              <BlackPhone />
            </div>
				
				<BarChart />
			</div>

			
		</div>
	);
};

export default Cards;
