import Image from "next/image";
import HeroSection from "./components/Hero";
import TrendingSection from "./Tresnding";
import Footer from "./components/Footer";
import FeaturesSection from "./components/shipCard";
import Cardas from "./components/cards";

export default function Home() {
  return (
 <>
 <HeroSection/>
 <Cardas/>
 <TrendingSection/>
 <FeaturesSection/>

 </>
  );
}
