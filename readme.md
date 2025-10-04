# Microservices Architecture (MERN + RabbitMQ)

This repository contains a **Node.js-based microservices architecture** using the **MERN stack**, **RabbitMQ** for messaging, and **Docker/Kubernetes** for deployment.  
It is designed to support scalable, event-driven applications where services can be deployed independently.

---

## 🚀 Features

- **API Gateway** for request routing (REST/GraphQL support)
- **Auth Microservice** with JWT-based authentication
- **Event-driven architecture** using RabbitMQ (publish/subscribe model)
- **Contracts-first approach** (API & Event schemas for consistency)
- **Shared libraries** (logging, configuration, middleware)
- **Infrastructure ready** (Docker, Kubernetes, Helm, Monitoring)
- **CI/CD pipelines** for automated builds and deployments

---

## 📂 Folder Structure

microservices-architecture/
│
├── api-gateway/ # API Gateway Service
│ ├── src/
│ │ ├── index.js # Entry point
│ │ ├── app.js # Express app setup
│ │ ├── routes.js # Gateway routes
│ │ └── proxy.js # Optional proxy for routing to services
│
├── auth-service/ # Auth microservice
│ ├── src/
│ │ ├── routes/
│ │ │ └── authRoutes.js
│ │ ├── controllers/
│ │ │ └── authController.js
│ │ ├── models/
│ │ │ └── User.js
│ │ ├── events/ # RabbitMQ consumers & publishers
│ │ │ └── userEvents.js
│ │ └── middlewares/
│ │ └── authMiddleware.js
│
├── contracts/ # API and Event schemas
│ ├── events/ # RabbitMQ event definitions (JSON)
│ │ └── userCreated.json
│ └── rest/ # REST API request/response schemas
│ └── auth.json
│
├── libs/ # Shared internal npm packages
│ ├── logger/ # Logging utility
│ ├── config/ # Shared config (DB, JWT, RabbitMQ)
│ └── auth-middleware/ # Shared JWT/auth middleware
│
├── infra/ # Infrastructure configs
│ ├── k8s/ # Kubernetes manifests
│ ├── helm-charts/ # Optional Helm charts
│ ├── monitoring/ # Prometheus/Grafana/Jaeger configs
│ └── rabbitmq/ # RabbitMQ queues, exchanges, bindings
│
├── docker-compose.dev.yml # Local development setup (MongoDB + RabbitMQ + API Gateway + services)
└── ci-cd/ # CI/CD pipelines

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Messaging:** RabbitMQ
- **Auth:** JWT-based authentication
- **API Gateway:** Express + Proxy
- **Containerization:** Docker, Kubernetes, Helm
- **Monitoring:** Prometheus, Grafana, Jaeger
- **CI/CD:** GitHub Actions / Jenkins (config in `ci-cd/`)

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-repo/microservices-architecture.git
cd microservices-architecture

cd api-gateway && npm install
cd ../auth-service && npm install


docker-compose -f docker-compose.dev.yml up --build

This will start:

API Gateway

Auth Service

MongoDB

RabbitMQ

4️⃣ Access services

API Gateway → http://localhost:3000

RabbitMQ Management UI → http://localhost:15672 (user: guest, pass: guest)
```
