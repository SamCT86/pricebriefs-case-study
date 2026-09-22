# System view

This is a deliberately public abstraction. It explains the decision flow without publishing the private collection/runtime architecture.

```text
┌──────────────────┐
│ Market observation│
└─────────┬────────┘
          ↓
┌────────────────────────┐
│ Evidence identity      │
│ + product/currency     │
│ + source qualification │
└───────────┬────────────┘
            ↓
┌────────────────────────┐
│ Commercial interpretation│
└───────────┬────────────┘
            ↓
┌────────────────────────┐
│ Bounded review decision│
└───────────┬────────────┘
            ↓
┌────────────────────────┐
│ Evidence attached      │
└────────────────────────┘
```

## Boundary 1 — evidence and comparison identity

A comparison is only meaningful when the system has traceable evidence IDs and enough identity to show it is comparing the intended product in the same currency. Duplicate evidence IDs and cross-currency raw prices are not decision-grade inputs.

## Boundary 2 — source quality

An observation should not become decision-grade merely because it is technically retrievable. The public slice requires an explicit boolean source-qualification state; it does not authenticate the source itself.

## Boundary 3 — availability and freshness

Unavailable, stale or otherwise weak observations should not silently drive a commercial gap.

## Boundary 4 — decision scope

The system produces a bounded review decision. It does not claim autonomous pricing authority.

## Boundary 5 — refusal

`INSUFFICIENT_EVIDENCE` is a useful result when the eligible evidence cannot support a stronger conclusion.

## Why this is public

A technical reviewer can inspect the information-quality model and ask how failures are handled without receiving the private collection logic, evidence contracts or operational workflow.
