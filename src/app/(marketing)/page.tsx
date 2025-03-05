"use client";

import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh] p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-center mb-4">Welcome to Cadratec</h1>
          <p className="text-xl text-center mb-8">
            Your trusted partner in professional tools and equipment
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link href="/auth/login">
              <Button>Get Started</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Sales</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Professional Tools</h3>
              <p>High-quality tools for professionals in every industry</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p>Track your equipment usage and performance metrics</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>Round-the-clock assistance for all your needs</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 