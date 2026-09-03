# System view

This is a deliberately public abstraction. It explains the decision flow without publishing the private collection/runtime architecture.

```text
┌──────────────────┐
│ Market observation│
└─────────┬────────┘
          ↓
┌────────────────────────┐
│ Product identity check │
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

## Boundary 1 — product identity

A comparison is only meaningful when the system has enough evidence that it is comparing the intended products.

## Boundary 2 — source quality

An observation should not become decision-grade merely because it is technically retrievable.

## Boundary 3 — availability and freshness

Unavailable, stale or otherwise weak observations should not silently drive a commercial gap.

## Boundary 4 — decision scope

The system produces a bounded review decision. It does not claim autonomous pricing authority.

## Boundary 5 — refusal

`INSUFFICIENT_EVIDENCE` is a useful result when the eligible evidence cannot support a stronger conclusion.

## Why this is public

A technical reviewer can inspect the information-quality model and ask how failures are handled without receiving the private collection logic, evidence contracts or operational workflow.
