import type { NextPage } from "next";
import Cards from "../src/Modules/Cards/Cards";
import Code from "../src/Modules/Code/Code";
import Hero from "../src/Modules/Hero/Hero";
import Icons from "../src/Modules/Icons/Icons";
import Topbar from "../src/Modules/Topbar/Topbar";
import Unified from "../src/Modules/Unified/Unified";
import styles from "../styles/Gradient.module.css";

const Home: NextPage = () => {
	return (
		<div
			className="flex flex-col w-screen  overflow-x-clip">
			<div className={`${styles.gradient}`} />
			<Topbar />
			<Hero />
         <Icons />
         <Unified />
         <Cards />
         <Code />
		</div>
	);
};

export default Home;
