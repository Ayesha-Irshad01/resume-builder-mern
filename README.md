📄 Resume Builder Web App

A full-stack Resume Builder application that allows users to sign up, log in, choose resume templates, build resumes with live preview, and save them securely.

🚀 Features

🔐 User Authentication (JWT-based login & signup)

🧩 Multiple Resume Templates (Classic, Modern, Creative)

✍️ Resume Builder Form with Live Preview

💾 Save Resume to Database

🧠 Template-based Rendering

🔒 Protected Routes

📱 Responsive UI (Tailwind CSS)

🛠 Tech Stack

Frontend:
Next.js (App Router), React, Tailwind CSS

Backend:
Next.js API Routes, MongoDB, Mongoose, JWT Authentication

🧭 Application Flow

User signs up / logs in

Redirected to Template Selection page

Selects a resume template

Builds resume with live preview

Resume saved to database with selected template

📁 Project Structure
src/
 ├─ app/
 │   ├─ login/
 │   ├─ signup/
 │   ├─ dashboard/
 │   ├─ templates/
 │   └─ api/
 ├─ components/
 │   └─ templates/
 │       ├─ ClassicTemplate.jsx
 │       ├─ ModernTemplate.jsx
 │       └─ CreativeTemplate.jsx
 ├─ lib/
 │   └─ db.js
 └─ models/
     ├─ User.js
     └─ Resume.js
🔮 Future Improvements

Resume animation previews

Download resume as PDF

Saved resumes dashboard

Drag-and-drop sections

More professional templates

👩‍💻 Author

Ayesha Irshad – MERN Stack Developer
