import FAQComponent from "@/component/faq";
import Navbar from "@/component/navbar";
import RoadmapComponent from "@/component/road-map";
import Image from "next/image";

export default function Home() {
  return (
     <>
     <Navbar />
     <RoadmapComponent />
     <FAQComponent />
     </>
  );
}
