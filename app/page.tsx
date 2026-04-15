"use client";

import { useState } from "react";

const findings = [
  {
    org: "wolfSSL ML-DSA",
    cwe: "CWE-190",
    severity: "HIGH",
    desc: "11 overflows in ML-DSA (FIPS 204/205) — FIPS 140-3 certified post-quantum signatures — 32-bit targets",
    logo: "🔐",
  },
  {
    org: "Mozilla NSS",
    cwe: "CWE-191",
    severity: "HIGH",
    desc: "Integer underflow in RSA-PSS — patched same-day by Mozilla",
    logo: "🦊",
  },
  {
    org: "FreeRTOS",
    cwe: "CWE-190",
    severity: "CRITICAL",
    desc: "Arithmetic overflow in task scheduler — Amazon AWS embedded OS",
    logo: "⚙️",
  },
  {
    org: "NASA cFS",
    cwe: "CWE-190",
    severity: "CRITICAL",
    desc: "Integer overflow in core flight software — space mission infrastructure",
    logo: "🚀",
  },
  {
    org: "OpenVPN",
    cwe: "CWE-195",
    severity: "HIGH",
    desc: "Signed/unsigned mismatch in packet parser — OVP-001/002",
    logo: "🔒",
  },
  {
    org: "strongSwan",
    cwe: "CWE-131",
    severity: "HIGH",
    desc: "Stack alloca with attacker-controlled size — VPN infrastructure",
    logo: "🛡️",
  },
  {
    org: "BC Government",
    cwe: "CWE-190",
    severity: "CRITICAL",
    desc: "12 bugs across court/health systems — disclosed to OCIOSecurity",
    logo: "🏛️",
  },
  {
    org: "OpenAPS",
    cwe: "CWE-369",
    severity: "CRITICAL",
    desc: "Division by zero in insulin calculator — 50k+ patients affected",
    logo: "💉",
  },
];

const steps = [
  {
    num: "01",
    title: "Parse & Build IR",
    desc: "COBALT ingests your C/C++ source or SBOM dependencies and builds a complete intermediate representation with full cross-file call graph.",
  },
  {
    num: "02",
    title: "Z3 Constraint Solving",
    desc: "For each potential vulnerability path, we generate Z3 constraints. SAT = proven exploitable. UNSAT = proven safe. No false positive ambiguity.",
  },
  {
    num: "03",
    title: "Attestation Report",
    desc: "Every finding ships with a machine-verifiable Z3 proof. Every clean result ships with an UNSAT certificate. Signed PDF for compliance.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,71,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,71,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(0,71,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "#0047FF",
              boxShadow: "0 0 20px rgba(0,71,255,0.4)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2L3 6v6l6 4 6-4V6L9 2z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 6v6M6 7.5l3 1.5 3-1.5"
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-wide text-white">
            COBALT
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-mono"
            style={{
              background: "rgba(0,71,255,0.15)",
              color: "#a0b4ff",
              border: "1px solid rgba(0,71,255,0.3)",
            }}
          >
            BETA
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://arxiv.org/abs/2604.05292"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm px-4 py-2 hidden sm:block"
          >
            arXiv Paper
          </a>
          <a href="#waitlist" className="btn-primary text-sm px-4 py-2">
            Request Access
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 text-center px-6 pt-16 pb-20 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8 font-mono"
          style={{
            background: "rgba(0,71,255,0.1)",
            border: "1px solid rgba(0,71,255,0.25)",
            color: "#a0b4ff",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#0047FF", boxShadow: "0 0 6px #0047FF" }}
          />
          arXiv 2604.05292 · Live Research · 19 Tier-1 Disclosures
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          <span className="gradient-text">Formal Proof.</span>
          <br />
          <span className="text-white">Not Heuristics.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#8899cc] max-w-2xl mx-auto mb-10 leading-relaxed">
          COBALT is the only security scanner that attaches a{" "}
          <span className="text-[#a0b4ff]">Z3 mathematical proof</span> to every
          finding. SAT means proven exploitable. UNSAT means proven safe.{" "}
          <span className="text-[#a0b4ff]">
            CodeQL misses 100% of cross-file integer overflows.
          </span>{" "}
          We find them with certainty.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="btn-primary px-8 py-3 text-base w-full sm:w-auto"
          >
            Request Early Access
          </a>
          <a
            href="https://arxiv.org/abs/2604.05292"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-8 py-3 text-base w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 12L12 4M12 4H6M12 4v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Read the Paper
          </a>
        </div>

        {/* Stats bar */}
        <div className="glass mt-14 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { val: "19", label: "Tier-1 Disclosures" },
            { val: "100%", label: "CodeQL Miss Rate" },
            { val: "Z3", label: "Proof Engine" },
            { val: "0", label: "False Proof Rate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold mb-1 gradient-text-blue">
                {s.val}
              </div>
              <div className="text-xs text-[#6677aa] uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / DIFFERENTIATION */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,60,60,0.04)",
              border: "1px solid rgba(255,60,60,0.1)",
            }}
          >
            <div className="text-sm font-mono text-[#ff6060] mb-4 uppercase tracking-widest">
              Every other scanner
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Heuristics &amp; Pattern Matching
            </h3>
            <ul className="space-y-3 text-[#8899cc] text-sm">
              {[
                "Flags suspicious patterns — no proof of exploitability",
                "High false positive rate — alert fatigue kills adoption",
                "Misses cross-file flows — bounded to single functions",
                "Can't prove safety — only absence of known patterns",
                "CodeQL: 0/90 cross-file integer overflows detected",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#ff6060] mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-blue rounded-2xl p-8"
            style={{ boxShadow: "0 0 40px rgba(0,71,255,0.08)" }}
          >
            <div className="text-sm font-mono text-[#3370ff] mb-4 uppercase tracking-widest">
              COBALT
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Z3 Formal Verification
            </h3>
            <ul className="space-y-3 text-[#8899cc] text-sm">
              {[
                "SAT result = mathematically proven exploitable path",
                "UNSAT result = mathematically proven safe — attestable",
                "Full cross-file interprocedural analysis with call graph",
                "Every finding ships with a machine-verifiable Z3 proof",
                "Certified UNSAT for audit & compliance reporting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#0047FF] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-[#3370ff] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Proof in three steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="glass rounded-2xl p-7">
              <div
                className="text-4xl font-bold font-mono mb-4"
                style={{ color: "rgba(0,71,255,0.5)" }}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#7788bb] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Z3 proof code block */}
        <div
          className="mt-10 rounded-2xl p-6 font-mono text-sm"
          style={{
            background: "rgba(0,10,30,0.8)",
            border: "1px solid rgba(0,71,255,0.15)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="text-[#3370ff] ml-2 text-xs">cobalt_z3_proof.py</span>
          </div>
          <div className="space-y-1 text-[#7788bb]">
            <div>
              <span className="text-[#6677aa]">
                # CWE-190: wolfSSL ML-DSA (FIPS 204) — dilithium.c:2196 — post-quantum sig
              </span>
            </div>
            <div>
              <span className="text-[#3370ff]">s</span>
              {" = "}
              <span className="text-[#60a5fa]">z3.Solver</span>
              {"()"}
            </div>
            <div>
              <span className="text-[#3370ff]">a</span>
              {" = "}
              <span className="text-[#60a5fa]">z3.BitVec</span>
              {"("}
              <span className="text-[#a5f3a5]">&apos;coeff&apos;</span>
              {", 32)  "}
              <span className="text-[#6677aa]"># ML-DSA-44 coefficient</span>
            </div>
            <div>
              <span className="text-[#3370ff]">s</span>
              {".add(a >= 0, a << 10 > "}
              <span className="text-[#f9a8d4]">0x7FFFFFFF</span>
              {")  "}
              <span className="text-[#6677aa]"># signed overflow</span>
            </div>
            <div className="mt-2">
              <span className="text-[#60a5fa]">result</span>
              {" = s.check()"}
            </div>
            <div className="mt-1 text-[#28c840]">
              {">>> "}
              <span className="text-white">sat</span>
              {"  "}
              <span className="text-[#28c840]">
                # ✓ FIPS 140-3 certified PQC — CWE-190 CONFIRMED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FINDINGS / SOCIAL PROOF */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-[#3370ff] uppercase tracking-widest mb-3">
            Proven in production
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Real findings.{" "}
            <span className="gradient-text-blue">Real proof.</span>
          </h2>
          <p className="text-[#7788bb] mt-3 max-w-xl mx-auto">
            COBALT has disclosed verified vulnerabilities to government agencies,
            open-source maintainers, and critical infrastructure operators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {findings.map((f) => (
            <div key={f.org} className="finding-card p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{f.logo}</span>
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                    f.severity === "CRITICAL"
                      ? "text-[#ff6060] bg-[rgba(255,60,60,0.1)] border border-[rgba(255,60,60,0.2)]"
                      : "text-[#fbbf24] bg-[rgba(251,191,36,0.08)] border border-[rgba(251,191,36,0.2)]"
                  }`}
                >
                  {f.severity}
                </span>
              </div>
              <div className="font-bold text-white text-sm mb-1">{f.org}</div>
              <div className="text-xs font-mono mb-2" style={{ color: "#3370ff" }}>
                {f.cwe}
              </div>
              <div className="text-xs text-[#6677aa] leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://arxiv.org/abs/2604.05292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#3370ff] hover:text-white transition-colors"
          >
            Read the full technical report on arXiv →
          </a>
        </div>
      </section>

      {/* USE CASES */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-[#3370ff] uppercase tracking-widest mb-3">
            Built for enterprise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Who needs formal proof?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🏭",
              title: "Critical Infrastructure",
              desc: "OT/ICS vendors shipping firmware built on OSS. COBALT scans your dependency tree and generates attestation for CISA SSDF compliance.",
              tags: ["CISA SSDF", "IEC 62443", "NERC CIP"],
            },
            {
              icon: "🏥",
              title: "Medical Devices",
              desc: "FDA 510(k) submissions require software bill of materials. COBALT provides machine-verifiable UNSAT certificates for each dependency.",
              tags: ["FDA 510(k)", "IEC 62304", "SBOM"],
            },
            {
              icon: "🛡️",
              title: "Defense & Aerospace",
              desc: "DoD contractors need evidence-based vulnerability analysis. Z3 proofs meet the bar for DO-178C and MIL-STD software assurance.",
              tags: ["DoD CMMC", "DO-178C", "NIST RMF"],
            },
          ].map((uc) => (
            <div key={uc.title} className="glass rounded-2xl p-7">
              <div className="text-3xl mb-4">{uc.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{uc.title}</h3>
              <p className="text-sm text-[#7788bb] leading-relaxed mb-4">
                {uc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {uc.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: "rgba(0,71,255,0.1)",
                      color: "#6688cc",
                      border: "1px solid rgba(0,71,255,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section
        id="waitlist"
        className="relative z-10 px-6 py-24 max-w-2xl mx-auto text-center"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,71,255,0.12) 0%, transparent 70%)",
          }}
        />
        <p className="text-sm font-mono text-[#3370ff] uppercase tracking-widest mb-4">
          Early Access
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Request a demo
        </h2>
        <p className="text-[#7788bb] mb-8">
          We&apos;re onboarding enterprise security teams and critical infrastructure
          vendors. Get early access and a custom scan of your codebase.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-lg text-white placeholder-[#445577] outline-none focus:ring-2 focus:ring-[#0047FF]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 whitespace-nowrap"
            >
              Request Access
            </button>
          </form>
        ) : (
          <div className="glass-blue rounded-xl px-8 py-5 max-w-md mx-auto">
            <div className="text-[#0047FF] text-2xl mb-2">✓</div>
            <div className="text-white font-semibold">
              You&apos;re on the list
            </div>
            <div className="text-sm text-[#7788bb] mt-1">
              We&apos;ll reach out within 48 hours.
            </div>
          </div>
        )}

        <p className="text-xs text-[#445566] mt-4">
          Enterprise pricing starts at $50,000/yr per product line.
          <br />
          Scan your first dependency tree free.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "#0047FF" }}
            >
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2L3 6v6l6 4 6-4V6L9 2z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bold text-sm text-white">COBALT</span>
            <span className="text-[#334466] text-sm">·</span>
            <span className="text-xs text-[#334466]">
              powered by QreativeLab
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#445566]">
            <a
              href="https://arxiv.org/abs/2604.05292"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a0b4ff] transition-colors"
            >
              arXiv Paper
            </a>
            <a
              href="mailto:dominik@qreativelab.io"
              className="hover:text-[#a0b4ff] transition-colors"
            >
              Contact
            </a>
            <span>© 2026 QreativeLab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
