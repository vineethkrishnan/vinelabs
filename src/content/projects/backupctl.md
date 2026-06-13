---
name: backupctl
tagline: Multi-project backup orchestration with restic, restored without surprises
description: Standalone Docker service that runs scheduled backups for many projects from one YAML file. Handles PostgreSQL, MySQL, and MongoDB dumps plus arbitrary file trees, encrypts and deduplicates via restic, and routes notifications to Slack, email, or webhooks. Every run is tracked in PostgreSQL with stage-by-stage progress and orphan-aware crash recovery.
language: TypeScript
license: MIT
status: stable
categories:
  - web-apps
  - cli-tools
highlights:
  - One YAML manages dozens of projects, each with its own schedule and scope
  - Restic + Hetzner Storage Box for encrypted, deduplicated remote backups
  - Optional GPG dump encryption before upload for extra paranoia
  - Audit trail in PostgreSQL, with Slack / Email / Webhook notifications and Uptime Kuma heartbeats
  - Crash recovery, orphan detection, retry with exponential backoff, 15-command CLI
order: 40
repo: https://github.com/vineethkrishnan/backupctl
install: docker pull vineethnkrishnan/backupctl:latest
---

backupctl is the backup operator you would write yourself if backups were your full-time job.
