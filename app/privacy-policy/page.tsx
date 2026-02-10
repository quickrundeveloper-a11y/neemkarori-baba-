"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#cf1f1f] selection:text-white overflow-x-hidden">
      
      {/* Header Component */}
      <Header />

      {/* Hero Header Section */}
      <header className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Background Image - Using a generic subtle background */}
        <div className="absolute inset-0 z-0 bg-gray-100">
             {/* Optional: Add a subtle pattern or image here if available */}
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
          <h1 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-widest leading-tight mb-6 text-white">
            PRIVACY POLICY
          </h1>
          <div className="w-24 h-1 bg-[#cf1f1f] mx-auto"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto font-serif text-sm md:text-base leading-relaxed opacity-80 text-justify space-y-8 text-black">
          
          <p>
            Neeb Karori Baba Trust is one of the oldest non-sectarian philanthropic organisations, internationally recognised for its noble work which spans more than a hundred years. The Trust’s core imperative is to drive sustainable social development and power change, through its multi-sectoral work across the nation.
          </p>

          <p>
            Neeb Karori Baba Trust is a public charitable trust registered under the relevant Public Trusts Act, and is an integral constituent of ‘Neeb Karori Baba Trust’. The Trust is hereinafter referred to as “We”, “Us”.
          </p>

          <p>
            We anchor and operate the website (www.neebkaroribaba.com) to showcase the details of projects of the Trust across several themes and focus areas (“the Website”).
          </p>

          <p>
            This document outlines our approach towards data protection and privacy vis a vis the website (the “Privacy Policy”) in order to fulfil its obligations under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011 (“SPDI Rules”) prescribed thereunder.
          </p>

          <p>
            By way of this Privacy Policy, we want our users (“You,” “Your,” and/or “User”) to know the nature of personal information collected from the Users and how Your personal information is collected, used, processed, stored, shared, disclosed or transferred by Us.
          </p>

          <p>
            Please read the Privacy Policy carefully, and by visiting or using the Website, any other linked pages, features, content, and any other content. We offer from time to time in connection with any of the foregoing, You agree to the practices and policies set forth in this Privacy Policy, and You hereby acknowledge and expressly consent to our collection, use, processing, storing, disclosure and/ or transfer of Your information as described hereunder.
          </p>

          <p>
            In this Privacy Policy, We set out the types of information that we may collect, the purpose of collection of the information, how We collect, use, disclose, transfer, and store Your information, so that you can make an informed decision in relation to the sharing of Your personal information with us. By using Our Website, or by giving us your personal data/information when registering with Us or subscribing to the newsletters or filling in various forms available on the Website. You accept the collection and processing of Your personal data as described in this Privacy Policy. If You do not agree with the terms of this Privacy Policy, You may choose not to provide Us Your personal data/information but may continue to navigate our Website in a limited manner.
          </p>

          <p>
            Please note that this Privacy Policy does not apply to websites maintained and/or operated by other companies or organizations with which We partner with and/ or provide a link of the same on our Website, and We are not responsible for any personal information You submit to third parties via their website. Please ensure that You read the privacy policy of such third parties before submitting Your details.
          </p>

          <div className="space-y-4">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-black uppercase tracking-wide">
              1. Information Collected:
            </h2>
            
            <div className="pl-4 space-y-4 border-l border-black/10">
              <p>
                <span className="font-bold text-black">1.1</span> We gather various types of personal information from our Users, as explained below. We may use this information, among other things, to personalize and improve our Website, allow our Users to register for newsletter, updates on our work through emails, send e-invite to events (online/offline) curated by the Trust and its partners, provide for access to information relating to our projects and initiatives, analyse how Users utilize our Website or as otherwise specifically set forth in this Privacy Policy. We will take reasonable steps to accurately record the personal information that You provide to Us and any subsequent updates. We may share, disclose and/ or transfer certain types of information collected with other Trusts and/ or third parties. We collect the following types of personal information:
              </p>

              <div className="pl-4 space-y-4">
                <p>
                  <span className="font-bold text-black">1.1.1 Information provided by You:</span> We shall receive, store, and process the personal information You knowingly and willingly provide to Us. We may collect information such as Name, email ID, Country, State, City, Occupation, etc., from Users who are visitors on the Website, interested in navigating the Website and/ or downloading reports/ films and other knowledge assets from the Website. In our User registration form and other forms available on the Website, we indicate which fields are mandatory and others which are optional. You always have the option to not provide information however, by choosing the option of not providing information for some fields, You may not be able to register on our Website and/or obtain access to the respective activity/function for which the said form was required to be filled. We may use the fact that you have contributed to or inquired about a certain initiative or project, for instance, to send You communication such as newsletters, event invites, etc. for the Trust that promotes the initiatives/related initiatives and information.
                </p>

                <p>
                   <span className="font-bold text-black">1.1.2 Information and technical data collected automatically:</span> When You visit the Website, our web server may automatically record details about Your visit, such as Your IP address, location, internet service provider, network carrier (in case of access from a cellular device), portal usage details, pages viewed, duration of Your visit, URL, cookies etc.
                </p>
              </div>

              <p>
                <span className="font-bold text-black">1.2</span> You acknowledge and agree that if You provide any information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete over a period of time), or We have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, we may not be able to provide You with continued access to our Website. Your information collected and access to our Website is subject to other terms mentioned on our Website, and you are advised to read the same carefully in conjunction with this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-black uppercase tracking-wide">
              2. Cookie Policy
            </h2>
            
            <div className="pl-4 space-y-4 border-l border-black/10">
              <p>
                <span className="font-bold text-black">2.1</span> We or our third party service providers may use cookies to collect and store information with respect to Your use of Our Website. This information is collected automatically when You navigate Our Website. A cookie is a small text file that is stored on Your computer that enables Us to recognize You, (for example, as a registered User, projects viewed previously, your content preferences etc.) when You visited Our portal, store Your preferences and settings, enhance Your experience by delivering content and advertising specific to Your interests, perform research and analytics, track Your use of Our Website, and assist with security and administrative functions as well as monitor your navigation and search patterns on Our Website.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
