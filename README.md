# 🚀 Task API

A simple REST API designed for managing tasks efficiently and reliably. It provides a clean and intuitive interface for creating, updating, retrieving, and deleting tasks.

---

## ⚙️ Tech Stack
🟢 Express.js · 🔷 TypeScript · 🗄️MariaDB · 🔑 JWT · 🐳 Docker  

---

## 🔐 Authentication

🔒 All endpoints (except `/login`) are JWT protected

### Login
POST `/api/v1/login`

```json
{ "token": "JWT" }
```

Header:
Authorization: Bearer <token>

---

## 🚀 Setup

```bash
cp .env.example .env
```

```bash
docker compose up --build -d
```

---

## 🌐 Base URL
`/api/v1`

---

## 📚 Endpoints

POST   /login  
GET    /tasks  
GET    /tasks/:id  
POST   /tasks  
PUT    /tasks/:id  
DELETE  /tasks/:id  

---

## 🧱 Task Model

```json
{
  "title": "string",
  "description": "string?",
  "status": "TODO | IN_PROGRESS | DONE",
  "priority": 1,
  "dueDate": "ISO date?"
}
```

---

## ⚠️ Errors

🚫 400 Validation error  
🔐 401 Unauthorized (JWT missing/invalid)  
❓ 404 Not found  
💥 500 Internal server error  

---

## 🧭 Flow

1. Login → get JWT  
2. Set token in headers  
3. Use API  