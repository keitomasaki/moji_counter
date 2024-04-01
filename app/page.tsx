import styles from './global.module.css'
import Image from "next/image";

const Home = () => {
  return (
    <div >
       <Image
            src="/app_bg_image.webp" 
            alt="Top Image"
            layout="fill"
            objectFit="cover"
          />
    </div>
  );
};

export default Home;
