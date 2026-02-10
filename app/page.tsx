"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;



export default function Home() {
  const wrapper = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Use useIsomorphicLayoutEffect for GSAP ScrollTrigger to prevent hydration mismatches and ensure correct pinning
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "+=100%", // 100vh scroll distance (Even faster scroll)
          scrub: 1, // Smooth scrubbing
          pin: true,
        },
      });

      // Title Animation (Recede back)
      tl.to(".neem-karoli", { scale: 0.5, opacity: 0.2, filter: "blur(20px)", duration: 2 }, 0);
      tl.to(".baba", { scale: 0.5, opacity: 0.2, filter: "blur(20px)", duration: 2 }, 0);

      // Numbers Spread Logic (Chaos)
      // 1915 Elements
      tl.to(".n-1915 .char-1", { xPercent: -300, yPercent: 50, rotation: -45, scale: 0.5, duration: 3 }, 0)
        .to(".n-1915 .char-2", { xPercent: -200, yPercent: 150, rotation: -20, scale: 0.6, duration: 3 }, 0)
        .to(".n-1915 .char-3", { xPercent: -100, yPercent: 50, rotation: -10, scale: 0.5, duration: 3 }, 0)
        .to(".n-1915 .char-4", { xPercent: -50, yPercent: 200, rotation: -30, scale: 0.4, duration: 3 }, 0);

      // 1917 Elements
      tl.to(".n-1917 .char-1", { xPercent: 50, yPercent: 200, rotation: 30, scale: 0.4, duration: 3 }, 0)
        .to(".n-1917 .char-2", { xPercent: 100, yPercent: 50, rotation: 10, scale: 0.5, duration: 3 }, 0)
        .to(".n-1917 .char-3", { xPercent: 200, yPercent: 150, rotation: 20, scale: 0.6, duration: 3 }, 0)
        .to(".n-1917 .char-4", { xPercent: 300, yPercent: 50, rotation: 45, scale: 0.5, duration: 3 }, 0);

      // Dash fades out
      tl.to(".dash", { scale: 0.5, opacity: 0, duration: 2 }, 1);





      // Deportation Section Parallax
      gsap.to(".deportation-bg", {
        yPercent: 30, 
        ease: "none",
        scrollTrigger: {
          trigger: ".deportation-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // --- Split Section Animations (Left/Right Slide) ---

      // Helper function for split animations
      const createSplitAnimation = (sectionClass: string, spacerClass: string, mode: 'split' | 'from-right' = 'split') => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: spacerClass,
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
        
        // Slide Up (Stacking effect - covers previous section)
        tl.fromTo(sectionClass, 
          { yPercent: 100 }, 
          { yPercent: 0, ease: "none" }, 0
        );
        
        // Content Fade & Slide In (Enhanced)
        if (mode === 'from-right') {
          tl.fromTo(`${sectionClass} .section-content-left`, 
            { xPercent: 100, opacity: 0 }, 
            { xPercent: 0, opacity: 1, ease: "power1.out" }, 0
          );
          tl.fromTo(`${sectionClass} .section-content-right`, 
            { xPercent: 100, opacity: 0 }, 
            { xPercent: 0, opacity: 1, ease: "power1.out" }, 0
          );
        } else {
          // Standard Split
          tl.fromTo(`${sectionClass} .section-content-left`, 
            { xPercent: -100, opacity: 0 }, 
            { xPercent: 0, opacity: 1, ease: "power1.out" }, 0
          );
          tl.fromTo(`${sectionClass} .section-content-right`, 
            { xPercent: 100, opacity: 0 }, 
            { xPercent: 0, opacity: 1, ease: "power1.out" }, 0
          );
        }
      };

      // Apply to sections
      createSplitAnimation(".armenian-section", ".armenian-spacer");



      createSplitAnimation(".death-photo-section", ".death-photo-spacer");
      createSplitAnimation(".orphans-section", ".orphans-spacer");
      createSplitAnimation(".nutrition-section", ".nutrition-spacer");
      createSplitAnimation(".sport-section", ".sport-spacer");

      // Remember Section Vertical Slide (From Down)
      gsap.fromTo(".remember-section",
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".remember-spacer",
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        }
      );

      // Remember Collage Items Animation (Staggered Entrance)
      gsap.fromTo(".collage-item",
        { yPercent: 300, opacity: 0 }, 
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".remember-spacer",
            start: "top bottom",
            end: "top top",
            scrub: 1,
          }
        }
      );


    }, wrapper);

    // Initial entrance animation for Red Cross
    gsap.fromTo(".red-cross", 
      { y: "100%", opacity: 0 }, 
      { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapper} className="bg-[#1a1a1a] min-h-screen w-full text-white font-serif selection:bg-red-900 selection:text-white overflow-x-hidden">
      
      {/* Hero Section (Pinned) */}
      <main
        ref={mainRef}
        className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden snap-start"
      >
        {/* Header */}
        <Header />

        {/* Background Image - NKB */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
            <img src="/nkb.png" alt="Neem Karoli Baba" className="w-full h-full object-cover" />
        </div>

        {/* Background Noise/Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full mt-0 md:mt-[-5vh]">
          {/* Titles */}
          <div className="flex items-center justify-center gap-[2vw] mb-[1vh] z-30 mix-blend-normal w-full pointer-events-none notranslate">
            <div className="neem-karoli text-[6vw] md:text-[5.5vw] font-serif tracking-[-0.02em] text-[#fcc419] leading-none origin-bottom-right drop-shadow-lg">
              NEEB KARORI
            </div>
            <div className="baba text-[6vw] md:text-[5.5vw] font-serif tracking-[-0.02em] text-[#fcc419] leading-none origin-bottom-left drop-shadow-lg">
              BABA
            </div>
          </div>

          {/* Location / Subtitle */}
          {/* Removed duplicate Kainchi Dham text as it is already in the Header */}

          {/* Numbers & Dash */}
          <div className="flex text-[18vw] md:text-[26vw] leading-[0.8] text-white font-serif items-center justify-center whitespace-nowrap mix-blend-normal z-10 w-full font-light notranslate">
            
            {/* LEFT 1915 */}
            <div className="flex n-1915 origin-right">
                <span className="char-1 inline-block relative">1</span>
                <span className="char-2 inline-block relative">9</span>
                <span className="char-3 inline-block relative">0</span>
                <span className="char-4 inline-block relative">0</span>
            </div>

            {/* DASH */}
            <span className="dash mx-2 md:mx-6 inline-block h-[1.5vw] w-[6vw] bg-white rounded-full self-center opacity-90 relative top-[1vw]"></span>

            {/* RIGHT 1917 */}
            <div className="flex n-1917 origin-left">
                <span className="char-1 inline-block relative">1</span>
                <span className="char-2 inline-block relative">9</span>
                <span className="char-3 inline-block relative">7</span>
                <span className="char-4 inline-block relative">3</span>
            </div>
          </div>
        </div>



        {/* Silhouette Gradient Effect */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[80vh] bg-gradient-to-l from-black/80 via-black/40 to-transparent z-0 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10vh] right-[10vw] w-[30vw] h-[60vh] bg-black blur-[100px] opacity-60 z-0"></div>

      </main>

      {/* Video Section */}
      <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden z-20 snap-start">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/neem-karoli-baba.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* About Neem Karoli Baba Section (Updated) */}
            <section className="about-section relative w-full h-auto min-h-screen md:h-screen bg-white flex flex-col md:flex-row items-center justify-center md:overflow-hidden z-20 snap-start">
                <div className="container mx-auto px-6 md:h-full flex flex-col md:flex-row">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 md:h-full flex flex-col justify-start md:justify-center p-4 md:p-12 pt-24 md:pt-12 pb-32 text-black">
                        <h2 className="text-2xl md:text-5xl font-sans font-normal mb-2 leading-tight">About Neem Karoli Baba</h2>
                  <div className="w-12 h-1 bg-[#cf1f1f] mb-4"></div>
                  <div className="font-serif text-sm md:text-base leading-normal md:leading-relaxed mb-4 text-gray-700 space-y-3">
                      <p>
                          In a world yearning for peace and spiritual connection, Neem Karoli Baba, affectionately known as Maharaj-ji, stands as a beacon of unconditional love. He was a Hindu guru and a devotee of the Hindu deity Hanuman, known for his simple yet profound teachings that transcended religious boundaries.
                      </p>
                      <p>
                          For people across the world, Maharaj-ji symbolizes the power of devotion and personifies the prodigious force of love that transforms lives. His influence continues to guide seekers on their path to self-realization and service.
                      </p>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2">A dream that lives on</h3>
                  <p className="font-serif text-sm md:text-base leading-normal md:leading-relaxed mb-6 text-gray-700">
                      The journey of a million smiles began with his simple message: "Love everyone, Serve everyone, Remember God." Regarded as a miracle worker by many, he emphasized that the greatest miracle is love itself. He inspired the creation of ashrams that serve as sanctuaries for seekers and centers for charitable activities, continuing his legacy of service to humanity.
                  </p>
                  <Link href="/about" className="inline-block bg-[#cf1f1f] text-white px-8 py-3 font-sans uppercase tracking-widest text-xs md:text-sm hover:bg-red-700 transition-colors w-fit">
                      Know more
                  </Link>
              </div>

              {/* Right Images */}
              <div className="w-full md:w-1/2 h-full relative flex hidden md:flex">
                  {/* We need 3 vertical strips */}
                  <div className="w-1/3 h-full relative border-r border-white/10">
                      <img src="/nkb.png" className="w-full h-full object-cover grayscale brightness-125" />
                  </div>
                  <div className="w-1/3 h-full relative border-r border-white/10">
                      <img src="/c1.png" className="w-full h-full object-cover grayscale brightness-125" />
                  </div>
                  <div className="w-1/3 h-full relative">
                      <img src="/indian-children1.jpg" className="w-full h-full object-cover grayscale brightness-125" />
                  </div>
                  
                  {/* Floating Button */}
                  <Link href="/history" className="absolute bottom-10 right-0 bg-[#cf1f1f] text-white px-6 py-3 font-sans uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
                      Kainchi Dham History
                  </Link>
              </div>
          </div>
      </section>

      {/* Deportation Section with Parallax Background */}
      <section className="deportation-section relative w-full h-screen overflow-hidden flex flex-col items-center justify-center py-10 bg-[#1a1a1a] z-20 snap-start">
         
         {/* Background with reduced opacity and foreground image */}
         <div className="deportation-bg absolute inset-0 w-full h-full z-0">
            <img src="/nkb.png" alt="Deportation Background" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
         </div>

         {/* Foreground Circular Image */}
         <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#cf1f1f]/30 shadow-[0_0_50px_rgba(207,31,31,0.2)] mb-4 animate-fade-in relative z-10">
            <img src="/nkb.png" alt="Neem Karoli Baba" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
         </div>

         {/* Content */}
         <div className="relative z-10 text-center p-6 flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-7xl font-sans font-bold text-white tracking-widest uppercase mb-4 drop-shadow-2xl">
               11 September 1973
            </h2>
            <div className="w-24 h-1 bg-[#cf1f1f] mb-6"></div>
            <h3 className="text-2xl md:text-5xl font-serif text-white tracking-wider uppercase leading-tight max-w-4xl drop-shadow-2xl">
               Areas of work
            </h3>
         </div>
      </section>

      {/* Spacer for Armenian Section Scroll Trigger */}
      <div className="armenian-spacer hidden md:block relative w-full h-[100vh] z-30 pointer-events-none snap-start"></div>

      {/* Armenian Woman Section - Split Animation */}
      <section className="armenian-section relative md:fixed top-0 left-0 w-full h-auto min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center md:overflow-hidden z-40 py-8 md:py-20 bg-[#1a1a1a]">
          
          <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:gap-12 items-center h-full relative z-10">
              
              {/* Left: Image (Woman) */}
              <div className="section-content-left w-full md:w-1/2 h-full flex items-center justify-center p-0 md:p-12">
                  <div className="relative w-full aspect-video max-h-[30vh] md:max-h-[80vh] bg-black/20 shadow-2xl overflow-hidden transform rotate-1">
                      <img src="/indian-children1.jpg" alt="Armenian Woman" className="w-full h-full object-cover contrast-110 brightness-100" />
                      <div className="absolute inset-0 ring-1 ring-white/10"></div>
                  </div>
              </div>

              {/* Right: Text Content */}
              <div className="section-content-right w-full md:w-1/2 flex flex-col justify-center h-full gap-4 md:gap-8 relative z-10 text-white p-0 pb-8 md:p-12">
                
<h2 className="font-sans text-2xl md:text-5xl font-bold uppercase tracking-widest text-white leading-tight">
    Education <br/>
</h2>
                  
                  <div className="space-y-3 md:space-y-6 font-serif text-base md:text-xl leading-normal md:leading-relaxed opacity-90">
                      <p>
                          Importance of Education in Modern Society
                      </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-8 flex justify-start">
                    <Link href="/education" className="group flex items-center gap-2 text-sm md:text-base font-sans tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
              </div>

          </div>
      </section>



      {/* Spacer for Death Photo Section Scroll Trigger */}
      <div className="death-photo-spacer hidden md:block relative w-full h-[100vh] z-40 pointer-events-none snap-start"></div>

      {/* Cow Care Section (formerly Death Photo) - Split Animation */}
      <section className="death-photo-section relative md:fixed top-0 left-0 w-full h-auto min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center md:overflow-hidden z-[45] py-8 md:py-20 bg-[#1a1a1a]">
          
          <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:gap-12 items-center h-full relative z-10">
              
              {/* Left: Image (Cow) */}
              <div className="section-content-left w-full md:w-1/2 h-full flex items-center justify-center p-0 md:p-12">
                  <div className="relative h-[30vh] md:h-auto w-auto aspect-[3/4] md:w-full md:max-h-[85vh] bg-black/20 shadow-2xl overflow-hidden mx-auto">
                      <img src="/c1.png" alt="Cow Care" className="w-full h-full object-cover" />
                  </div>
              </div>

              {/* Right: Text Content */}
              <div className="section-content-right w-full md:w-1/2 flex flex-col justify-center h-full gap-4 md:gap-8 relative z-10 text-white p-0 pb-8 md:p-12 text-center md:text-right">
                  <h2 className="font-sans text-2xl md:text-5xl font-bold uppercase tracking-widest leading-tight">
                      TRADITION AND <br/>
                      SOCIAL <br/>
                      <span className="text-[#cf1f1f]">RESPONSIBILITY</span>
                  </h2>
                  
                  <div className="space-y-3 md:space-y-6 font-serif text-sm md:text-base leading-normal md:leading-relaxed opacity-90">
                      <p>
                          "Cow care supports agriculture, the environment, and cultural traditions. Providing proper food, clean water, shelter, and medical care keeps cows healthy and productive. It promotes sustainable farming, protects nature, and teaches kindness and responsibility. Caring for cows helps maintain ecological balance and builds a better future for society and the planet.
                      </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-8 flex justify-end">
                    <Link href="/social-responsibility" className="group flex items-center gap-2 text-sm md:text-base font-sans tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
              </div>

          </div>
      </section>

      {/* Spacer for Orphans Section Scroll Trigger */}
      <div className="orphans-spacer hidden md:block relative w-full h-[100vh] z-[45] pointer-events-none snap-start"></div>

      {/* The Armenian Gathered From Section - Split Animation */}
      <section className="orphans-section relative md:fixed top-0 left-0 w-full h-auto min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center md:overflow-hidden z-[48] py-8 md:py-20 bg-[#1a1a1a]">
          
          <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:gap-12 items-center h-full relative z-10">

              {/* Left: Image (Group of children) */}
              <div className="section-content-left w-full md:w-7/12 h-full flex items-center justify-center p-0 md:p-8">
                  <div className="relative w-full aspect-[4/3] max-h-[40vh] md:max-h-[85vh] bg-[#111] shadow-2xl overflow-hidden border border-white/10">
                      <img src="/illchi.jpg" alt="Armenian Orphans" className="w-full h-full object-cover" />
                  </div>
              </div>

              {/* Right: Text Content */}
                  {/* Right: Text Content */}
              <div className="section-content-right w-full md:w-1/2 flex flex-col justify-center h-full gap-4 md:gap-8 relative z-10 text-white p-0 pb-8 md:p-12 text-right">
                  <h2 className="font-sans text-2xl md:text-5xl font-bold uppercase tracking-widest leading-tight">
                      Care and Challenges  <br/>
                 
                      <span className="text-[#cf1f1f]">of Sick Children</span>
                  </h2>
                  
                  <div className="space-y-3 md:space-y-6 font-serif text-sm md:text-base leading-normal md:leading-relaxed opacity-90">
                      <p>
                          Caring for sick children requires medical attention, emotional support, and proper nutrition. Illness can affect children physically and emotionally, but with proper care and love, children can recover and lead healthy lives. Parents, healthcare professionals, schools, and society must work together to support sick children and ensure their well-being.
                      </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-8 flex justify-end">
                    <Link href="/child-care" className="group flex items-center gap-2 text-sm md:text-base font-sans tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
              </div>

          </div>
      </section>
      

      {/* Spacer for Nutrition Section Scroll Trigger */}
      <div className="nutrition-spacer hidden md:block relative w-full h-[100vh] z-50 pointer-events-none snap-start"></div>

      {/* Nutrition Section - Split Animation */}
      <section className="nutrition-section relative md:fixed top-0 left-0 w-full h-auto min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center md:overflow-hidden z-50 py-8 md:py-20 bg-[#1a1a1a]">
          
          <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:gap-12 items-center h-full relative z-10">

              {/* Left: Image */}
              <div className="section-content-left w-full md:w-1/2 h-full flex items-center justify-center p-0 md:p-12">
                  <div className="relative w-full aspect-[4/3] max-h-[40vh] md:max-h-[80vh] bg-black/10 shadow-2xl overflow-hidden">
                      <img src="/Nutrition.jpg" alt="Children Eating" className="w-full h-full object-cover" />
                  </div>
              </div>

              {/* Right: Text Content */}
                <div className="section-content-right w-full md:w-1/2 flex flex-col justify-center h-full gap-4 md:gap-8 relative z-10 text-white p-0 pb-8 md:p-12 text-right">
                  <h2 className="font-sans text-2xl md:text-5xl font-bold uppercase tracking-widest leading-tight">
                    <span className="text-[#cf1f1f]">Nutrition</span>
                    <br/>
                    Helping the country fight against malnutrition 
                  </h2>
                  
                  <div className="space-y-3 md:space-y-6 font-serif text-sm md:text-base leading-normal md:leading-relaxed opacity-90">
                      <p>
                        Nutrition is the foundation of a healthy and productive society. Proper nutrition provides the body with essential nutrients needed for growth, development, and overall well-being.
                      </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-8 flex justify-end">
                    <Link href="/nutrition" className="group flex items-center gap-2 text-sm md:text-base font-sans tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
              </div>

          </div>
      </section>

      {/* Spacer for Sport Section Scroll Trigger */}
      <div className="sport-spacer hidden md:block relative w-full h-[100vh] z-50 pointer-events-none snap-start"></div>

      {/* Sport Section - Split Animation */}
      <section className="sport-section relative md:fixed top-0 left-0 w-full h-auto min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center md:overflow-hidden z-50 py-8 md:py-20 bg-[#1a1a1a]">
          
          <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:gap-12 items-center h-full relative z-10">

              {/* Left: Image */}
              <div className="section-content-left w-full md:w-1/2 h-full flex items-center justify-center p-0 md:p-12">
                  <div className="relative w-full aspect-[4/3] max-h-[40vh] md:max-h-[80vh] bg-black/10 shadow-2xl overflow-hidden">
                      <img src="/sport.jpg" alt="Children Playing" className="w-full h-full object-cover" />
                  </div>
              </div>

              {/* Right: Text Content */}
               <div className="section-content-right w-full md:w-1/2 flex flex-col justify-center h-full gap-4 md:gap-8 relative z-10 text-white p-0 pb-8 md:p-12 text-right">
                  <h2 className="font-sans text-2xl md:text-5xl font-bold uppercase tracking-widest leading-tight">
                      <span className="bg-[#cf1f1f] text-white px-2 py-1">SPORTS</span>
                  </h2>
                  
                  <div className="space-y-3 md:space-y-6 font-serif text-sm md:text-base leading-normal md:leading-relaxed opacity-90">
                      <p>
                          Sports play a vital role in improving physical fitness, mental strength, and social skills. They help individuals develop discipline, teamwork, and confidence while promoting a healthy and active lifestyle. This article highlights the importance of sports in personal development and how participation in sports contributes to overall well-being and success in life
                      </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-8 flex justify-end">
                    <Link href="/sports" className="group flex items-center gap-2 text-sm md:text-base font-sans tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
              </div>

          </div>
      </section>

      {/* Spacer for Remember Section Scroll Trigger */}
      <div className="remember-spacer relative w-full h-[100vh] z-50 pointer-events-none snap-start"></div>

      {/* Remember Section - Typography Pattern */}
      <section className="remember-section fixed top-0 left-0 w-full h-screen bg-[#111] flex flex-col items-center justify-center overflow-hidden z-[60] py-20 border-t border-white/10 translate-y-full">
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-8 w-full transform -rotate-2 scale-110">
              {[...Array(6)].map((_, i) => (
                  <div key={i} className="whitespace-nowrap overflow-hidden">
                      <h2 className="text-6xl md:text-9xl font-serif tracking-widest font-thin"
                          style={{ 
                              WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)', 
                              color: 'transparent',
                              marginLeft: i % 2 === 0 ? '-10vw' : '-20vw'
                          }}>
                          NEEB KARORI BABA / NEEB KARORI BABA
                      </h2>
                  </div>
              ))}
          </div>

          {/* Collage Images */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
             {/* 1. Large Group Photo (Left/Bottom) */}
             <div className="collage-item absolute left-[5%] md:left-[10%] bottom-[15%] w-[80vw] md:w-[50vw] aspect-video bg-black/20 shadow-2xl transform -rotate-2 border border-white/10 opacity-0">
                 <img src="/nkb.png" alt="Starving Children" className="w-full h-full object-cover grayscale contrast-125 brightness-90" />
             </div>

             {/* 2. Two Children Photo (Right/Top) */}
             <div className="collage-item absolute right-[5%] md:right-[10%] top-[15%] w-[40vw] md:w-[25vw] aspect-square bg-black/20 shadow-2xl transform rotate-3 border border-white/10 opacity-0">
                 <img src="/nkb.png" alt="Two Children" className="w-full h-full object-cover grayscale contrast-125 brightness-90" />
                 
                 {/* Caption */}
                 <div className="absolute top-full left-0 w-full mt-4 text-[8px] md:text-[10px] font-serif text-white/60 text-left leading-tight tracking-wide">
                    <p className="mb-1 text-white/90">Children of the Near East Relief Maria Jacobsen, Diary 1907-1919.</p>
                    <p>Kharput-Turkey, Translated into Armenian from the Original Manuscript by Nerses Pakhdikian, Mihran Simonan, Antelias-Lebanon, 1979</p>
                 </div>
             </div>
          </div>

      </section>

      {/* Footer */}
      <div className="relative z-[70] snap-start">
        <Footer />
      </div>

    </div>
  );
}
