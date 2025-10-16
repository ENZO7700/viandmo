#!/usr/bin/env bash
set -euo pipefail
# Premenuj pripadny velky nazov
if [ -f "app/(marketing)/Page.tsx" ]; then
  git mv "app/(marketing)/Page.tsx" "app/(marketing)/page.tsx"
fi
# Oprav href/push/replace – odstrani prefix route-group z URL
find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" \) -print0 \
| xargs -0 sed -i \
  -e 's|href="/(marketing)|href="/|g' \
  -e "s|href='/(marketing)|href='/|g" \
  -e 's|router\.push\("/(marketing)|router.push("/|g' \
  -e "s|router\.push\('/(marketing)|router.push('/|g" \
  -e 's|router\.replace\("/(marketing)|router.replace("/|g' \
  -e "s|router\.replace\('/(marketing)|router.replace('/|g"
