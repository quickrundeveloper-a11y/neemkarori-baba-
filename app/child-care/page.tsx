"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ChildCarePage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      
      {/* Header Component */}
      <Header />

      {/* Hero Header Section */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img src="/illchi.jpg" alt="Child Care Background" className="w-full h-full object-cover opacity-60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest leading-tight mb-6">
            Care and <br/>
            <span className="font-light">Challenges of Sick Children</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <div className="font-serif text-lg md:text-xl leading-relaxed opacity-80 space-y-6 text-justify">
              <p>
                Children are the foundation of a healthy and progressive society. Their physical and emotional well-being is extremely important for their growth and development. However, when children fall sick, it creates serious challenges not only for them but also for their families. Sick children require special attention, medical care, emotional support, and a safe environment to recover properly. Understanding the care and challenges faced by sick children helps families and society provide better support for their well-being.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Common Causes of Illness in Children
              </h3>
              <p>
                Children often fall sick because their immune systems are still developing. They are more vulnerable to infections, seasonal diseases, and environmental factors. Common illnesses among children include fever, cold, flu, respiratory infections, stomach infections, and nutritional deficiencies. Some children may also suffer from chronic diseases such as asthma, diabetes, or congenital health conditions.
              </p>
              <p>
                Poor hygiene, unhealthy food habits, pollution, and lack of proper healthcare can also increase the risk of illness in children. Weather changes and weak immunity make children more sensitive to infections.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Physical Challenges Faced by Sick Children
              </h3>
              <p>
                When children become ill, they often experience weakness, fatigue, pain, and discomfort. Illness may reduce their appetite and disturb their sleep patterns. Many children lose interest in playing and daily activities, which affects their overall development.
              </p>
              <p>
                In serious cases, children may require hospitalization or long-term medical treatment. Frequent illness can slow physical growth and affect their ability to participate in school and social activities.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Emotional and Psychological Challenges
              </h3>
              <p>
                Sickness not only affects children physically but also emotionally. Sick children may feel scared, lonely, or anxious, especially when they have to stay away from their friends or attend hospital visits. Medical procedures and treatments can sometimes create fear and stress.
              </p>
              <p>
                Children need emotional support and reassurance from parents and caregivers. Love, care, and encouragement help children remain positive and mentally strong during illness. Talking to children calmly and explaining their condition in simple language helps reduce fear and anxiety.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Importance of Proper Medical Care
              </h3>
              <p>
                Timely medical treatment is essential for sick children. Parents should consult qualified doctors when children show symptoms such as high fever, weakness, unusual behavior, or breathing difficulties. Regular medical check-ups help detect health problems early.
              </p>
              <p>
                Vaccination is also important in protecting children from serious diseases. Following doctors’ advice and completing medical treatments ensures faster recovery and prevents complications.
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
