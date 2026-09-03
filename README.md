# PriceBriefs — Public Engineering Case Study

**Status:** Building / technical falsification  
**Focus:** Evidence-backed competitive price intelligence  
**Portfolio:** https://sarmadtawfeek.se/

> This repository explains the problem, system boundary and engineering decisions. The implementation source remains private by design.

## The problem

Competitive price data is easy to collect and surprisingly easy to misuse.

A price difference is not decision-grade when the products do not match, the source evidence is weak, the item is unavailable or stale, or the system quietly fills gaps with assumptions.

PriceBriefs is built around a stricter invariant:

```text
OBSERVATION → TRUTH → COMMERCIAL IMPORTANCE → DECISION → EVIDENCE
```

A recommendation should not outrun the identity and source evidence supporting it.

## System at a glance

```text
Market observation
       ↓
Product identity + source checks
       ↓
Commercial interpretation
       ↓
Bounded review decision
       ↓
Evidence attached to the decision
```

## What I want a technical reviewer to inspect

- **Identity before comparison.** Cross-product or weakly matched observations should not drive a pricing decision.
- **Evidence before recommendation.** A believable number is not enough; the decision should remain traceable to supporting observations.
- **Fail closed on weak inputs.** Stale, unavailable, mismatched or incomplete evidence should reduce or stop the decision path.
- **Observation and decision are separate layers.** The system should not collapse raw collection into commercial action.
- **Human review can be the correct automation boundary.** Automation is valuable when it improves a decision without pretending every decision should be autonomous.

## AI-native build approach

AI helps me move quickly across exploration, implementation, integration investigation, test generation and review. For a system like PriceBriefs, that speed is only useful if the data and decision boundaries remain explicit.

```text
Business question
      ↓
Evidence + identity constraints
      ↓
AI-assisted exploration / implementation
      ↓
Deterministic validation
      ↓
Bounded decision
      ↓
Evidence review / refusal state
```

More detail: [docs/HOW_I_BUILD_WITH_AI.md](docs/HOW_I_BUILD_WITH_AI.md)

## Technical context

Current project evidence supports work with:

`TypeScript` · `Node.js` · `deterministic data contracts` · `artifact hashing` · `CI / evidence validation`

These are implementation contexts, not self-rated proficiency badges.

## Verification mindset

The system direction uses evidence-bound artifacts and deterministic validation so a public or internal brief can be traced back to the observations that justify it. Weak evidence should never be cosmetically repaired into a stronger decision.

See [docs/VERIFICATION.md](docs/VERIFICATION.md).

## Current truth boundary

This repository does **not** claim:

- customer outcome metrics;
- autonomous pricing authority;
- broad production-scale ingestion;
- universal retailer or product coverage;
- product-market fit.

## Public / private boundary

Private collection logic, operator workflows, exact schemas, raw evidence, infrastructure details and implementation source are intentionally not published.

See [PUBLIC_BOUNDARY.md](PUBLIC_BOUNDARY.md).
