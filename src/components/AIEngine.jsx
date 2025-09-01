import React from 'react';
import { Cpu, Bot, Activity, CheckCircle } from 'lucide-react';

export default function AIEngine() {
  return (
    <section className="relative bg-gradient-to-b from-[#07070a] to-black/60 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            Foundation + fine-tune for bioinformatics
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            A bioinformatics-tuned large language model powers our AI Agent
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
            At the core of AlgoGenome is a domain-specialized LLM trained across curated omics corpora—methods sections, supplementary materials, protocols, benchmarks, and knowledge graphs. It is tool-aware and orchestrates vetted pipelines with transparent, reviewable reasoning.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Fine-tuned on bioinformatics tasks: QC heuristics, alignment choices, variant filters, enrichment interpretation, evidence grading.</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Toolformer-style skills: connects to aligners, callers, expression analyzers, enrichment tools, and literature APIs with provenance.</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Structured reasoning traces and citations: every decision is auditable and reproducible.</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> Deploy anywhere: on-prem or VPC, with data never leaving your boundary.</li>
          </ul>
          <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-200">
            <div className="font-medium">Agrigenomics impact</div>
            <p className="mt-1 text-emerald-100/90">
              Increase efficiency in crop varietal development by rapidly prioritizing markers, synthesizing trait-literature across species, and linking genotype–phenotype evidence to breeding decisions.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/15 via-cyan-400/15 to-emerald-400/15 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <Bot className="h-4 w-4 text-fuchsia-300" />
                <span>AI Agent — Variant interpretation</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/50">
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-0.5"><Activity className="h-3.5 w-3.5 text-emerald-300" /> Live</span>
              </div>
            </div>
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-r border-white/10 p-4">
                <div className="text-xs uppercase tracking-wide text-white/40">Reasoning</div>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="rounded-md bg-white/5 p-2">Check FASTQ quality — <span className="text-emerald-300">OK</span></div>
                  <div className="rounded-md bg-white/5 p-2">Align reads to GRCh38 — <span className="text-emerald-300">Complete</span></div>
                  <div className="rounded-md bg-white/5 p-2">Call variants (germline) — <span className="text-emerald-300">Complete</span></div>
                  <div className="rounded-md bg-white/5 p-2">Annotate (Ensembl, ClinVar) — <span className="text-emerald-300">Complete</span></div>
                  <div className="rounded-md bg-white/5 p-2">Rank pathogenicity with evidence — <span className="text-yellow-300">Review</span></div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-white/40">Preview</div>
                <div className="mt-2 rounded-md border border-white/10 bg-black/40 p-3 text-xs">
                  <div className="text-white/80">Top candidate: <span className="font-mono text-white">BRCA1:c.5266dupC</span></div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>ACMG evidence: PVS1+PS3+PM2; ClinVar 3-star pathogenic.</li>
                    <li>Literature support: 24 studies; strong functional assays (PMID:xxxxxxx).</li>
                    <li>Recommended: confirmatory assay; cascade testing guidance.</li>
                  </ul>
                </div>
                <div className="mt-3 rounded-md border border-white/10 bg-black/40 p-3 text-xs">
                  <div className="text-white/80">Trait synthesis (Agrigenomics)</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>Yield and drought tolerance markers prioritized across 7 datasets.</li>
                    <li>Shortlist for crossing strategy generated with confidence tiers.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 px-4 py-3 text-[11px] text-white/50">
              All actions logged with citations and reproducible parameters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
