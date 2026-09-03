# PriceBriefs — evidence-backed competitive price intelligence

**Sarmad Tawfeek · AI systems · technical implementation · automation**  
**Status:** Building / technical falsification  
**Portfolio:** https://sarmadtawfeek.se/

Price data is easy to collect and easy to misuse. PriceBriefs is built around a stricter rule:

> **An observation is not a commercial decision until product identity, source quality and evidence eligibility survive review.**

```text
OBSERVATION → TRUTH → COMMERCIAL IMPORTANCE → DECISION → EVIDENCE
```

## What exists today

The private implementation currently includes a deterministic **three-product public sample** derived from hash-bound artifact evidence rather than hand-written demo observations.

That sample deliberately produces different outcomes:

- two bounded `WATCH` decisions;
- one `INSUFFICIENT_EVIDENCE` refusal because no clean in-stock peer supports a stronger conclusion.

The implementation also includes:

- TypeScript contracts and deterministic validation;
- a manifest-driven batch builder;
- deterministic rendering of generated briefs;
- CI with strict TypeScript checking and dependency-free Node tests;
- verification that generated output is current;
- permission-based sample intake and isolated operator-workspace preparation;
- hash checks around prepared and delivered artifacts.

**Start with the evidence layer:** [PROOF.md](PROOF.md)

## The decision boundary

```text
Market observation
       ↓
Product identity check
       ↓
Source + availability + freshness checks
       ↓
Commercial interpretation
       ↓
WATCH / other bounded review state / INSUFFICIENT_EVIDENCE
       ↓
Evidence-bound brief
```

The important engineering choice is that the system is allowed to produce **less output** when the evidence is weak.

## A failure case that matters

Suppose a competitor page is reachable and contains a lower number, but the product identity is ambiguous or the only comparable peer is out of stock.

The easy implementation produces a price gap anyway.

PriceBriefs instead refuses to let that observation drive the review. In the current three-product sample, one case intentionally ends as `INSUFFICIENT_EVIDENCE` because there is no clean in-stock peer.

That refusal is product behavior, not an error to hide.

## Where AI fits

AI accelerates implementation, integration investigation, edge-case generation and review. It does not get authority to repair weak evidence into a stronger commercial answer.

I keep product identity, source qualification, eligibility rules and the allowed decision states explicit so generated output can be challenged against evidence.

More detail: [docs/HOW_I_BUILD_WITH_AI.md](docs/HOW_I_BUILD_WITH_AI.md)

## Technical context

`TypeScript` · `Node.js` · `deterministic contracts` · `SHA-256 evidence binding` · `CI` · `automated tests`

## Inspect the proof

- [Observable proof](PROOF.md)
- [Sanitized decision examples](examples/sanitized-brief-decisions.json)
- [System view](docs/SYSTEM_VIEW.md)
- [Engineering decisions](docs/DECISIONS.md)
- [Verification approach](docs/VERIFICATION.md)
- [Public / private boundary](PUBLIC_BOUNDARY.md)

## Not claimed

- customer outcome metrics;
- autonomous price-changing authority;
- broad production-scale ingestion;
- universal retailer/product coverage;
- product-market fit.

The source implementation remains private. This repository exposes the decision quality and implementation proof without publishing the collection/runtime blueprint.

## Related engineering case studies

- [ReleaseProof](https://github.com/SamCT86/releaseproof-case-study) — artifact-bound verification and recheck discipline.
- [Billable Meetings OS](https://github.com/SamCT86/billable-meetings-os-case-study) — contract + evidence automation with a real review state.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — verified outcomes before broader reliability claims.
