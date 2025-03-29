import { AboutSection } from "@/components/about/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CadraTec - Swiss Luxury Watch Manufacturer",
  description: "Discover CadraTec's legacy of precision and innovation in Swiss watchmaking. Learn about our heritage, values, and commitment to crafting the future of luxury timepieces.",
};

export default function AboutPage() {
  return <AboutSection />;
} 