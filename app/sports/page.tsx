"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      
      {/* Header Component */}
      <Header />

      {/* Hero Header Section */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img src="/sport.jpg" alt="Sports Background" className="w-full h-full object-cover opacity-60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest leading-tight mb-6">
            Sports: <br/>
            <span className="font-light">Building a Healthy Body and Strong Mind</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <div className="font-serif text-lg md:text-xl leading-relaxed opacity-80 space-y-6 text-justify">
              <p>
                Sports play an important role in human life. They are not only a source of entertainment but also help in maintaining physical fitness, mental strength, and social development. From childhood to adulthood, sports teach discipline, teamwork, and leadership skills. Participation in sports activities helps individuals stay active, healthy, and confident. In today’s fast and technology-driven world, sports are essential for maintaining a balanced and healthy lifestyle.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Importance of Sports in Physical Health
              </h3>
              <p>
                Sports help improve physical fitness and overall health. Regular participation in sports activities strengthens muscles, improves stamina, and increases flexibility. Sports such as football, cricket, basketball, and athletics help maintain body weight and reduce the risk of obesity.
              </p>
              <p>
                Sports also improve heart health and strengthen the immune system. Physical activities help prevent diseases such as diabetes, high blood pressure, and heart problems. Children who participate in sports develop strong bones and healthy growth patterns. Sports encourage active living and reduce the harmful effects of a sedentary lifestyle.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Mental and Emotional Benefits of Sports
              </h3>
              <p>
                Sports not only improve physical health but also strengthen mental well-being. Playing sports reduces stress, anxiety, and depression. Physical activities release positive hormones that improve mood and increase happiness.
              </p>
              <p>
                Sports help individuals develop concentration, focus, and decision-making skills. Players learn how to handle pressure and stay calm during difficult situations. Sports also build self-confidence and emotional strength, which helps individuals face challenges in life.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Development of Social Skills
              </h3>
              <p>
                Sports help individuals develop important social skills. Team sports teach cooperation, communication, and teamwork. Players learn how to work together, respect teammates, and support each other to achieve common goals.
              </p>
              <p>
                Sports also teach discipline, respect for rules, and sportsmanship. Players learn how to accept victory with humility and handle defeat with courage. These qualities help individuals become responsible and respectful members of society.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Role of Sports in Education
              </h3>
              <p>
                Sports play an important role in the educational development of students. Schools and colleges encourage sports activities to promote physical and mental fitness. Students who participate in sports often perform better academically because sports improve concentration and time management skills.
              </p>
              <p>
                Sports also provide career opportunities in professional sports, coaching, fitness training, and sports management. Many students develop leadership qualities through sports participation, which helps them succeed in their professional lives.
              </p>

              <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 tracking-wide uppercase border-l-4 border-[#cf1f1f] pl-4">
                Importance of Sports for Children and Youth
              </h3>
              <p>
                Sports are especially important for children and young people. Playing sports helps children develop physical strength, coordination, and social interaction skills. Sports encourage children to stay active and reduce screen time spent on mobile phones and computers.
              </p>
              <p>
                Youth participation in sports helps prevent negative habits and promotes positive lifestyles. Sports teach young people the value of hard work, discipline, and determination. These qualities help them build strong character and achieve success in life.
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
