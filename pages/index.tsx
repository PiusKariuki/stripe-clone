import type { NextPage } from "next";
import Hero from "../src/Modules/Hero/Hero";
import Icons from "../src/Modules/Icons/Icons";
import Topbar from "../src/Modules/Topbar/Topbar";
import styles from "../styles/Gradient.module.css";

const Home: NextPage = () => {
	return (
		<div
			className="flex flex-col w-screen px-8 xl:px-[120px] 2xl:px-[160px] 3xl:px-[200px]
         4xl:px-[760px] overflow-x-clip">
			<div className={`${styles.gradient}`} />
			<Topbar />
			<Hero />
         <Icons />
		</div>
	);
};

export default Home;
