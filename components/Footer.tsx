"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {


  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 relative z-[70] border-t border-white/10">
      
      {/* Top Section: Socials & Story CTA */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#cf1f1f] transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#cf1f1f] transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#cf1f1f] transition-all">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
             </svg>
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#cf1f1f] transition-all">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.254.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
             </svg>
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#cf1f1f] transition-all">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.41 4.452c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" clipRule="evenodd" />
             </svg>
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/5 px-6 py-4 rounded-sm border border-white/5">
          <span className="font-bold text-sm md:text-base tracking-wide">Real and quietly powerful stories</span>
          <Link href="/about" className="bg-[#cf1f1f] text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#a01818] transition-colors duration-300">
            Read more
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        


        {/* Links Column 1 (Span 6) */}
        <div className="md:col-span-6 pt-2 md:pt-20">
          <ul className="space-y-6 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80">


            <li>
              <Link href="/history" className="hover:text-[#cf1f1f] transition-colors relative group">
                History
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cf1f1f] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 (Span 6) */}
        <div className="md:col-span-6 pt-2 md:pt-20">
          <ul className="space-y-6 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80">
            <li>
              <Link href="/about" className="hover:text-[#cf1f1f] transition-colors relative group">
                 About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cf1f1f] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#cf1f1f] transition-colors relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cf1f1f] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#cf1f1f] transition-colors relative group">
                Privacy policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cf1f1f] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs opacity-40 font-sans uppercase tracking-widest gap-4">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved, Neem Karoli Baba | Legal disclaimer | Privacy policy | Sitemap</p>
      </div>

    </footer>
  );
}
