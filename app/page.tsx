import Image from "next/image";
import { Button } from "../components/ui/button";
import Banner from "./components/home/Banner";
import Causes from "./components/home/mission";
import Welcome from "./components/home/Welcome";
import Services from "./components/home/Services";
import Testimonies from "./components/home/Testimonies";

const HomePage = () =>{
  return(
    <main>
      <Banner/>
      <div className="xl:px-[10%]">
      <Welcome/>
      <Causes/>
      <Services/>
      <Testimonies/>
      </div>
     
    </main>
  )
}

export default HomePage;
