---
name: docling-server
tagline: Production-ready Docling deployment for self-hosted document processing
description: Docker Compose stack around IBM Research's Docling - FastAPI for the synchronous endpoints, Celery + Redis for batch and long-running conversions, Nginx with Let's Encrypt at the edge. Convert PDF, DOCX, PPTX, XLSX, HTML, and images to Markdown, JSON, or plain text with table extraction, OCR, and vector embeddings for RAG. One `make init` to deploy.
language: Python
license: MIT
status: beta
categories:
  - web-apps
  - ai-agents
highlights:
  - One-command production deploy with `make init`, SSL via Let's Encrypt
  - Async batch pipeline through Celery for large or parallel conversion jobs
  - Table extraction and OCR baked in, embeddings ready for RAG pipelines
  - Flower dashboard plus Prometheus metrics for live operational visibility
  - Token-authenticated API, sensible secrets handling out of the box
order: 110
repo: https://github.com/vineethkrishnan/docling-server
---

docling-server is what self-hosting Docling looks like once you stop fighting Docker.
