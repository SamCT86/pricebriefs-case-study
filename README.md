# PriceBriefs — evidence-backed competitive price intelligence

**Sarmad Tawfeek · AI systems · technical implementation · automation**  
**Status:** Building / technical falsification  
**Portfolio:** https://sarmadtawfeek.se/

## My role in this build

I researched the product opportunity, chose the direction, defined the system blueprint and quality expectations, and used specialist AI personas/agents to drive implementation and iteration.

The implementation is heavily AI-assisted. I do **not** claim that I personally hand-wrote every line of code or independently selected every low-level technical mechanism. My direct ownership is the product problem, high-level system requirements, expert/persona orchestration, acceptance criteria and quality gates.

Price data is easy to collect and easy to misuse. PriceBriefs is built around a stricter rule:

> **An observation is not a commercial decision until product identity, source quality and evidence eligibility survive review.**

```text
OBSERVATION → TRUTH → COMMERCIAL IMPORTANCE → DECISION → EVIDENCE
```

## What exists today

The private implementation currently includes a deterministic **three-product public sample** derived from hash-bound artifact evidence rather than hand-written demo observations.

That sample produces:

- two bounded `WATCH` decisions;
- one `INSUFFICIENT_EVIDENCE` refusal because no clean in-stock peer supports a stronger conclusion.

Current private-source evidence also includes:

- TypeScript contracts and deterministic validation;
- a manifest-driven batch builder;
- deterministic rendering of generated briefs;
- CI with strict TypeScript checking and Node tests;
- verification that generated output is current;
- permission-based sample intake and isolated operator-workspace preparation;
- hash checks around prepared and delivered artifacts.

**Start with the evidence layer:** [PROOF.md](PROOF.md)

## System boundary

```text
Market observation
       ↓
Product identity check
       ↓
Source + availability + freshness checks
       ↓
Commercial interpretation
       ↓
WATCH / bounded review state / INSUFFICIENT_EVIDENCE
       ↓
Evidence-bound brief
```

The system is allowed to produce **less output** when the evidence is weak.

These are current system requirements/behaviors; they are not a claim that I personally originated every low-level mechanism used to implement them.

## A failure state the system preserves

A competitor page may contain a plausible lower price while product identity is ambiguous or the only comparable peer is out of stock.

A weak automation turns that into a price-gap recommendation anyway. PriceBriefs instead allows the path to end as `INSUFFICIENT_EVIDENCE`.

## How AI fits

AI agents/models are used heavily for implementation, data/integration investigation, edge-case generation, tests, review and iteration.

My role is to define the commercial problem, blueprint the required system behavior, structure the expert/persona workflow, set the quality bar and require the system to pass evidence/quality gates before I accept stronger claims.

More detail: [docs/HOW_I_BUILD_WITH_AI.md](docs/HOW_I_BUILD_WITH_AI.md)

## Technical context

`TypeScript` · `Node.js` · `deterministic contracts` · `SHA-256 evidence binding` · `CI` · `automated tests`

Technology is implementation context, not a claim that I personally selected or hand-authored every component.

## Inspect the case study

- [Observable proof](PROOF.md)
- [Sanitized decision examples](examples/sanitized-brief-decisions.json)
- [System view](docs/SYSTEM_VIEW.md)
- [System requirements & trade-offs](docs/DECISIONS.md)
- [Verification approach](docs/VERIFICATION.md)
- [Public / private boundary](PUBLIC_BOUNDARY.md)

## Not claimed

- customer outcome metrics;
- autonomous price-changing authority;
- broad production-scale ingestion;
- universal retailer/product coverage;
- product-market fit;
- personal authorship of every implementation detail.

The source implementation remains private. This repository shows how I frame and direct an AI-assisted decision system while keeping the underlying collection/runtime blueprint private.

## Related engineering case studies

- [ReleaseProof](https://github.com/SamCT86/releaseproof-case-study) — artifact-bound verification and recheck discipline.
- [Billable Meetings OS](https://github.com/SamCT86/billable-meetings-os-case-study) — contract + evidence automation with a real review state.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — verified outcomes before broader reliability claims.
