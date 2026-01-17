import ContactSection from "@/component/contact";
import FAQComponent from "@/component/faq";
import FastestNameSection from "@/component/fastest-name";
import Footer from "@/component/footer";
import GoogleReviewsSection from "@/component/google-reviews";
import HeroCarousel from "@/component/hero-section";
import Navbar from "@/component/navbar";
import RoadmapComponent from "@/component/road-map";
import ServicesSection from "@/component/service";
import WhyChooseSection from "@/component/whywechoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <ServicesSection />
      <RoadmapComponent />
      <WhyChooseSection />
      <FastestNameSection />
      <GoogleReviewsSection />
      <ContactSection />
      <FAQComponent />
      <Footer />
    </>
  );
}
