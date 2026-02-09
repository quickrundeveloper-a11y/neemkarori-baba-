
import Link from "next/link";

export default function Donate() {
  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] text-white font-serif flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="z-10 max-w-2xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 drop-shadow-lg">
          SUPPORT THE LEGACY
        </h1>
        
        <p className="text-xl md:text-2xl leading-relaxed opacity-90 text-gray-300">
          Your contribution helps us preserve the teachings and history of Neeb Karori Baba.
        </p>

        <div className="p-8 border border-white/10 bg-white/5 rounded-xl backdrop-blur-sm">
          <p className="text-lg mb-6">Donation options coming soon.</p>
          <button className="px-8 py-3 bg-[#cf1f1f] text-white font-sans tracking-widest uppercase hover:bg-red-700 transition-colors rounded-full shadow-lg">
            Make a Donation
          </button>
        </div>

        <div className="pt-12">
            <Link href="/" className="text-sm font-sans tracking-[0.2em] text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                ← BACK TO HOME
            </Link>
        </div>
      </div>
    </div>
  );
}
