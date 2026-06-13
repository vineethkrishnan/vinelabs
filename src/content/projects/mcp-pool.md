---
name: mcp-pool
tagline: Curated Model Context Protocol servers for the SaaS tools teams actually use
description: Eleven MCP servers in one monorepo, each shipped as its own npm package - Stripe, Sentry, Notion, Linear, Datadog, Vercel, PagerDuty, HubSpot, Intercom, Shopify, and Google Workspace. Drop any of them into Claude Desktop or another MCP-compatible client and ask questions in natural language backed by live data, no dashboard switching.
language: TypeScript
license: MIT
status: stable
categories:
  - ai-agents
highlights:
  - 11 servers covering payments, monitoring, knowledge bases, support, and ops
  - Self-hosted support for Sentry, EU region for PagerDuty, multi-site Datadog
  - Each server is an isolated npm package - install only what you need
  - Works with Claude Desktop, Claude Code, and any MCP-compatible client
  - Per-package CI, security, and quality gates so a bug in one does not ship to all
order: 130
repo: https://github.com/vineethkrishnan/mcp-pool
docs: https://mcp-pool.vinelab.in
install: npx -y @vineethnkrishnan/stripe-mcp
---

MCP Pool is the bridge between AI chat and the SaaS tabs you keep meaning to close.
