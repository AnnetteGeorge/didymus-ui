"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function HeroSection() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <>
      {/* Meta SEO */}
      <Head>
        <title>Didymus UI – Live Translation, Projection & Customization</title>
        <meta
          name="description"
          content="Didymus UI is a simple and accessible tool for live translation, big-screen projection, and customizable settings to enhance accessibility."
        />
      </Head>

      <Navbar />

      <main className="scroll-smooth">
        {/* Hero Section */}
        <section
          id="home"
          className="bg-[#f4f6fa] text-[#1b2437] text-center py-20 px-4"
        >
          <h1 className="text-5xl  mb-4">Get Didymus on Your Device</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Experience live translation, big-screen projection, and full
            customization right from the Didymus app. Scan the QR code or use
            the links below to download.
          </p>

          <div className="mt-6 text-lg font-medium opacity-80">
            Smooth, simple, and designed for every screen.
          </div>

          {/*  Auto Sliding Image Carousel */}
          <div
            className="mt-12 flex justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div className="flex gap-8" animate={controls}>
              <img
                src="../image/slide1.png"
                alt="slide1"
                className="w-64 md:w-72 rounded-xl shadow-lg"
              />
              <img
                src="../image/slide2.png"
                alt="slide2"
                className="w-64 md:w-72 rounded-xl shadow-lg"
              />
              <img
                src="../image/slide3.png"
                alt="slide3"
                className="w-64 md:w-72 rounded-xl shadow-lg"
              />

              <img
                src="../image/slide4.png"
                alt="slide4"
                className="w-64 md:w-72 rounded-xl shadow-lg"
              />
              <img
                src="../image/slide5.png"
                alt="slide5"
                className="w-64 md:w-72 rounded-xl shadow-lg"
              />
              <img
                src="../image/slide6.png"
                alt="slide6"
                className="w-64 md:w-72 rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>
        <div className="border-t border-gray-300 my-1"></div>
        {/* About Us Section */}
        <section
          id="about-us"
          className="py-20 px-6 bg-white text-[#1b2437] text-center scroll-mt-20"
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-4xl font-bold mb-4">About Didymus</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-6">
              Didymus provides live voice-to-voice translation with
              auto-scrolling subtitles, helping bridge language gaps in worship.
              It promotes inclusion for younger generations and sets the
              foundation for future AI-driven church tools.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-[#FDF3E6] p-6 rounded-xl shadow">
                <h3 className="text-2xl font-semibold mb-2">
                  Live Translation
                </h3>
                <p className="text-gray-700">
                  Real-time voice-to-voice translation for seamless worship
                  experiences.
                </p>
              </div>
              <div className="bg-[#FDF3E6] p-6 rounded-xl shadow">
                <h3 className="text-2xl font-semibold mb-2">
                  Inclusion for All
                </h3>
                <p className="text-gray-700">
                  Accessible features for younger generations and non-native
                  speakers.
                </p>
              </div>
              <div className="bg-[#FDF3E6] p-6 rounded-xl shadow">
                <h3 className="text-2xl font-semibold mb-2">Future AI Tools</h3>
                <p className="text-gray-700">
                  Building the foundation for AI-driven church tools and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section
          id="features"
          className="py-20 px-6 bg-gradient-to-r from-[#D4E3E7] via-[#F1D0AD] to-[#FCD870] text-[#4B2E00]"
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              📥 Download the Didymus App
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mb-6">
              It’s easier to use Didymus in the apps. Scan the QR code below to
              download and get started.
            </p>

            {/* QR Code */}
            <img
              src="../image/My_App.png"
              alt="Scan to download Didymus App"
              className="w-40 h-40 mb-6"
            />

            {/* App Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-[#FFF1D0] text-[#4B2E00] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="bg-[#FFF1D0] text-[#4B2E00] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              >
                Download for Android
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#FDF3E6] to-[#f3c46e] text-[#4B2E00]">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <a
              href="#translation-live"
              className="bg-[#FFF1D0] text-[#4B2E00] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              It’s easier in the apps
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
