# How I direct the AI-assisted PriceBriefs build

PriceBriefs is built with heavy use of AI agents/models. My role is to define and direct the product/system, not to claim authorship of every line of code.

## What I own

- researching the pricing/competitive-intelligence problem and deciding what product direction to pursue;
- defining the high-level blueprint and required decision behavior;
- creating specialist personas/experts and assigning them responsibilities;
- setting constraints, acceptance criteria and quality gates;
- requiring evidence discipline, refusal states and repeated review;
- sending work back for revision when it does not meet the quality bar.

## What AI handles heavily

- implementation and code generation/revision;
- technical-option exploration;
- data/integration investigation;
- edge-case and test generation;
- technical review and documentation.

I do **not** claim that I independently selected or hand-authored every contract, hash mechanism, renderer, data structure or code path.

## Working loop

```text
research commercial problem
        ↓
define product + blueprint + quality bar
        ↓
assign specialist AI personas / agents
        ↓
AI-assisted implementation and iteration
        ↓
deterministic checks / evidence / quality gates
        ↓
accept, reject or send back for revision
```

The blueprint requires observations to pass identity/evidence constraints before they can support a commercial review decision. The low-level implementation used to satisfy that requirement may come from the AI-assisted implementation process unless I explicitly state otherwise.

## Interview boundary

I can explain the product problem, why the decision flow exists, the blueprint I required, how I structured the AI workflow, the quality gates I demanded and what the current evidence supports.

For a low-level technical choice, I will distinguish between **a requirement I set** and **a technical choice made inside the AI-assisted implementation process**.

For concrete implementation evidence, see [../PROOF.md](../PROOF.md).
