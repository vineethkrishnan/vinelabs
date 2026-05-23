---
name: dockit
tagline: Audit-first Docker disk analysis and cleanup
description: Replaces blind `docker system prune -a` with a transparent, risk-aware workflow. Classifies every image, container, volume, and build cache entry into SAFE, REVIEW, or PROTECTED so you can reclaim space without nuking critical infrastructure. Full JSON output for CI pipelines and dashboards.
language: Go
license: MIT
status: beta
categories:
  - cli-tools
highlights:
  - SAFE / REVIEW / PROTECTED scoring on every resource before deletion
  - Detects runaway container logs silently filling the disk
  - Dry-run by default - apply changes only with the --apply switch
  - JSON output (--json) for CI pipelines and monitoring tools
  - Never deletes running containers or attached volumes
order: 70
repo: https://github.com/vineethkrishnan/dockit
---

dockit is `docker system prune` with the safety catches Docker forgot to ship.
