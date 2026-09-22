# PriceBriefs - validate a price comparison before acting on it

[![verify-reference](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/pricebriefs-case-study/actions/workflows/verify-reference.yml)

**Portfolio:** https://sarmadtawfeek.se

Competitive pricing looks simple until the input data is wrong.

A lower price might belong to another product, an item that is out of stock, stale evidence, or a page whose identity changed during collection. I built this reference because I would rather have software refuse a weak comparison than confidently act on bad evidence.

> **A lower price is not actionable evidence unless product identity, currency, source qualification, trace identity, availability, and freshness pass validation.**

## Try it

```bash
git clone https://github.com/SamCT86/pricebriefs-case-study.git
cd pricebriefs-case-study
npm test
```

## How it works

```text
raw market observations
-> evidence-contract / identity / currency checks
-> source qualification / stock / freshness checks
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
7. unqualified or malformed source evidence cannot drive a price gap;
8. missing or duplicate evidence IDs cannot support an ambiguous decision;
9. raw cross-currency prices are refused rather than compared directly;
10. malformed truthy stock/freshness values cannot bypass boolean checks;
11. the reference never promotes itself to autonomous `ACT`.

### Public source-qualification boundary

`sourceQualified` is an explicit caller-supplied qualification state in this bounded reference. The evaluator requires it to be a real boolean and refuses missing or false qualification, but it does **not** authenticate a retailer, re-run private collection checks, or prove source authority by itself. Those collection/runtime mechanisms remain outside this public slice.

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

## What this repo is meant to show

The point is not that software should change prices automatically. It is that a commercial decision should not be built on a comparison the system cannot defend.

This public reference does **not** claim customer ROI, autonomous price-changing authority, universal retailer coverage, product-market fit, or production equivalence.

I use AI tools during implementation, but I own the evidence contract, refusal states, debugging, tests, and the final judgment about what the software is allowed to conclude.

For my main Applied AI runtime work, see [Agent Forecast Foundry](https://github.com/SamCT86/agent-forecast-foundry-case-study).
