# PriceBriefs — evidence-gated price intelligence, runnable reference

A public, executable engineering reference for one PriceBriefs principle: **a plausible lower price is not actionable evidence unless product identity, availability and freshness survive validation.** The production collection/runtime system remains private.

## Five-minute technical evaluation

```bash
git clone https://github.com/SamCT86/pricebriefs-case-study.git
cd pricebriefs-case-study
npm test
```

Then inspect:

- `src/reference-price-decision.mjs` — bounded evidence-to-decision reference;
- `test/reference-price-decision.test.mjs` — refusal-state and determinism tests;
- `fixtures/synthetic-market.json` — synthetic merchant/peer evidence;
- `PROOF.md` — broader implementation evidence;
- `PUBLIC_BOUNDARY.md` — what intentionally stays private.

## What this proves

The public reference preserves the core commercial safety boundary:

```text
market observations
→ product identity / stock / freshness eligibility
→ WATCH | INSUFFICIENT_EVIDENCE
```

It demonstrates that:

- a clean comparable peer can support a bounded `WATCH` state;
- no eligible peer yields `INSUFFICIENT_EVIDENCE`;
- out-of-stock evidence cannot drive a price gap;
- cross-product evidence cannot drive a price gap;
- stale evidence cannot drive a price gap;
- peer ordering does not change the decision;
- this static reference never escalates itself to autonomous `ACT`.

The tests are the primary evaluator surface. Change the market fixture and observe which evidence is accepted or suppressed.

## Production system

The private implementation is materially broader and includes collection/normalization, artifact and witness verification, hash-bound evidence, batch generation, delivery verification, operator workspaces and customer-facing surfaces. None of that private runtime or infrastructure is published here.

This repository is a **reference edition**, not a source release of the commercial system.

## How I build

I use AI agents heavily for implementation, investigation, testing and critique. My ownership is the commercial problem, evidence doctrine, system requirements, acceptance criteria, red-team cases and the decision to accept or reject the resulting implementation.

I do not claim to have hand-written every line. The intended engineering signal is the ability to make an AI-assisted decision system refuse unsupported conclusions instead of optimizing for confident-looking output.

## Public/private boundary

Public here:

- bounded decision logic;
- synthetic market fixtures;
- adversarial tests;
- CI;
- non-proprietary evidence documentation.

Private:

- production collectors and adapters;
- customer/operator workspaces and real source artifacts;
- infrastructure, credentials and deployment controls;
- proprietary ingestion/runtime workflows;
- unreleased commercial decision logic.

## Not claimed

This repository does not claim customer ROI, autonomous price-changing authority, universal retailer coverage, product-market fit, or that this small reference implementation is the production PriceBriefs runtime.
