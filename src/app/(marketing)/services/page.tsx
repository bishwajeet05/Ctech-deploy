import { ServicesSection } from "@/components/services/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | CadraTec - Swiss Luxury Watch Manufacturing Services",
  description: "Discover CadraTec's comprehensive range of watchmaking services, including pad printing, screen printing, SuperLuminova application, and specialized treatments.",
};

export default function ServicesPage() {
  return <ServicesSection />;
} 