import { Metadata } from "next";
import TechnologyClient from "./technology-client";

export const metadata: Metadata = {
  title: "Technology | CADRATEC",
  description: "Discover the innovative technology and precision craftsmanship behind CADRATEC's luxury watch dials",
};

export default function TechnologyPage() {
  return <TechnologyClient />;
} 