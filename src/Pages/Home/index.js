import React from "react";

import Navbar from "../../component/Navbar";
import MealMatchPopup from "../../component/MealMatchPopup";
import Hero from "../../component/Hero";
import HowYourMatchWorks from "../../component/HowYourMatchWorks";
import WhyMatch from "../../component/WhyMatch";

import SmoothiesSection from "../../component/SmoothiesSection";
import Salads from "../../component/Salads";
import ToastAndSandwiches from "../../component/ToastAndSandwiches";
import WrapsSection from "../../component/WrapsSection";

import MealMatchSection1 from "../../component/MealMatchSection1";
import NutritionTransparency from "../../component/NutritionTransparency";
import GoalBasedPlans from "../../component/GoalBasedPlans";
import TrustSection from "../../component/TrustSection";

import FaqSection from "../../component/FaqSection";
import CtaBanner from "../../component/CtaBanner";
import Footer from "../../component/Footer";

/* =========================================
   MEAL MATCH PLANS
   Home folder:
   src/Pages/Home

   MealMatchPlans folder:
   src/Pages/MealMatchPlans
========================================= */
import MealMatchPlans from "../MealMatchPlans";

import "./index.css";

export default function Home() {
  return (
    <div
      id="home"
      className="home-page"
    >
      {/* =========================================
          NAVBAR
      ========================================= */}
      <Navbar />

      {/* =========================================
          FLOATING MEAL MATCH POPUP
      ========================================= */}
      <MealMatchPopup />

      <main>

        {/* =========================================
            HERO
        ========================================= */}
        <Hero />


        {/* =========================================
            HOW YOUR MATCH WORKS
        ========================================= */}
        <HowYourMatchWorks />


        {/* =========================================
            WHY MEAL MATCH
        ========================================= */}
        <WhyMatch />


        {/* =========================================
            MENU
        ========================================= */}
        <section id="menu">

          <SmoothiesSection />

          <Salads />

          <ToastAndSandwiches />

          <WrapsSection />

        </section>


        {/* =========================================
            MEAL MATCH CONTENT SECTION
        ========================================= */}
        <MealMatchSection1 />


        {/* =========================================
            NUTRITION TRANSPARENCY
        ========================================= */}
        <NutritionTransparency />


        {/* =========================================
            GOAL BASED PLANS
        ========================================= */}
        <GoalBasedPlans />


        {/* =========================================
            TESTIMONIALS
        ========================================= */}
        <TrustSection />


        {/* =========================================
            SUBSCRIPTION PLANS
            +
            MEAL MATCH ENGINE

            IMPORTANT:
            MealMatchEngine is already inside
            MealMatchPlans.
        ========================================= */}
        <MealMatchPlans />


        {/* =========================================
            FAQ
        ========================================= */}
        <FaqSection />


        {/* =========================================
            FINAL CTA
        ========================================= */}
        <CtaBanner />

      </main>


      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />

    </div>
  );
}