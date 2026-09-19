# PriceBriefs — evidence-gated price intelligence, runnable reference

[![verify-reference](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml)

A public, executable engineering reference for one PriceBriefs principle: **a plausible lower price is not actionable evidence unless product identity, availability and freshness survive validation.** The production collection/runtime system remains private.

## Run locally

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

The tests are the primary executable surface. Change the market fixture and observe which evidence is accepted or suppressed.

## Production system

The private implementation is materially broader and includes collection/normalization, artifact and witness verification, hash-bound evidence, batch generation, delivery verification, operator workspaces and customer-facing surfaces. None of that private runtime or infrastructure is published here.

This repository is a **reference edition**, not a source release of the commercial system.

## Engineering ownership

AI tools are part of my implementation workflow. I use them to accelerate investigation, implementation, testing and review, while remaining accountable for the system boundary, architecture constraints, code review, debugging, acceptance criteria and the decision to ship or reject a change.

The useful question here is not who typed each token. It is whether the behavior is explicit, testable, reproducible and safe under failure. The executable tests and design trade-offs in this repository are the public evidence for that claim.

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

## Related runnable references

- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic commercial truth from contract + evidence.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — verify observed state before trusting agent mutations.
- [ReleaseProof](https://github.com/SamCT86/releaseproof-case-study) — exact-artifact evidence and reproducible recheck boundaries.

## Not claimed

This repository does not claim customer ROI, autonomous price-changing authority, universal retailer coverage, product-market fit, or that this small reference implementation is the production PriceBriefs runtime.
