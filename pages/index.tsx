import type { NextPage } from "next";
import Topbar from "../src/Modules/Topbar/Topbar";


const Home: NextPage = () => {
	return ( 
		<div className="flex flex-col w-full ">
         <Topbar />
		</div>
	);
};

export default Home;
