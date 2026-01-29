"use client";

import React from 'react';
import dynamic from 'next/dynamic';

import Hero from '@/components/home/Hero';

const Stats = dynamic(() => import('@/components/home/Stats'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const CoreValues = dynamic(() => import('@/components/home/CoreValues'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const Services = dynamic(() => import('@/components/home/Services'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const Process = dynamic(() => import('@/components/home/Process'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const CaseStudies = dynamic(() => import('@/components/home/CaseStudies'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const Industries = dynamic(() => import('@/components/home/Industries'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const BlogInsights = dynamic(() => import('@/components/home/BlogInsights'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const FAQ = dynamic(() => import('@/components/home/FAQ'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});
const CTA = dynamic(() => import('@/components/home/CTA'), {
  ssr: true,
  loading: () => <div className="w-full h-80 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50">loading...</div>
});

export default function HomeClient() {
  return (
    <main style={{ backgroundColor: "var(--background)", color: "var(--foreground)", scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }} className="min-h-screen overflow-hidden">
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes grow {
          from { height: 0; }
          to { height: var(--height); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation: blob 7s infinite 4s; }
        .animate-grow { animation: grow 1s ease-out forwards; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>

      <Hero />
      <Stats />
      <CoreValues />
      <Services />
      <Process />
      <CaseStudies />
      <Industries />
      <BlogInsights />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
