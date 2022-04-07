import type { NextPage } from 'next'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
     <div className="flex h-[100vh] w-[100vw] relative">
		<Image
         className="object-scale-down"
			src="/img/bike.png"
			layout="fill"
         // objectFit="cover"
			priority={true}
         alt="img"
		/>
      </div>
	);
}

export default Home
