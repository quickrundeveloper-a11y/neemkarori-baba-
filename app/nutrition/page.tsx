"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      
      {/* Header Component */}
      <Header />

      {/* Hero Header Section */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Background Image - Placeholder or Reuse one */}
        <div className="absolute inset-0 z-0">
             <img src="/Nutrition.jpg" alt="Nutrition Background" className="w-full h-full object-cover opacity-60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest leading-tight mb-6">
            Nutrition: <br/>
            <span className="font-light">Helping the Country Fight Against Malnutrition</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <div className="font-serif text-lg md:text-xl leading-relaxed opacity-80 space-y-6 text-justify">
              <p>
                Nutrition is the foundation of a healthy and productive society. Proper nutrition provides the body with essential nutrients needed for growth, development, and overall well-being. A well-nourished population contributes to the progress and strength of a nation. However, malnutrition remains a major challenge in many parts of the country, affecting children, women, and families. Spreading awareness about balanced diets and promoting healthy eating habits are important steps in fighting malnutrition and building a healthier future.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Understanding Nutrition
              </h3>
              <p>
                Nutrition refers to the intake of food that provides essential nutrients such as proteins, carbohydrates, fats, vitamins, minerals, and water. Each of these nutrients plays a vital role in maintaining body functions, providing energy, strengthening immunity, and supporting mental and physical development.
              </p>
              <p>
                A balanced diet includes a variety of foods like fruits, vegetables, grains, dairy products, and protein-rich foods. Proper nutrition helps individuals stay active, healthy, and capable of performing daily activities efficiently.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                What is Malnutrition?
              </h3>
              <p>
                Malnutrition occurs when the body does not receive the right amount of nutrients. It can result from lack of food, poor diet, or improper absorption of nutrients. Malnutrition includes both undernutrition and overnutrition.
              </p>
              <p>
                Undernutrition happens when individuals do not get enough nutrients, leading to weakness, poor growth, and low immunity. Overnutrition occurs when individuals consume excessive unhealthy food, which can cause obesity and lifestyle diseases such as diabetes and heart problems.
              </p>
              <p>
                Malnutrition is especially harmful to children because it affects their physical growth, brain development, and learning abilities.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Causes of Malnutrition
              </h3>
              <p>
                Several factors contribute to malnutrition. Poverty is one of the main causes, as many families cannot afford nutritious food. Lack of awareness about balanced diets also leads to poor food choices. Many people focus only on filling their stomachs rather than consuming nutrient-rich food.
              </p>
              <p>
                Poor sanitation and unsafe drinking water can cause infections and diseases, which reduce the body’s ability to absorb nutrients. Lack of proper healthcare and poor maternal nutrition during pregnancy can also result in malnourished children.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Impact of Malnutrition on the Nation
              </h3>
              <p>
                Malnutrition affects not only individual health but also the development of the country. Children suffering from malnutrition often face poor academic performance and reduced productivity in adulthood. This affects the quality of the workforce and slows economic growth.
              </p>
              <p>
                Malnutrition increases healthcare costs and raises child mortality rates. A nation cannot grow and prosper if its population is unhealthy. Therefore, improving nutrition is essential for national progress.
              </p>
            </div>
          </div>

          <div className="text-center mt-20 border-t border-white/10 pt-12">
            <Link href="/" className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-sans tracking-widest uppercase text-sm">
              Return Home
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}
