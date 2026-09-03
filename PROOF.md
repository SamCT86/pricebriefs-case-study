# Observable proof

This file is the public proof layer behind the PriceBriefs case study.

It is based on a fresh read of the private implementation repository. No private source code, raw buyer data, internal endpoints, infrastructure credentials or reproducible collection logic are copied here.

**Ownership note:** the implementation evidence below is not a claim that I personally hand-authored or independently selected every low-level technical mechanism. My direct role is product research/direction, system blueprint and requirements, expert/persona orchestration, acceptance criteria and quality gates; AI is used heavily in implementation.

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

## Verification rules represented in the implementation

The implementation checks a bounded set of properties before generated output is accepted, including product identity, source qualification, evidence/artifact consistency, eligible-peer completeness and refusal of unsupported evidence as a basis for a stronger price-gap conclusion.

## Sample-fulfillment proof

The private source also contains a permission-based sample workflow with a bounded merchant/competitor scope, isolated operator workspaces, SHA-256-bound prepared artifacts and delivery verification.

This repo exposes the **existence and purpose** of those mechanisms, not the reproducible private implementation.

## A preserved failure state

**Scenario:** a page contains a plausible lower price, but the evidence cannot establish a clean comparable in-stock product.

Bad outcome:

```text
"Competitor is cheaper → act"
```

PriceBriefs outcome:

```text
INSUFFICIENT_EVIDENCE
```

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

## What I personally own and can explain

- why I pursued the competitive-price-intelligence problem and what decision problem I wanted the product to improve;
- the high-level blueprint from observation to evidence-backed commercial review;
- how I structured specialist AI personas/agents to research, build, critique and revise the system;
- the quality gates I required around weak evidence, refusal states and reviewability;
- what the current proof supports and what it does not support;
- how I direct further iteration when AI-generated work does not meet the system or quality requirements.

For a specific hash implementation, contract shape, renderer choice or code path, I distinguish between **implementation evidence** and **a decision I personally made**.
