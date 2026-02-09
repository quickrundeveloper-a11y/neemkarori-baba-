import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      {/* Navigation (simplified version of main nav) */}
      <Header />

      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        {/* Header */}
        <header className="mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-[#f0f0f0]">
            Neem Karoli Baba: <br/>
            <span className="text-[#cf1f1f]">A Legacy of Love & Service</span>
          </h1>
          <div className="w-24 h-1 bg-[#cf1f1f] mb-8"></div>
          
          {/* Hero Image */}
          <div className="w-full aspect-video relative rounded-lg overflow-hidden mb-12 shadow-2xl">
            <img 
              src="/nkb3.png" 
              alt="Neem Karoli Baba" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <article className="space-y-16 font-serif text-lg md:text-xl leading-relaxed text-gray-300">
          
          <section className="animate-fade-in-up delay-100">
            <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-[#cf1f1f] first-letter:mr-3 first-letter:float-left">
              Neem Karoli Baba, also known as Maharaj-ji, was a famous Hindu saint and spiritual teacher who is widely respected across India and the world. He is known for his simple lifestyle, miracles, and teachings based on love, devotion, and service to humanity. Millions of devotees believe he was a divine soul who dedicated his life to helping people find peace and faith in God.
            </p>
          </section>

          <section className="animate-fade-in-up delay-200 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
                Early Life
              </h2>
              <p className="mb-6">
                Neem Karoli Baba was born around 1900 in a small village named Akbarpur in Uttar Pradesh, India. His birth name was Lakshmi Narayan Sharma. From childhood, he showed signs of deep spiritual interest. Although he lived a normal family life for some time and was married according to social customs, he later left home to follow a spiritual path.
              </p>
              <p>
                He traveled across India as a wandering saint and spent many years meditating and guiding people. During his spiritual journey, he became known as Neem Karoli Baba after he stayed near a village called Neem Karoli.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="/nkb5.jpg" 
                alt="Neem Karoli Baba Early Life" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="animate-fade-in-up delay-300">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Spiritual Journey and Teachings
            </h2>
            <div className="bg-[#222] p-8 rounded-lg border-l-4 border-[#cf1f1f] mb-8">
              <p className="mb-6 italic text-white/90">
                Neem Karoli Baba taught very simple but powerful spiritual messages. His teachings focused mainly on:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#cf1f1f]">
                <li>Love everyone</li>
                <li>Serve others selflessly</li>
                <li>Remember God always</li>
                <li>Practice kindness and compassion</li>
              </ul>
            </div>
            <p>
              He believed that serving humanity is the best way to serve God. He never promoted complex rituals and encouraged people to live simple, honest, and peaceful lives.
            </p>
          </section>

          <section className="animate-fade-in-up delay-400">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Miracles and Divine Experiences
            </h2>
            <p className="mb-6">
              Many devotees believe that Neem Karoli Baba performed several miracles. People shared stories about how he helped them during difficult times, cured illnesses, and solved life problems. His followers believed he had supernatural spiritual powers and divine knowledge.
            </p>
            <p>
              One of the most famous stories is about how he predicted events and helped people without them even asking for help. His presence gave peace and confidence to those who visited him.
            </p>
          </section>

          <section className="animate-fade-in-up delay-500">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Kainchi Dham Ashram
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
               <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/nkb12.jpg" 
                    alt="Kainchi Dham Ashram Landscape" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
               </div>
               <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/nkb14.png" 
                    alt="Kainchi Dham Temple" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>
            <p className="mb-6">
              Neem Karoli Baba established several temples and ashrams across India. One of the most famous places connected to him is Kainchi Dham, located in Uttarakhand. This ashram attracts thousands of devotees every year.
            </p>
            <p>
              Kainchi Dham is known as a spiritual center where people visit to meditate, pray, and experience peace. The annual celebration held there attracts devotees from all over the world.
            </p>
          </section>

          <section className="animate-fade-in-up delay-500 pb-20">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Global Influence
            </h2>
            <p className="mb-6">
              Neem Karoli Baba’s teachings reached international followers as well. Many famous personalities visited him and shared his spiritual wisdom with the world. His message of love, devotion, and service continues to inspire people across different cultures and religions.
            </p>
          </section>

          <section className="animate-fade-in-up delay-500">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              His Simple Lifestyle
            </h2>
            <p className="mb-6">
              Despite having thousands of followers, Neem Karoli Baba lived a very simple life. He usually wore a blanket and lived like an ordinary saint. He never wanted fame or wealth and always focused on helping people spiritually and emotionally.
            </p>
            <p>
              His simplicity and kindness made him loved by people from all backgrounds.
            </p>
          </section>

          <section className="animate-fade-in-up delay-500">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6 tracking-wide uppercase">
              Final Years and Legacy
            </h2>
            <p className="mb-6">
              Neem Karoli Baba left his physical body in 1973, but his teachings and spiritual presence continue to inspire millions. His temples and ashrams are still active, and devotees believe that his blessings continue to guide them.
            </p>
            <p>
              His legacy teaches that true happiness comes from love, service, faith, and humility.
            </p>
          </section>

        </article>

        {/* Bottom Home Link */}
        <div className="mt-20 border-t border-white/10 pt-12 text-center">
          <Link href="/" className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-sans tracking-widest uppercase text-sm">
            Return Home
          </Link>
        </div>

      </main>
    </div>
  );
}
