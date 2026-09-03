# Verification approach

PriceBriefs treats evidence quality as part of the product rather than a cleanup step after collection.

## Verification layers

### 1. Observation integrity
The system needs a usable observation, not merely a scraped value.

### 2. Product identity
The observation must belong to the intended product before comparison can be meaningful.

### 3. Source qualification
A technically reachable page is not automatically a sufficiently strong source for a commercial decision.

### 4. Eligibility
Availability, freshness and other constraints determine whether an observation may influence the decision.

### 5. Bounded decision
The system can surface a review state without pretending it has authority to execute an autonomous price change.

### 6. Evidence binding
The resulting brief should remain traceable to the evidence that justified it.

## Refusal is part of verification

A useful outcome can be:

```text
INSUFFICIENT_EVIDENCE
```

That state is preferable to manufacturing a price gap from incomplete or mismatched data.

## What AI-assisted implementation must survive

- Are the compared products actually the intended products?
- Is the source qualified for the claim being made?
- Is the observation current and eligible?
- Is the generated brief derived from supporting evidence?
- Is the commercial recommendation narrower than or equal to the evidence strength?

The private repository contains the exact contracts, artifact structures, collection/runtime logic and validation implementation. Those details are intentionally outside this public case study.
