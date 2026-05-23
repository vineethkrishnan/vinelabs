---
name: dfree
tagline: Interactive disk cleanup CLI for macOS and Linux
description: Cross-platform shell tool that breaks down disk usage by category (System, Docker, Logs, Cache, dev caches) and walks you through reclaiming space one confirmation at a time. No automatic deletion, no destructive defaults. Customise targets with a `~/.dfreerc` Bash hook.
language: Shell
license: MIT
status: stable
categories:
  - cli-tools
highlights:
  - Interactive by design - nothing is deleted without your confirmation
  - Docker-aware pruning with a clear before/after diff
  - Knows about npm, yarn, pip, cargo, and other dev caches
  - Simulation mode (--simulate) for dry runs and CI smoke tests
  - Hexagonal architecture so the cleanup core stays testable
order: 50
repo: https://github.com/vineethkrishnan/dfree
---

dfree is `du -sh` after it learned to clean up.
