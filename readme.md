Fullstack Task Manager – README.md

A full-stack MERN + Next.js application that allows users to register, log in, create tasks, upload attachments, and manage their task list in a secure dashboard.

for better experince open the website in chrome(incognito Mode)

🚀 Tech Stack
Frontend

Next.js 14 / App Router

React Context API for auth state

Tailwind CSS

Fetch API for server communication

Backend

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Multer + Cloudinary for file uploads

🔐 Features
Auth

Register / Login

JWT-based authentication

Protected dashboard route

Tasks

Create tasks

Read all tasks

Delete tasks

Task validation

Task search (title filter)

File Uploads

Upload attachments (image/pdf/etc.)

Cloudinary integration

Attachment stored as a URL in MongoDB


Run App
Start backend
cd backend
npm run dev

Start frontend
cd frontend
npm run dev


Backend → http://localhost:5000

Frontend → http://localhost:3000

📁 Project Structure
Backend
backend/
 ├── controllers/
 ├── models/
 ├── middleware/
 ├── routes/
 ├── config/
 ├── server.js
 └── .env

Frontend
frontend/
 ├── app/
 ├── components/
 ├── context/
 ├── lib/
 ├── public/
 └── package.json

 🎯 Future Improvements

Task categories & labels

User profile settings

Multi-file uploads

Drag-and-drop task ordering

❤️ Author

Built by Aman R. Thakur as a full-stack internship assignment.