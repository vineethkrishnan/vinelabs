---
name: vaultctl
tagline: Self-hosted, zero-knowledge password vault
description: Single Go binary serves the API and embedded React SPA. Browser extension and CLI talk to the same server. Argon2id + AES-256-GCM happen in the browser, the extension, or the CLI - the server has no decrypt path.
language: Go
license: AGPL-3.0
status: beta
categories:
  - web-apps
  - cli-tools
  - browser-extensions
highlights:
  - Zero-knowledge by construction - server cannot decrypt
  - One ~45MB distroless image, embedded SPA, embedded migrations
  - Multi-user, RBAC, RSA-OAEP wrap with Ed25519 signature pinning
  - Signed releases, CycloneDX SBOM, SLSA L3 provenance
order: 10
repo: https://github.com/vinelabs-de/vaultctl
install: go install github.com/vinelabs-de/vaultctl/cmd/server@latest
---

vaultctl is the password manager for teams that want to read every line they trust with their secrets.
