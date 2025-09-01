import React from 'react';
import { ShieldCheck, Lock, Database } from 'lucide-react';

export default function Trust() {
  return (
    <section id="security" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Security, compliance, and trust</h2>
            <p className="mt-3 text-white/70">
              Security is built-in, not bolted on. We designed AlgoGenome for clinical and enterprise requirements.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-400" />
                <div>
                  <div className="text-sm font-semibold">Regulatory readiness</div>
                  <div className="text-sm text-white/70">HIPAA-ready processes, SOC 2-aligned controls, PHI minimization, and data residency options.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <Lock className="mt-0.5 h-5 w-5 text-cyan-400" />
                <div>
                  <div className="text-sm font-semibold">Defense in depth</div>
                  <div className="text-sm text-white/70">SAML/SCIM, RBAC, per-project secrets, KMS-backed encryption, and immutable audit logs.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <Database className="mt-0.5 h-5 w-5 text-fuchsia-400" />
                <div>
                  <div className="text-sm font-semibold">Your data, your VPC</div>
                  <div className="text-sm text-white/70">Deploy on-prem or in your cloud. We ship as containers with infrastructure-as-code for rapid audits.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 id="contact" className="text-base font-semibold">Talk to our team</h3>
            <p className="mt-2 text-sm text-white/70">We can map AlgoGenome to your security controls and data governance model.</p>
            <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Full name" required />
                <input className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Work email" type="email" required />
              </div>
              <input className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Company / Institution" required />
              <textarea className="min-h-[96px] rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="What are your goals or constraints?" />
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-white/70">
                  <input type="checkbox" className="accent-emerald-400" />
                  I agree to be contacted about AlgoGenome.
                </label>
                <button className="rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white" type="submit">Send message</button>
              </div>
              <p className="text-[11px] text-white/50">By submitting, you agree to our privacy policy. We do not train models on your private data.</p>
            </form>
          </div>
        </div>
        <div className="mt-14 text-center text-xs text-white/50">
          Trusted by emerging biotechs and research labs advancing precision medicine.
        </div>
      </div>
    </section>
  );
}
