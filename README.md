<div align="center">

# 🎬 Movie App

### A modern, full-stack movie discovery platform built with React & Appwrite

<br/>

[🌐 Live Demo](https://react-movie-app-sable-ten.vercel.app) 

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Appwrite Setup](#-appwrite-setup)
- [Deployment](#-deployment)


---

## 🎯 About The Project

Movie App is a full-stack web application that allows users to discover, search, and explore movies using data from **The Movie Database (TMDB) API**. It features a smart trending system powered by **Appwrite** — movies that are searched more frequently automatically appear in the trending section, giving users a real-time popularity feed.

This project demonstrates modern React development practices including component-based architecture, API integration, real-time database interactions, and production deployment.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Real-time Search** | Instantly search from thousands of movies via TMDB API |
| 📈 **Smart Trending** | Trending section updates based on actual user search frequency |
| 🎥 **Movie Discovery** | Browse popular and top-rated movies on the homepage |
| 🖼️ **Movie Details** | View poster, rating, release year, and overview |
| 📱 **Responsive Design** | Fully optimized for mobile, tablet, and desktop |
| ⚡ **Blazing Fast** | Built with Vite for near-instant load times |
| ☁️ **Cloud Database** | Search metrics tracked and stored in Appwrite cloud |

---

## 🛠️ Tech Stack

### Frontend
- **[React 18](https://reactjs.org/)** — Component-based UI library
- **[Vite](https://vitejs.dev/)** — Next-generation frontend build tool
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework

### Backend & Database
- **[Appwrite](https://appwrite.io/)** — Open-source backend as a service (BaaS)
  - Database for storing search metrics
  - Real-time trending algorithm based on search count

### External API
- **[TMDB API](https://www.themoviedb.org/documentation/api)** — Movie data, posters, ratings, and metadata

### Deployment
- **[Vercel](https://vercel.com/)** — Frontend hosting and CI/CD

---

## 📁 Project Structure

```
movie-app/
├── public/
│   └── assets/              # Static assets (icons, images)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── MovieCard.jsx    # Individual movie card
│   │   ├── Search.jsx       # Search input component
│   │   └── Spinner.jsx      # Loading spinner
│   ├── App.jsx              # Root component & main logic
│   ├── appwrite.js          # Appwrite client & database functions
│   └── main.jsx             # App entry point
├── .env                     # Environment variables (not committed)
├── .env.example             # Environment variable template
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9 or higher
- **Git** — [Download](https://git-scm.com/)
- An **Appwrite** account — [Sign up free](https://cloud.appwrite.io/)
- A **TMDB** API key — [Get one free](https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see section below)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser 🎉

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
# TMDB API
VITE_TMDB_API_KEY=your_tmdb_api_key_here

# Appwrite
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=metrics
```

> ⚠️ **Never commit your `.env` file to GitHub.** It is already listed in `.gitignore`.

---

## 🔧 Appwrite Setup

Follow these steps to configure your Appwrite backend:

1. **Create a new project** at [cloud.appwrite.io](https://cloud.appwrite.io)
   - Project Name: `Movie_App`

2. **Create a Database**
   - Database Name: `Movie_DB`
   - Copy the **Database ID** to your `.env`

3. **Create a Collection** named `metrics` with these columns:

   | Column Name | Type | Required |
   |---|---|---|
   | `searchTerm` | String | Yes |
   | `count` | Integer | No |
   | `poster_url` | String | No |

4. **Set Collection Permissions**
   - Go to `metrics` → **Settings** → **Permissions**
   - Add `Any` with `read` and `write` access (for development)

5. **Add your Platform**
   - Go to Project **Settings** → **Platforms** → **Add Platform**
   - Choose **Web** and enter your domain (e.g., `https://your-app.vercel.app`)

---

## 🌐 Deployment

This app is configured for seamless deployment on **Vercel**:

1. Push your code to GitHub
   ```bash
   git add .
   git commit -m "initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your repo

3. Add all environment variables in Vercel dashboard under **Settings → Environment Variables**

4. Click **Deploy** — Vercel auto-detects Vite and handles the build ✅

5. Copy your Vercel URL and add it to Appwrite Platforms (step 5 above)

---




<div align="center">

⭐ Star this repo if you found it helpful!

</div>
