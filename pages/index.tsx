import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../src/Modules/Cards/Cards";
import Code from "../src/Modules/Code/Code";
import Globe from "../src/Modules/Globe/Globe";
import Hero from "../src/Modules/Hero/Hero";
import Icons from "../src/Modules/Icons/Icons";
import Socials from "../src/Modules/Socials/Socials";
import Started from "../src/Modules/Started/Started";
import Tech from "../src/Modules/Tech/Tech";
import Topbar from "../src/Modules/Topbar/Topbar";
import Unified from "../src/Modules/Unified/Unified";
import styles from "../styles/Gradient.module.css";

const Home: NextPage = () => {
	return (
		<div
			className="flex flex-col w-screen  overflow-x-clip max-w-[100vw]">
			<div className={`${styles.gradient}`} />
			<Topbar />
			<Hero />
         <Icons />
         <Unified />
         <Cards />
         <Code />
         <Tech />
         <Globe />
         <Started />
         <Socials />
		</div>
	);
};

export default Home;
