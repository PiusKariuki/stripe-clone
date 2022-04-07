import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
	return (
		<div>
			<Image
				src="/img/bike.png"
				width="800"
				height="500"
				layout="responsive"
				priority={true}
            alt="image"
			/>
		</div>
	);
};

export default About;
