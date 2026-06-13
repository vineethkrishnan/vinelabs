---
name: diskdoc
tagline: Rust TUI that finds what is eating your disk and guides you through cleanup
description: Parallel directory walker with a responsive terminal UI. Explicitly recognises Docker artifacts, package caches (npm, cargo, etc.), log files, and build outputs like `target/` and `node_modules/`. Never auto-deletes - selection plus confirmation is always required.
language: Rust
license: MIT
status: stable
categories:
  - cli-tools
highlights:
  - Parallel filesystem walking scans gigabytes in seconds
  - Detects Docker, package caches, logs, and build artifacts on sight
  - Vim-style navigation plus arrow keys and space-to-select
  - Hexagonal architecture isolates filesystem, Docker, and TUI adapters
  - Cross-platform (macOS, Linux)
order: 60
repo: https://github.com/vineethkrishnan/diskdoc
install: cargo install --git https://github.com/vineethkrishnan/diskdoc
---

diskdoc is the disk doctor you call before `rm -rf` becomes tempting.
