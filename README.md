# PriceBriefs - validate a price comparison before acting on it

[![verify-reference](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml)

**Portfolio:** https://sarmadtawfeek.se

Competitive pricing looks simple until the input data is wrong.

A lower price might belong to another product, an item that is out of stock, stale evidence, or a page whose identity changed during collection. I built this reference to show how those problems can be handled before the data reaches a commercial decision.

> **A lower price is not actionable evidence unless product identity, availability, and freshness pass validation.**

## Try it

```bash
git clone https://github.com/SamCT86/pricebriefs-case-study.git
cd pricebriefs-case-study
npm test
```

## How it works

```text
raw market observations
-> identity / stock / freshness checks
-> comparable evidence set
-> WATCH | INSUFFICIENT_EVIDENCE
```

The reference demonstrates that:

1. a valid comparable peer can support a bounded `WATCH` state;
2. no eligible peer becomes `INSUFFICIENT_EVIDENCE`;
3. out-of-stock evidence cannot drive a price gap;
4. cross-product evidence cannot drive a price gap;
5. stale evidence cannot drive a price gap;
6. peer ordering does not change the result;
7. the reference never promotes itself to autonomous `ACT`.

## What to inspect

- `src/reference-price-decision.mjs` - evidence-to-decision logic.
- `test/reference-price-decision.test.mjs` - refusal-state and determinism tests.
- `fixtures/synthetic-market.json` - synthetic market evidence.
- `PROOF.md` - broader implementation evidence.
- `PUBLIC_BOUNDARY.md` - what is public and what stays private.

## The broader engineering pattern

The private implementation expands this into a larger data pipeline with collection, normalization, artifact witnesses, source hashes, matcher states, holdout/cohort machinery, recovery controls, admission rules, and customer-facing brief generation.

A representative private import path checks source hashes, byte lengths, safe HTTPS paths, host identity, extraction quality, matcher version, and observation time before an observation can enter a brief.

The practical lesson is straightforward: **data collection is not finished when a page was fetched. It is finished when the evidence is reliable enough for the decision that will use it.**

## Public and private boundary

Published here:

- comparison logic;
- synthetic market fixtures;
- adversarial tests and CI;
- non-proprietary evidence documentation.

Kept private:

- production collectors and adapters;
- real source artifacts and customer/operator workspaces;
- infrastructure credentials and deployment controls;
- proprietary ingestion/runtime workflows;
- unreleased commercial decision logic.

## Related work

- [Agent Forecast Foundry](https://github.com/SamCT86/agent-forecast-foundry-case-study) - verify AI-agent runs after the model responds.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) - read back external state before trusting a mutation.
- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) - turn commercial rules and meeting evidence into deterministic decisions.
- [ReleaseProof](https://github.com/SamCT86/releaseproof-case-study) - bind release evidence to the exact artifact being shipped.

## Engineering accountability

I use AI tools as part of my implementation workflow. I remain responsible for the problem framing, architecture, debugging, acceptance criteria, evidence design, tests, and release decisions.

## Scope

This repository does not claim customer ROI, autonomous price-changing authority, universal retailer coverage, product-market fit, or that this public reference is the production PriceBriefs runtime.
