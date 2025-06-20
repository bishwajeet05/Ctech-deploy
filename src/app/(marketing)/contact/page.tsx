"use client";

import { NavHeader } from "@/components/marketing/nav-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F2F3F4]">
      <NavHeader />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/10 via-transparent to-[#ffffff]/20" />
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#c4a484]/20 via-[#b8860b]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#F2F3F4] to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(#00000009 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-base font-semibold text-gray-900">Address</dt>
                  <dd className="mt-2 text-base text-gray-600">
                    123 Watch Street<br />
                    Luxury District<br />
                    Geneva, Switzerland
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold text-gray-900">Phone</dt>
                  <dd className="mt-2 text-base text-gray-600">+41 22 123 4567</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold text-gray-900">Email</dt>
                  <dd className="mt-2 text-base text-gray-600">contact@cadratec.com</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold text-gray-900">Hours</dt>
                  <dd className="mt-2 text-base text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <Card className="p-6 bg-white/[0.7] backdrop-blur-[12px]">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 