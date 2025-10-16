#!/usr/bin/env bash
set -euo pipefail

if ! command -v firebase >/dev/null 2>&1; then
  echo "❌ Nainštaluj Firebase CLI: npm i -g firebase-tools" >&2
  exit 1
fi

PROJECT_ID="${1:-}"
if [ -z "${PROJECT_ID}" ]; then
  echo "Použitie: $0 <PROJECT_ID>"; exit 1
fi

# Prihlásenie a nastavenie projektu
firebase login --no-localhost || true
firebase use "${PROJECT_ID}"

# 1) Pridaj do manifestu (lokálne) + načítaj parametre zo súboru
firebase ext:install --local firebase/storage-resize-images \
  --params=extensions/img-resize.env --force

# 2) Voliteľné – odkomentuj a nainštaluj tiež:
# firebase ext:install --local firebase/firestore-bigquery-export --force
# (Export Firestore -> BigQuery; predtým si prepoj projekt s BigQuery a maj Blaze plán.) 
# Zdroj a info: extensions hub. 

# 3) (voliteľne) Stripe Payments:
# firebase ext:install --local stripe/firestore-stripe-payments --force

# 4) Nasadenie všetkých rozšírení z manifestu do projektu
firebase deploy --only extensions --project="${PROJECT_ID}"

echo "✅ Hotovo. Rozšírenia z manifestu nasadené do projektu ${PROJECT_ID}."
