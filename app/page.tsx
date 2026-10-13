"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Organization from "@/components/Organization";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("splash-seen");
    if (alreadySeen) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splash-seen", "1");
    setSplashExiting(true);
    setTimeout(() => setShowSplash(false), 50);
  };

  return (
    <>
      {/* Splash screen — shown once per session, sits on top */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Main content — always rendered, just hidden under splash */}
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Organization />
          <Achievements />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
