# Cineverse - Admin Panel (Movie Management)

Cineverse is a **Node.js, Express, MongoDB, and EJS** based full-stack admin panel for managing movies. This panel allows administrators to perform **CRUD (Create, Read, Update, Delete)** operations on movies.

## 🌐 Live Demo
[Admin Panel](https://movie-project-ten-sepia.vercel.app/adminDash)

- To access the **Admin Panel**, navigate to `/adminDash` in the URL.

## ✨ Features

### 🛠️ Admin Side:
- **Create**: Add new movies with a **thumbnail & slider image**.
- **Read**: View all movies in the database.
- **Update**: Edit existing movie details.
- **Delete**: Remove movies along with their images.
- **Authentication**: Admin login & session management.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Templating Engine**: EJS
- **Middleware**: Multer (for file uploads), Cookie-parser (for authentication)
- **Hosting**: Vercel

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Shubhamparekh04/Movie-Project.git
cd Movie-Project
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/movies
```

### 4️⃣ Run the Project
```sh
npm start
```

The app will be live at `http://localhost:8089/adminDash`

## 📂 Folder Structure
```sh
Movie-Project/
│-- .vercel/
│-- configs/
│-- controllers/
│-- middleware/
│-- models/
│-- node_modules/
│-- public/
│-- routers/
│-- uploads/
│-- views/
│   ├── pages/
│   │   ├── partials/
│   │   ├── adminDash.ejs
│   │   ├── edit.ejs
│   │   ├── form.ejs
│   │   ├── table.ejs
│   │   ├── index.ejs
│-- .env
│-- .gitignore
│-- index.js
│-- package-lock.json
│-- package.json
│-- README.md
│-- vercel.json
```

## 🎯 Usage Guide
- **Access Admin Panel**: Open [`movie-project-ten-sepia.vercel.app/adminDash`](https://movie-project-ten-sepia.vercel.app/adminDash).
- **Manage Movies**: Add, update, or delete movies in the Admin Panel.

---


