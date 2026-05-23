---
name: agent-sessions
tagline: Browse, search, and resume sessions across every CLI coding agent
description: Interactive TUI that lists past sessions from Claude Code, Gemini CLI, OpenAI Codex, Cursor Agent, and Windsurf in one view. Sort by recency, filter with fuzzy search, peek into a conversation before resuming, delete the noise. Fills the gap left by `--resume <session-id>` flags that have no way to discover what to resume.
language: TypeScript
license: MIT
status: stable
categories:
  - cli-tools
highlights:
  - One TUI for Claude Code, Gemini CLI, Codex, Cursor, and Windsurf
  - Session preview with `p` so you can read before you resume
  - Fuzzy search across date, project, branch, message count, first message
  - Optional fzf integration for power users
  - macOS, Linux, Windows
order: 30
repo: https://github.com/vineethkrishnan/agent-sessions
docs: https://agent-sessions.vinelabs.de
install: npm install -g @vineethnkrishnan/agent-sessions
---

agent-sessions is what `--resume` should have shipped with.
