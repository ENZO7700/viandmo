#!/usr/bin/env bash
set -euo pipefail

# Inštalácia OpenAI SDK (Node)
if [ -f "package.json" ]; then
  if command -v pnpm >/dev/null 2>&1; then
    pnpm add openai
  elif command -v yarn >/dev/null 2>&1; then
    yarn add openai
  else
    npm i openai
  fi
fi

# Git commit & push
git add -A
git commit -m "feat: add OpenAI env template and API endpoints (Vercel/Next)"
git push -u origin main

echo "✅ OpenAI pripravené. Nezabudni pridať OPENAI_API_KEY (a prípadne OPENAI_MODEL) vo Vercel → Project → Settings → Environment Variables."
