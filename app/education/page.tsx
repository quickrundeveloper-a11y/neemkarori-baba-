"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      {/* Navigation (simplified version of main nav) */}
      <Header />

      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        {/* Header */}
        <header className="mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-[#f0f0f0]">
            Trust Education: <br/>
            <span className="text-[#cf1f1f]">Building Strong Foundations</span> <br/>
            for Future Generations
          </h1>
          <div className="w-24 h-1 bg-[#cf1f1f] mb-8"></div>
        </header>

        {/* Content */}
        <article className="space-y-12 font-serif text-lg md:text-xl leading-relaxed text-gray-300">
          
          <section className="animate-fade-in-up delay-100">
            <p className="mb-6">
              Education is one of the most powerful tools that shapes individuals, societies, and nations. However, education alone is not enough to create a positive and progressive environment. Trust plays an equally important role in the learning process. Trust education refers to building reliability, honesty, confidence, and mutual respect among students, teachers, parents, and educational institutions. It helps create a safe and supportive environment where students can grow academically, emotionally, and socially.
            </p>
            <p>
              In today’s fast-changing world, trust has become a critical factor in education. Students perform better when they trust their teachers, teachers teach better when they trust their students, and parents feel satisfied when they trust educational institutions. Therefore, trust education is not only about academic knowledge but also about developing strong values and character in individuals.
            </p>
          </section>

          <section className="animate-fade-in-up delay-200">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Understanding Trust Education
            </h2>
            <p className="mb-6">
              Trust education is a process of teaching and promoting honesty, responsibility, integrity, and reliability among students and educators. It encourages transparency in communication and helps develop positive relationships. Trust education ensures that students feel comfortable asking questions, expressing their ideas, and sharing their problems without fear.
            </p>
            <p>
              When trust exists in an educational environment, students become more confident and motivated. They feel safe to explore new concepts and take risks in their learning journey. Trust also helps teachers understand their students better and provide guidance according to their individual needs.
            </p>
          </section>

          <section className="animate-fade-in-up delay-300">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Importance of Trust in Education
            </h2>
            <p className="mb-6">
              Trust is the backbone of a successful educational system. Without trust, communication breaks down, misunderstandings increase, and learning becomes difficult. Trust helps in creating a strong connection between teachers and students. When students trust their teachers, they listen carefully, follow instructions, and actively participate in classroom activities.
            </p>
            <p className="mb-6">
              Trust also encourages teamwork among students. When students trust each other, they collaborate effectively, share knowledge, and support each other in achieving academic goals. It creates a healthy learning atmosphere where everyone works together for success.
            </p>
            <p>
              Another important aspect of trust education is building confidence in students. When teachers trust students and give them responsibilities, students feel valued and respected. This increases their self-esteem and helps them develop leadership skills.
            </p>
          </section>

          <section className="animate-fade-in-up delay-400">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Role of Teachers in Trust Education
            </h2>
            <p className="mb-6">
              Teachers play a vital role in building trust in education. They are responsible for creating a supportive and respectful environment where students feel safe and encouraged. Teachers can build trust by being honest, fair, and consistent in their behavior.
            </p>
            <p className="mb-6">
              One of the most effective ways teachers can build trust is by listening to students. When teachers listen carefully to students’ ideas, opinions, and concerns, students feel respected and valued. Teachers should also maintain transparency in grading and evaluation to ensure fairness.
            </p>
            <p>
              Teachers should encourage open communication and avoid judging students. Instead, they should guide students positively and help them learn from their mistakes. By showing empathy and understanding, teachers can build strong and long-lasting relationships with students.
            </p>
          </section>

          <section className="animate-fade-in-up delay-500">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Role of Parents in Trust Education
            </h2>
            <p className="mb-6">
              Parents are the first teachers in a child’s life. They play a crucial role in developing trust and moral values. Parents should create a supportive environment at home where children feel comfortable sharing their thoughts and feelings.
            </p>
            <p className="mb-6">
              Parents should encourage honesty and responsibility in their children. They should also trust their children and allow them to make decisions. When parents show trust, children learn to become responsible and independent.
            </p>
            <p>
              Communication between parents and schools is also important for trust education. Parents should stay connected with teachers and educational institutions to understand their child’s progress and challenges. Strong cooperation between parents and schools helps create a balanced and effective learning environment.
            </p>
          </section>

        </article>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-white hover:text-[#cf1f1f] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-sans tracking-widest uppercase text-sm">Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
