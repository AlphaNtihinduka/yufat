import Image from "next/image";
import { Button } from "../components/ui/button";
import Banner from "./components/home/Banner";
import Causes from "./components/home/Causes";
import Welcome from "./components/home/Welcome";
import Services from "./components/home/Services";
import Testimonies from "./components/home/Testimonies";

const HomePage = () =>{
  return(
    <main>
      <Banner/>
      <Welcome/>
      <Causes/>
      <Services/>
      <Testimonies/>
    </main>
  )
}

export default HomePage;
