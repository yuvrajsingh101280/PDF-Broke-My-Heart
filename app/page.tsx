"use client";

import Comparison from "@/components/landing/Comparison";
import CTA from "@/components/landing/cta";
import Demo from "@/components/landing/demo";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import OpenSource from "@/components/landing/open-source";
import Security from "@/components/landing/security";
import Stats from "@/components/landing/stats";
import ToolsGrid from "@/components/landing/tools-grid";
import Image from "next/image";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Stats />
      <ToolsGrid />
      <Demo />
      <HowItWorks />
      <Security />
      <OpenSource />
      <Comparison />
      <Features />
      <FAQ />
      <CTA />
    </main>
  );
}
