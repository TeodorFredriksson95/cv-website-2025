
  import FeatureIcon from "@/components/FeatureIcon"; 
import Link from 'next/link';


  export default function Home() {
    return (
<div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen gap-16">
<main className="flex flex-col  row-start-2 w-full">
        
<section className="w-full px-8 py-20 sm:px-16 text-center sm:text-left">
  <div className="flex justify-center mb-10">
    <img
      src="/icons/Unidevweb_logo.png"
      alt="Unidevweb logo"
      className="w-auto max-h-20 sm:max-h-23 "
    />
  </div>

  <div className="flex flex-row sm:flex-row justify-center items-center w-full max-w-xl md:gap-20 mx-auto gap-10">
    <Link  href="/games">
     <FeatureIcon
      src="/icons/gamepad2.svg"
      alt="Gamepad icon"
      label="Game Development"
    />
  </Link >
    <Link  href="/web">
    <FeatureIcon
      src="/icons/webdev2.svg"
      alt="Web Icon"
      label="Web Development"
    />
    </Link >
    <Link  href="/appsandmobile">
    <FeatureIcon
      src="/icons/mobile2.svg"
      alt="Mobile Icon"
      label="App Development"
      />
      </Link >
    
  </div>
</section>



        </main>
        

      </div>
    );
  }



