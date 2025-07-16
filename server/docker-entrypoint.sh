#!/bin/sh
set -e

if [ ! -d "/var/www/html/vendor" ]; then
  echo "[Entrypoint] Installing composer dependencies..."
  composer install --no-interaction --prefer-dist
fi

# Wait for database to be ready
echo "[Entrypoint] Waiting for database connection..."
until php artisan db:show --database=mysql 2>/dev/null; do
  echo "[Entrypoint] Database not ready yet, waiting..."
  sleep 2
done
echo "[Entrypoint] Database connection established!"

# Run database migrations
echo "[Entrypoint] Running database migrations..."
php artisan migrate --force

echo "[Entrypoint] Starting Laravel server..."
php artisan serve --host=0.0.0.0 --port=8000
