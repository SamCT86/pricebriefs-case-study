# PriceBriefs — evidence-gated price intelligence

[![verify-reference](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml)

A small executable reference for one PriceBriefs invariant: **a plausible lower price is not actionable evidence unless product identity, availability and freshness survive validation.** The production collection/runtime system remains private.

**Portfolio:** https://sarmadtawfeek.se

## Run locally

```bash
git clone https://github.com/SamCT86/pricebriefs-case-study.git
cd pricebriefs-case-study
npm test
```

Key files:

- `src/reference-price-decision.mjs` — bounded evidence-to-decision logic;
- `test/reference-price-decision.test.mjs` — refusal-state and determinism tests;
- `fixtures/synthetic-market.json` — synthetic merchant/peer evidence;
- `PROOF.md` — broader implementation evidence;
- `PUBLIC_BOUNDARY.md` — public/private boundary.

## Decision contract

```text
market observations
→ product identity / stock / freshness eligibility
→ WATCH | INSUFFICIENT_EVIDENCE
```

The reference demonstrates that:

- a clean comparable peer can support a bounded `WATCH` state;
- no eligible peer yields `INSUFFICIENT_EVIDENCE`;
- out-of-stock, cross-product or stale evidence cannot drive a price gap;
- peer ordering does not change the decision;
- this static reference never escalates itself to autonomous `ACT`.

The tests are the executable specification. Change the market fixture and observe which evidence is accepted or suppressed.

## Production boundary

The private implementation is materially broader: collection/normalization, artifact and witness verification, hash-bound evidence, batch generation, delivery verification, operator workspaces and customer-facing surfaces. None of that runtime or infrastructure is published here.

Public here:

- bounded decision logic;
- synthetic market fixtures;
- adversarial tests and CI;
- non-proprietary evidence documentation.

Private:

- production collectors and adapters;
- real source artifacts and customer/operator workspaces;
- infrastructure, credentials and deployment controls;
- proprietary ingestion/runtime workflows;
- unreleased commercial decision logic.

## Engineering process

AI tools are part of the implementation workflow. I remain accountable for system boundaries, architecture constraints, code review, debugging, acceptance criteria, tests and release decisions.

## Related references

- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic commercial truth from contract + evidence.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — verify observed state before trusting agent mutations.
- [ReleaseProof](https://github.com/SamCT86/releaseproof-case-study) — exact-artifact evidence and reproducible recheck boundaries.

## Scope

This repository does not claim customer ROI, autonomous price-changing authority, universal retailer coverage, product-market fit, or that this bounded reference is the production PriceBriefs runtime.
