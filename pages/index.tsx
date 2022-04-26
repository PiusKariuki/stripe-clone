import type { NextPage } from "next";
import Topbar from "../src/Modules/Topbar/Topbar";
import styles from "../styles/Gradient.module.css";

const Home: NextPage = () => {
	return (
		<div className="flex flex-col w-screen px-8 2xl:px-[150px] 3xl:px-[200px] 4xl:px-[760px]">
			<div className={`${styles.gradient}`} />
			<Topbar />
		</div>
	);
};

export default Home;
