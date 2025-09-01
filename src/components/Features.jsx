import React from 'react';
import { Brain, Database, Search, Lock } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Unified genomic search',
    desc: 'Aggregate variants, gene annotations, pathways, phenotypes, and literature with entity resolution and deduplication.',
  },
  {
    icon: Database,
    title: 'Continuously updated corpus',
    desc: 'Streams from public repositories (e.g., GEO, SRA, ClinVar, Ensembl), preprints, and journals with automatic provenance.',
  },
  {
    icon: Brain,
    title: 'Agentic analysis workflows',
    desc: 'Our AI agent executes multi-step pipelines: QC, alignment, differential expression, variant calling, enrichment, and reporting.',
  },
  {
    icon: Lock,
    title: 'Enterprise-grade privacy',
    desc: 'Self-host or VPC deploy. Row-level access controls, encryption in transit and at rest, and full auditability.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for genomic teams</h2>
          <p className="mt-3 text-white/70">
            Make high-confidence decisions with a system of record that unifies discovery, curation, and analysis—without the manual glue.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 text-black shadow-lg shadow-emerald-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-base font-semibold text-white">What makes it different</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Automatically tracks sources, versions, and evidence strength for each claim.</li>
              <li>• Structured reasoning traces for every agentic decision—reviewable and reproducible.</li>
              <li>• Pluggable compute backends: run pipelines on your cluster or our secure runtime.</li>
              <li>• Human-in-the-loop curation flows with role-based approvals.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-base font-semibold text-white">Use cases</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Variant interpretation and clinical reporting.</li>
              <li>• Target discovery with cross-omics literature synthesis.</li>
              <li>• Cohort prioritization and phenotype-driven search.</li>
              <li>• Rapid technical due diligence for partnerships and trials.</li>
              <li>• Agrigenomics: Increase efficiency in crop varietal development via rapid marker discovery, trait-literature synthesis, and genotype–phenotype prioritization.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
