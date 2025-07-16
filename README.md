<p align="center">
  <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel" height="48" style="margin-right: 12px;"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg" alt="Next.js" height="48" style="margin-right: 12px;"/>
  <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" height="48" style="margin-right: 12px;"/>
  <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" height="48"/>
</p>

# Summer Class Web Development

A modern full-stack web development environment using **Laravel (PHP)**, **Next.js (React)**, **MySQL**, and **phpMyAdmin**—all orchestrated with Docker Compose for seamless local development.

---

## 🏗️ Architecture

- **Backend:** Laravel (PHP 8.2, artisan dev server)
- **Frontend:** Next.js (Bun runtime, hot reload)
- **Database:** MySQL 8.0
- **DB Admin:** phpMyAdmin
- **Orchestration:** Docker Compose

```
[Next.js] <-> [Laravel] <-> [MySQL]
     |             |         |
     |             |         |
     +------[Docker Compose]--+
```

---

## 🚦 Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Quick Start

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd summer-class-web-development
   ```
2. **Start all services:**
   ```sh
   docker compose up --build
   ```
3. **Access your apps:**
   - Next.js: [http://localhost:3000](http://localhost:3000)
   - Laravel: [http://localhost:8000](http://localhost:8000)
   - phpMyAdmin: [http://localhost:8080](http://localhost:8080) (login with `root`/`rootpassword`)

---

## 🛠️ Common Development Commands

- **Stop all services:**
  ```sh
  docker compose down
  ```
- **Reset environment (remove containers & volumes):**
  ```sh
  docker compose down -v
  ```
- **Run Laravel Artisan command:**
  ```sh
  docker compose exec laravel php artisan <command>
  ```
- **Run Bun/Next.js command:**
  ```sh
  docker compose exec web bun <command>
  ```

---

## 💡 Development Notes

- **Live Code Editing:**
  - Source code is bind-mounted; changes on your host are reflected instantly in the containers.
  - Next.js hot reload works out-of-the-box (with `CHOKIDAR_USEPOLLING=true` for Docker/Linux).
- **Dependencies:**
  - `vendor` (Laravel) and `node_modules` (Next.js) are managed in Docker named volumes for speed and consistency.
  - Dependencies auto-install if missing when containers start.
- **Database Migrations:**
  - Laravel runs `php artisan migrate --force` automatically on container start.
- **Database Wait:**
  - Laravel waits for MySQL to be ready before running migrations.

---

## 🧰 Troubleshooting

- **Dependencies not installed?**
  - Try resetting volumes:
    ```sh
    docker compose down -v
    docker compose up --build
    ```
- **Hot reload not working?**
  - Ensure you are editing files inside the bind-mounted folders.
  - For Next.js, `CHOKIDAR_USEPOLLING=true` is set for reliable file watching.
- **Permission issues?**
  - Run install commands inside the container as shown above.
- **Database connection issues?**
  - The Laravel container waits for MySQL, but if you see errors, try restarting all services.

---

## 🤝 Contributing

1. Fork the repo and create your feature branch.
2. Commit your changes and push to your fork.
3. Open a pull request.

---

## 📄 License

This project is for educational purposes. See [LICENSE](LICENSE) if present.
