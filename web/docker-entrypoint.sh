#!/bin/sh
set -e

if [ ! -d "/app/node_modules" ]; then
  echo "[Entrypoint] Installing bun dependencies..."
  bun install --frozen-lockfile
fi

bun run dev 