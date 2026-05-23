---
name: tor-shield
tagline: Kernel-level Tor exit node firewall for Linux production servers
description: Blocks inbound traffic from known Tor exit nodes at the packet-filter level using `ipset` + `iptables` / `ip6tables`. Pulls from the official Tor Project bulk list, the Onionoo API, and dan.me.uk for broader coverage. Covers IPv4, IPv6, host processes, and Docker containers, with automatic rollback when anything fails mid-run.
language: Shell
license: MIT
status: stable
categories:
  - cli-tools
highlights:
  - IPv4 + IPv6 + Docker, all matched at the kernel firewall layer
  - Pulls from three independent Tor IP sources and merges append-only
  - Refuses to apply if fewer than 100 IPv4 / 20 IPv6 addresses validate
  - Atomic apply with automatic rollback from timestamped backup on failure
  - flock-guarded so two cron jobs cannot race each other
order: 100
repo: https://github.com/vineethkrishnan/tor-shield
---

TorShield is the abuse filter you wish was in iptables by default.
