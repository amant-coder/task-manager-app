Task Manager – Full-Stack MERN App

A complete authentication-based Task Manager application built using:

Frontend: Next.js 13 (App Router), TailwindCSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Auth: JWT-based authentication

File Uploads: Cloudinary + Multer

Deployment: Frontend on Netlify & Backend on Render

🚀 Features
🔐 Authentication

User registration

User login

Protected routes using JWT

Auto-login using stored tokens

📝 Task Management

Create new tasks

View all tasks

Delete tasks

Every task includes:

Title

Description

Optional image/file upload

☁️ Cloudinary File Uploads

Upload task attachments

Files stored securely in the cloud

Url returned to the database

🎨 UI / UX

Responsive UI

ClickSpark effects

Custom animated cursor

Toast notifications

Project Structure
fullstack-task-manager/
│
├── backend/                             # Express API
│   ├── config/
│   │   ├── db.js                        # MongoDB connection
│   │   ├── cloudinary.js                # Cloudinary setup
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── profile.controller.js
│   │   ├── task.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.js                      # JWT verification
│   │   ├── errorHandler.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Task.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── profile.routes.js
│   │   ├── tasks.routes.js
│   │   ├── upload.routes.js
│   │
│   ├── .env.example                     # Example env (NO secrets)
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── frontend/                            # Next.js 14 App
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── register/
│   │   │   └── page.js
│   │   └── dashboard/
│   │       └── page.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── ClickSpark.jsx
│   │   ├── SplashCursor.jsx
│   │   └── ui/                           # Shadcn UI
│   │
│   ├── context/
│   │   └── AuthContext.js
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── .env.local.example
│   ├── next.config.mjs
│   ├── netlify.toml                      # Netlify deploy config
│   ├── package.json
│   
│
├── .gitignore
├── LICENSE
└── README.md                            # Main README





Full-Stack Task Manager App
Next.js 14 + Node.js/Express + MongoDB + JWT + Cloudinary

A fully functional modern task manager application with authentication, file upload, protected dashboards, and a clean UI using ShadCN + Tailwind.

🌟 Features
Frontend (Next.js 14)

✔️ App Router (app/)
✔️ Login / Register pages
✔️ Protected dashboard
✔️ Task CRUD
✔️ Cloudinary file upload
✔️ Toast notifications
✔️ Modern UI using Tailwind + ShadCN
✔️ Cool animations (ClickSpark + SplashCursor)

Backend (Node.js / Express)

✔️ REST API
✔️ MongoDB + Mongoose
✔️ JWT Authentication
✔️ Task CRUD endpoints
✔️ Cloudinary attachment upload
✔️ Error handling & validation


| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | Next.js 14, React, Tailwind, ShadCN |
| Backend    | Express, Mongoose, Cloudinary       |
| Auth       | JWT                                 |
| Database   | MongoDB Atlas                       |                  |


Made with ❤️ by Aman R. Thakur