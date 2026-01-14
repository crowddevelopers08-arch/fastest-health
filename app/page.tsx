import ContactSection from "@/component/contact";
import FAQComponent from "@/component/faq";
import FastestNameSection from "@/component/fastest-name";
import GoogleReviewsSection from "@/component/google-reviews";
import Navbar from "@/component/navbar";
import RoadmapComponent from "@/component/road-map";
import ServicesSection from "@/component/service";
import WhyChooseSection from "@/component/whywechoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <RoadmapComponent />
      <ServicesSection />
      <WhyChooseSection />
      <FastestNameSection />
      <FAQComponent />
      <GoogleReviewsSection />
      <ContactSection />
    </>
  );
}
