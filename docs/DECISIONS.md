# Selected engineering decisions

## 1. Product identity before price comparison

A lower price is not useful evidence if the system matched the wrong product.

**Trade-off:** stricter identity checks reduce coverage, but they improve the quality of the decisions that remain.

## 2. Separate observation from commercial decision

Collection tells the system what was observed. It should not automatically decide what action deserves to follow.

**Trade-off:** more explicit layers, less accidental authority.

## 3. Fail closed on weak evidence

Stale, unavailable, cross-product or unsupported observations should stop or weaken the decision path rather than be repaired into a clean-looking recommendation.

**Trade-off:** fewer outputs, stronger trust in the outputs that survive.

## 4. Preserve review as a valid product boundary

The system is designed to support a bounded commercial review rather than pretending every price difference deserves automatic action.

**Trade-off:** less automation theater, more defensible operational use.

## 5. Bind generated output to evidence

A generated brief should be traceable to the evidence used to derive it rather than being hand-authored after the fact.

**Trade-off:** additional provenance work, better reproducibility.

## Interview questions this should create

- How do you decide that two products are comparable?
- What evidence is strong enough for a pricing review?
- Which failure states should stop a recommendation?
- Why not automate the price change itself?
- How do you prevent generated output from outrunning source evidence?
