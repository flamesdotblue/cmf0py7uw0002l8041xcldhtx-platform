import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <main>
        <Features />
        <HowItWorks />
        <Trust />
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400" />
            <span className="font-semibold tracking-tight">AlgoGenome</span>
            <span className="hidden sm:inline">— Accelerating genomic discovery with AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
