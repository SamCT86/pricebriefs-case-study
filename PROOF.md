# Observable proof

This file is the public proof layer behind the PriceBriefs case study.

It is based on a fresh read of the private implementation repository. No private source code, raw buyer data, internal endpoints, infrastructure credentials or reproducible collection logic are copied here.

## What is implemented

The current private source contains:

- a deterministic three-product PriceBrief sample;
- artifact-bound source summaries and raw-witness bindings;
- per-product recipes and derived brief contracts;
- a manifest-driven builder;
- a deterministic renderer;
- verification that generated output is current;
- strict TypeScript checking plus Node-based automated tests;
- a permission-based sample intake flow;
- isolated operator-workspace preparation and delivery verification.

The sample is not a hand-authored marketing mock. Its public briefs are derived from hash-bound artifact evidence.

## Observable sample behavior

The current three-product sample produces:

```text
2 × WATCH
1 × INSUFFICIENT_EVIDENCE
```

The refusal case exists because no clean in-stock peer is available to support a stronger decision.

That is useful proof of the product rule:

> **No surfaced recommendation may outrun product identity or source evidence.**

## Verification rules represented in the implementation

The batch builder checks a bounded set of properties before generated output is accepted, including:

- distinct product identity;
- source qualification;
- evidence/artifact consistency;
- eligible peer completeness;
- refusal of review-required, unavailable, out-of-stock or mismatched evidence as a basis for an unsupported price gap.

Static historical snapshots are deliberately prevented from pretending to be autonomous action authority.

## Sample-fulfillment proof

The private source also contains a permission-based sample workflow:

- one merchant storefront;
- exactly three merchant product URLs;
- a bounded set of competitor domains;
- explicit authorization for public collection;
- operator workspaces kept outside the source repository;
- prepared artifacts bound by SHA-256;
- delivery verification that checks the expected brief/evidence bundle before a delivery can be considered verified.

The browser intake is convenience. The operator contract is authoritative.

## A failure I deliberately preserve

**Scenario:** a page contains a plausible lower price, but the evidence cannot establish a clean comparable in-stock product.

Bad outcome:

```text
"Competitor is cheaper → act"
```

PriceBriefs outcome:

```text
INSUFFICIENT_EVIDENCE
```

That choice reduces output volume but increases the meaning of the outputs that survive.

## Sanitized examples

See [examples/sanitized-brief-decisions.json](examples/sanitized-brief-decisions.json).

The examples are synthetic/redacted representations of the implemented decision states, not customer records.

## Implemented now vs not claimed

| Area | Public evidence state |
|---|---|
| Deterministic three-product sample | Implemented |
| Hash-bound source/artifact evidence | Implemented |
| WATCH + refusal-state output | Demonstrated in current sample |
| Strict TS / Node test verification | Implemented |
| Permission-based sample preparation | Implemented |
| Customer outcome metrics | Not claimed |
| Autonomous production price changes | Not claimed |
| Product-market fit | Not claimed |

## What I can defend in an interview

- why identity must be established before price comparison;
- why collection and commercial decision are separate layers;
- how a generated brief can be bound back to its evidence;
- why an out-of-stock or mismatched peer should stop a recommendation;
- why refusal states improve a commercial automation system;
- where AI speeds the implementation and where deterministic rules must remain authoritative.
