# beNeoAi Docker Setup

This project uses Docker to run the backend and frontend locally.

## Project Structure

```bash
beNeoAi/
│
├── docker-compose.yml
│
├── backend/
│   ├── Dockerfile
│   ├── target/
│   │   └── beNeoAi-0.0.1-SNAPSHOT.jar
│   └── ...
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   └── ...


# Run with Docker

## 1. Build backend (using Maven wrapper)

cd backend
./mvnw clean package

cd ..
docker compose up --build

docker compose down

Open app
Frontend: http://localhost:3000
Backend: http://localhost:8080


