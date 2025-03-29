'use client';

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

// CadraTec coordinates in Switzerland
const CADRATEC_LOCATION = {
  lat: 47.2814,  // Replace with actual coordinates
  lng: 7.0574    // Replace with actual coordinates
};

export default function ContactPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapCenter = useMemo(() => CADRATEC_LOCATION, []);

  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    scrollwheel: false,
    styles: [
      {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [{ "color": "#242f3e" }]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{ "lightness": -80 }]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#746855" }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#d59563" }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{ "color": "#17263c" }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#515c6d" }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{ "lightness": -20 }]
      }
    ]
  }), []);

  return (
    <main className="relative min-h-screen antialiased">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-white/80 text-sm font-light tracking-[0.3em] uppercase">
              Contact
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white space-y-2">
              <span className="block">Get in Touch</span>
              <span className="block text-white/90">With Our Experts</span>
            </h2>
            <div className="w-24 h-[1px] bg-white/20 my-8" />
            <p className="text-white/70 text-lg font-light leading-relaxed">
              For inquiries about our luxury timepiece solutions and services, please reach out to our team. We look forward to discussing your specific requirements.
            </p>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 sm:p-12 border border-white/10"
          >
            <form className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-white/90 text-xl font-light">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white/50 mt-1" />
                  <div>
                    <p className="text-white/90 font-light">Address</p>
                    <p className="text-white/70 mt-1">Le Péquie 1, CH-2364 St-Brais, Switzerland</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white/50 mt-1" />
                  <div>
                    <p className="text-white/90 font-light">Phone</p>
                    <p className="text-white/70 mt-1">+41 32 322 34 35</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-white/50 mt-1" />
                  <div>
                    <p className="text-white/90 font-light">Email</p>
                    <p className="text-white/70 mt-1">info@cadratec.ch</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-6">
              <h3 className="text-white/90 text-xl font-light">Business Hours</h3>
              <div className="space-y-3 text-white/70">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden rounded-lg"
            >
              <div className="p-6">
                <h3 className="text-white/90 text-xl font-light mb-4">Location</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our facility is located in the picturesque Franches-Montagnes region of Canton Jura, Switzerland. The historic building, dating back to the 1950s, continues its legacy of precision watchmaking.
                </p>
              </div>
              <div className="h-[300px] w-full relative">
                {!isLoaded ? (
                  <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                    <div className="text-white/50">Loading map...</div>
                  </div>
                ) : (
                  <GoogleMap
                    zoom={15}
                    center={mapCenter}
                    mapContainerClassName="w-full h-full"
                    options={mapOptions}
                  >
                    <MarkerF position={mapCenter} />
                  </GoogleMap>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 