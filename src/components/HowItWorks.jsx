import React from 'react';

const steps = [
  {
    k: 'Ingest',
    title: 'Ingest + normalize',
    desc: 'Continuously pull datasets and papers, harmonize schemas, resolve entities (genes, variants, diseases), and attach provenance.',
  },
  {
    k: 'Reason',
    title: 'Reason over evidence',
    desc: 'LLM+tool agents synthesize findings across modalities with confidence scoring, citations, and rationale traces.',
  },
  {
    k: 'Execute',
    title: 'Execute workflows',
    desc: 'Automate bioinformatics pipelines (QC, alignment, variant calling, DE, enrichment) using your compute or ours.',
  },
  {
    k: 'Deliver',
    title: 'Deliver insights',
    desc: 'Interactive reports, APIs, and dashboards with audit logs that pass peer review and regulatory scrutiny.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-gradient-to-b from-black to-[#07070a] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A transparent loop from ingestion to decision—optimized for scientific rigor.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.k} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-3 left-4 rounded-md bg-white text-black px-2 py-1 text-xs font-semibold">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <div id="demo" className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Request a white-glove demo</h3>
          <p className="mt-2 text-sm text-white/70">Bring a dataset or a paper. We will replicate part of your workflow live, end-to-end.</p>
          <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <input className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Work email" type="email" required />
            <input className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Organization" type="text" required />
            <input className="sm:col-span-2 rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="What problem are you solving?" type="text" />
            <button className="sm:col-span-2 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white" type="submit">Request demo</button>
          </form>
        </div>
      </div>
    </section>
  );
}
