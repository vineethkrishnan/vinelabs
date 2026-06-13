---
name: clearpr
tagline: Self-hosted GitHub App that strips formatting noise from PRs and reviews what is left
description: Parses code with the TypeScript compiler API and structural parsers for PHP, JSON, and YAML, then compares canonical AST forms so Prettier reruns, quote-style flips, import reorders, and whitespace changes disappear from the diff. Reviews the clean diff against your repo's own guidelines and surfaces prior PR feedback when the same mistake reappears.
language: TypeScript
license: MIT
status: beta
categories:
  - ai-agents
  - web-apps
highlights:
  - Semantic AST diff strips Prettier, quote flips, import reorders, trailing commas
  - Reviews against `claude.md` / `agent.md` / `.reviewconfig` in your repo, not generic rules
  - Indexes the last 200 merged PRs and learns which feedback was accepted vs dismissed
  - Self-hosted - your code never leaves infrastructure you control
  - Falls back to whitespace-only normalisation for languages without an AST adapter
order: 120
repo: https://github.com/vineethkrishnan/clearpr
docs: https://clearpr-docs.vinelab.in
---

ClearPR is what code review feels like when the formatter stops shouting.
