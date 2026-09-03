# How I build with AI

AI is part of the implementation workflow, but it is not allowed to become the source of truth for the pricing decision.

## Where AI helps

I use AI to accelerate:

- solution exploration;
- implementation drafts and revisions;
- integration investigation;
- edge-case generation;
- test scaffolding;
- documentation and review.

## What remains explicit

For PriceBriefs, the system still needs an explicit owner for:

- product identity;
- source qualification;
- data freshness and availability;
- which observations are eligible for comparison;
- what decision states exist;
- when the correct result is insufficient evidence;
- whether a recommendation is stronger than the evidence behind it.

## Quality model

```text
AI-assisted candidate
        ↓
identity + source checks
        ↓
deterministic validation
        ↓
bounded decision
        ↓
evidence review
        ↓
accept / refuse / revise
```

The point is not to remove human judgment. The point is to use AI to accelerate the work while keeping the commercial decision inspectable and constrained by evidence.
