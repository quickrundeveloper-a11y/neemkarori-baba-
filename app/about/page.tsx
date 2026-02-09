import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-900 selection:text-white">
      {/* Navigation */}
      <Header />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
            {/* Left Content */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-light text-gray-800 tracking-tight">
                        About Neem Karoli Baba
                    </h1>
                    <div className="w-20 h-1 bg-[#cf1f1f]"></div>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg font-serif">
                    <p>
                        In a world yearning for peace and spiritual connection, Neem Karoli Baba, affectionately known as Maharaj-ji, stands as a beacon of unconditional love. He was a Hindu guru and a devotee of the Hindu deity Hanuman, known for his simple yet profound teachings that transcended religious boundaries.
                    </p>
                    <p>
                        For people across the world, Maharaj-ji symbolizes the power of devotion and personifies the prodigious force of love that transforms lives. His influence continues to guide seekers on their path to self-realization and service.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">A dream that lives on</h3>
                    <p className="text-gray-600 leading-relaxed font-serif">
                        The journey of a million smiles began with his simple message: "Love everyone, Serve everyone, Remember God." Regarded as a miracle worker by many, he emphasized that the greatest miracle is love itself. He established ashrams that serve as sanctuaries for spiritual growth and service to humanity.
                    </p>
                </div>

                <div className="pt-4">
                     <Link href="/history" className="inline-block bg-[#cf1f1f] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#a01818] transition-colors">
                        Know more
                     </Link>
                </div>
            </div>

            {/* Right Images - The Grid */}
            <div className="w-full lg:w-[60%] flex min-h-[500px] md:min-h-[600px]">
                {/* Slice 1 - Portrait */}
                <div className="w-1/3 relative group overflow-hidden border-r-2 border-white">
                    <Image
                        src="/nkb5.jpg"
                        alt="Neem Karoli Baba Portrait"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        sizes="(max-width: 768px) 33vw, 20vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                {/* Slice 2 - Temple */}
                <div className="w-1/3 relative group overflow-hidden border-r-2 border-white">
                     <Image
                        src="/nkb14.png"
                        alt="Kainchi Dham Temple"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        sizes="(max-width: 768px) 33vw, 20vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                {/* Slice 3 - Devotees */}
                <div className="w-1/3 relative group overflow-hidden">
                     <Image
                        src="/nkb3.png"
                        alt="Devotees"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        sizes="(max-width: 768px) 33vw, 20vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                    
                    {/* Red Label */}
                    <div className="absolute bottom-8 right-0 bg-[#cf1f1f] text-white px-4 md:px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg">
                        Neem Karoli Baba History
                    </div>
                </div>
            </div>
        </div>
      </main>
      
      {/* Footer Wrapper to ensure it handles white background visually if needed, though Footer has its own styles */}
      <div className="bg-[#1a1a1a]">
        <Footer />
      </div>
    </div>
  );
}
