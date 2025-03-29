import { Metadata } from "next";
import ProductsClient from "./products-client";

export const metadata: Metadata = {
  title: "Products | CADRATEC",
  description: "Discover our exclusive collection of luxury watch dials crafted with Swiss precision",
};

export default function ProductsPage() {
  return <ProductsClient />;
} 