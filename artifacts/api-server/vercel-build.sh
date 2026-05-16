#!/bin/bash
set -e

# Navigate to repo root (script runs from artifacts/api-server/)
cd ../..

echo "[1/4] Building jaiscape..."
pnpm --filter @workspace/jaiscape run build

echo "[2/4] Creating Build Output API structure..."
mkdir -p .vercel/output/static

echo "[3/4] Writing config.json..."
cat > .vercel/output/config.json << 'EOF'
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOF

echo "[4/4] Copying static files..."
cp -r artifacts/jaiscape/dist/. .vercel/output/static/

echo "Done. Output structure:"
ls .vercel/output/
echo "Static files count: $(ls .vercel/output/static/ | wc -l)"
