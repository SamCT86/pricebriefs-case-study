# System requirements and trade-offs

These are requirements and trade-offs represented by the current PriceBriefs system. They explain the product/system boundary without claiming that I personally originated every low-level engineering choice used to implement it.

My direct ownership is the product direction, high-level blueprint, expert/persona orchestration, constraints, acceptance criteria and quality gates. The implementation process is heavily AI-assisted.

## 1. Product identity before price comparison

A lower price is not useful evidence if the system matched the wrong product.

**Trade-off:** stricter identity checks reduce coverage, but improve the quality of the decisions that remain.

## 2. Separate observation from commercial decision

Collection tells the system what was observed. It should not automatically decide what action deserves to follow.

**Trade-off:** more explicit layers, less accidental authority.

## 3. Fail closed on weak evidence

Stale, unavailable, cross-product or unsupported observations should stop or weaken the decision path rather than be repaired into a clean-looking recommendation.

**Trade-off:** fewer outputs, stronger trust in the outputs that survive.

## 4. Preserve review as a valid product boundary

The system supports a bounded commercial review rather than pretending every price difference deserves automatic action.

**Trade-off:** less automation theater, more defensible operational use.

## 5. Bind generated output to evidence

A generated brief should be traceable to the evidence used to derive it rather than being hand-authored after the fact.

**Trade-off:** additional provenance work, better reproducibility.

## Questions this case study is intended to create

- What decision problem is the product trying to improve?
- Why should product identity be established before price comparison?
- Why allow the system to refuse a recommendation?
- What should count as enough evidence for a commercial review?
- Which parts of the blueprint were requirements I set, and which low-level choices came from the AI-assisted implementation process?
