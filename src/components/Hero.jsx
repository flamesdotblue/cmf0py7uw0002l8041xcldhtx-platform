import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 ring-2 ring-white/10" />
          <span className="text-lg font-semibold tracking-tight">AlgoGenome</span>
        </div>
        <div className="hidden items-center gap-6 md:flex text-sm">
          <a href="#features" className="text-white/80 hover:text-white">Features</a>
          <a href="#how" className="text-white/80 hover:text-white">How it works</a>
          <a href="#security" className="text-white/80 hover:text-white">Trust & Security</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5 md:inline-block">Contact</a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white">
            <Rocket className="h-4 w-4" />
            Request demo
          </a>
        </div>
      </nav>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: copy and CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Privacy-first genomic intelligence
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              The search + thinking engine for the genome
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              AlgoGenome continuously aggregates and normalizes genomic knowledge across public datasets, literature, and benchmarks. Our AI agent performs the multi-step workflows a team of bioinformaticians would—at research speed and clinical rigor.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20">
                Request enterprise demo
              </a>
              <a href="#features" className="rounded-md border border-white/15 bg-black/40 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/5">
                Explore capabilities
              </a>
            </div>
            <p className="mt-6 text-xs text-white/60">
              HIPAA-ready. Data never leaves your control. Audit logs by default.
            </p>
          </div>

          {/* Right: Spline forefront visual */}
          <div className="relative">
            <div className="relative h-[360px] rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur md:h-[520px]">
              <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/20 to-emerald-400/20 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-lg ring-1 ring-white/10">
                <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 -z-10 hidden h-40 w-40 rounded-full bg-fuchsia-500/20 blur-2xl md:block" />
            <div className="pointer-events-none absolute -bottom-8 -left-10 -z-10 hidden h-44 w-44 rounded-full bg-emerald-400/20 blur-2xl md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
