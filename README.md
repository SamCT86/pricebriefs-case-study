# PriceBriefs — prove a comparison before acting on it

[![verify-reference](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml)

**Engineering signal:** data acquisition, normalization, provenance, comparability gates and deterministic commercial refusal states.

**Portfolio:** https://sarmadtawfeek.se

Competitive pricing looks simple until the input data is wrong. A lower number can belong to another product, an unavailable item, stale evidence or a page whose identity changed during collection.

PriceBriefs treats those failures as part of the product—not as cleanup after the decision.

This public reference makes one decision boundary executable:

> **A plausible lower price is not actionable evidence unless product identity, availability and freshness survive validation.**

## Run the evidence cases

```bash
git clone https://github.com/SamCT86/pricebriefs-case-study.git
cd pricebriefs-case-study
npm test
```

Primary surfaces:

- `src/reference-price-decision.mjs` — bounded evidence-to-decision logic
- `test/reference-price-decision.test.mjs` — refusal-state and determinism cases
- `fixtures/synthetic-market.json` — synthetic merchant/peer evidence
- `PROOF.md` — broader implementation evidence
- `PUBLIC_BOUNDARY.md` — public/private boundary

## Data-to-decision contract

```text
raw market observations
→ identity / stock / freshness validation
→ comparable evidence set
→ WATCH | INSUFFICIENT_EVIDENCE
```

The executable reference demonstrates that:

1. a clean comparable peer can support a bounded `WATCH` state;
2. no eligible peer yields `INSUFFICIENT_EVIDENCE`;
3. out-of-stock evidence cannot drive a price gap;
4. cross-product evidence cannot drive a price gap;
5. stale evidence cannot drive a price gap;
6. peer ordering does not change the result;
7. the reference never promotes itself to autonomous `ACT`.

## Broader engineering pattern

The private implementation expands this into an evidence-backed data pipeline with collection/normalization, artifact witnesses, SHA-bound source material, matcher states, holdout/cohort machinery, recovery controls, admission rules and customer-facing brief generation.

A representative private import path verifies source artifact hashes, byte lengths, safe HTTPS paths, host integrity, extraction quality, matcher version and observation timing before an observation can enter a public brief.

That is the core lesson this repository is meant to show: **data acquisition is not complete when a page was fetched; it is complete when the evidence is qualified enough for the decision that will consume it.**

## Public / private boundary

Published here:

- bounded comparison logic;
- synthetic market fixtures;
- adversarial tests and CI;
- non-proprietary evidence documentation.

Kept private:

- production collectors and adapters;
- real source artifacts and customer/operator workspaces;
- infrastructure credentials and deployment controls;
- proprietary ingestion/runtime workflows;
- unreleased commercial decision logic.

## Engineering accountability

AI tools are part of my implementation workflow. I remain accountable for problem framing, architecture constraints, debugging, acceptance criteria, evidence design, tests and release decisions.

## Related engineering proof

- [Agent Forecast Foundry](https://github.com/SamCT86/agent-cashflow-os-case-study) — bounded post-model verification and AI evaluation mechanics.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — reconcile observed state before trusting agent mutations.
- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic commercial decisions from contract + evidence.
- [ReleaseProof](https://github.com/SamCT86/releaseproof-case-study) — exact-artifact evidence and reproducible recheck boundaries.

## Scope

This repository does not claim customer ROI, autonomous price-changing authority, universal retailer coverage, product-market fit, or that this bounded reference is the production PriceBriefs runtime.
