import React from "react";

import Navbar from "../../components/layout/Navbar";
import MealMatchPopup from "../../components/engine/MealMatchPopup";
import Hero from "../../components/home/Hero";
import HowYourMatchWorks from "../../components/home/HowYourMatchWorks";
import WhyMatch from "../../components/home/WhyMatch";

import SmoothiesSection from "../../components/menu/SmoothiesSection";
import SaladsSection from "../../components/menu/SaladsSection";
import ToastSandwichesSection from "../../components/menu/ToastSandwichesSection";
import WrapsSection from "../../components/menu/WrapsSection";

import PersonalisationSection from "../../components/home/PersonalisationSection";
import NutritionTransparency from "../../components/home/NutritionTransparency";
import GoalBasedPlans from "../../components/home/GoalBasedPlans";
import TrustSection from "../../components/home/TrustSection";

import FaqSection from "../../components/home/FaqSection";
import CtaBanner from "../../components/home/CtaBanner";
import Footer from "../../components/layout/Footer";

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

          <SaladsSection />

          <ToastSandwichesSection />

          <WrapsSection />

        </section>


        {/* =========================================
            MEAL MATCH CONTENT SECTION
        ========================================= */}
        <PersonalisationSection />


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