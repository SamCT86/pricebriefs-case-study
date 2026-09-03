# AI in the PriceBriefs workflow

AI is useful for moving quickly across implementation and review. It is not allowed to become the source of truth for a pricing decision.

## Where it helps

- exploring implementation approaches;
- drafting and revising code candidates;
- investigating data/integration behavior;
- generating edge cases and tests;
- reviewing assumptions and documentation.

## What stays explicit

The system still needs a human-owned definition of:

- product identity;
- source qualification;
- freshness and availability;
- which observations may influence a comparison;
- which decision states exist;
- when the correct output is `INSUFFICIENT_EVIDENCE`.

## Working loop

```text
commercial question
      ↓
identity + source constraints
      ↓
AI-assisted implementation
      ↓
deterministic validation
      ↓
bounded decision
      ↓
evidence review / refusal
```

The point is not to remove judgment. The point is to make AI useful **inside** a system whose evidence boundary remains inspectable.

For concrete implementation evidence, see [../PROOF.md](../PROOF.md).
