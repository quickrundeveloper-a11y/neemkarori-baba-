"use client";

import React from 'react';
import Header from '@/components/Header';

export default function SocialResponsibilityPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-32 md:py-48 max-w-4xl">
        
        {/* Header */}
        <header className="mb-16 md:mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="w-20 h-1 bg-[#cf1f1f] mb-8"></div>
          <h1 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-widest leading-tight mb-6">
            Tradition and <br/>
            Social <span className="text-[#cf1f1f]">Responsibility</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/60">
            "Cow care is an essential responsibility that supports agriculture, economy, environment, and cultural traditions."
          </p>
        </header>

        {/* Article Body */}
        <article className="font-serif text-lg md:text-xl leading-relaxed text-white/80 space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          
          <p>
            Cow care is an essential responsibility that supports agriculture, economy, environment, and cultural traditions. Proper care of cows ensures their health, productivity, and well-being. Providing nutritious food, clean water, safe shelter, and medical care helps cows live healthy and productive lives.
          </p>

          <p>
            Cow care also promotes sustainable farming, environmental protection, and social compassion. By protecting cows and supporting animal welfare, society can maintain ecological balance and preserve cultural values.
          </p>

          <h3 className="font-sans text-2xl font-bold text-white mt-12 mb-4 uppercase tracking-wider">A Symbiotic Relationship</h3>
          
          <p>
            In today’s modern world, cow care reminds us about the importance of kindness, responsibility, and respect for nature. The relationship between humans and cows has been central to agricultural societies for millennia, providing not just sustenance but also organic fertilizer that enriches the soil without the harmful effects of chemicals.
          </p>

          <p>
            By working together, individuals, farmers, and organizations can create a better future for cows and our planet. This involves supporting ethical dairy practices, creating sanctuaries for old and non-productive cows, and recognizing the intrinsic value of these gentle creatures beyond their economic utility.
          </p>

          <div className="border-l-4 border-[#cf1f1f] pl-6 my-12 italic text-white/70">
            "To care for the cow is to care for the earth itself. In her well-being lies the prosperity of the land and the health of the community."
          </div>

          <p>
            Social responsibility extends to how we treat the most vulnerable among us, including animals. By upholding the tradition of cow care, we reinforce values of non-violence, gratitude, and stewardship that are essential for a compassionate society.
          </p>

        </article>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="font-sans text-sm tracking-widest uppercase text-white/40">
            © {new Date().getFullYear()} NKB. All Rights Reserved.
          </p>
        </footer>

      </main>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}