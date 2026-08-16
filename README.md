# 🎬 Movies & TV Shows App

A modern, responsive **Movies & TV Shows discovery application** built with **React 19** and **Vite**. Browse the latest trending movies and TV shows, view detailed information, and manage your account — all in a clean, Tailwind-styled interface.

> 🔗 **Live Demo:** [https://movies-xi-amber.vercel.app/](https://movies-xi-amber.vercel.app/)

---

## ✨ Features

- 🔐 **Authentication System**
  - User registration with full validation (name, email, password, age, phone)
  - Login with secure password handling
  - Protected routes — you must be logged in to browse content
  - Token stored in `localStorage` for session persistence

- 🎥 **Trending Movies**
  - Fetches daily trending movies from the TMDB API
  - Displays posters, titles, and ratings in a responsive grid

- 📺 **Trending TV Shows**
  - Fetches daily trending TV series from the TMDB API
  - Same responsive card grid with ratings and hover overlays

- 📄 **Detail Pages**
  - Click any movie/TV card to view full details
  - Shows title, tagline, genres, rating, vote count, release date, and overview

- 🎨 **Responsive & Accessible UI**
  - Mobile-friendly navigation with hamburger menu
  - Dark-mode-ready design (Tailwind)
  - Toast notifications for feedback

- 🧭 **Routing**
  - Client-side routing with React Router v7
  - Auth guards for protected and public routes

---

## 🛠️ Tech Stack

| Category        | Technology                              |
| --------------- | --------------------------------------- |
| **Framework**   | React 19                                 |
| **Build Tool**  | Vite 7                                   |
| **Language**    | JavaScript (JSX)                         |
| **Styling**     | Tailwind CSS v4                          |
| **Routing**     | React Router DOM v7                      |
| **HTTP Client** | Axios                                    |
| **Forms**       | React Hook Form + Yup validation         |
| **Notifications** | React Toastify                        |
| **Deployment**  | Vercel                                   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **pnpm** (recommended) or **npm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/Movies-main.git
cd Movies-main

# 2. Install dependencies (using pnpm)
pnpm install

# 3. Start the development server
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Available Scripts

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `pnpm dev`       | Start the development server        |
| `pnpm build`     | Build the app for production        |
| `pnpm preview`   | Preview the production build        |
| `pnpm lint`      | Run ESLint across the codebase      |

---

## 📁 Project Structure

```
Movies-main/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/               # Static images
│   ├── components/
│   │   ├── Footer.jsx        # Footer bar
│   │   ├── Nav.jsx           # Responsive navbar with auth links
│   │   └── Ui-components/
│   │       ├── Card.jsx      # Movie/TV show card
│   │       ├── Form.jsx      # Reusable auth form wrapper
│   │       └── Title.jsx     # Page title banner
│   ├── Hooks/
│   │   ├── useFetch.js       # Generic TMDB data fetching hook
│   │   ├── useLogin.js       # Login logic + validation
│   │   └── useRegister.js    # Registration logic + validation
│   ├── layout/
│   │   └── Mainlayout.jsx    # App shell (Nav + Outlet + Footer)
│   ├── Pages/
│   │   ├── Home.jsx          # Homepage (Movies + TV)
│   │   ├── Movies.jsx        # Trending movies page
│   │   ├── TV.jsx            # Trending TV page
│   │   ├── Movie.jsx         # Detail page
│   │   ├── Login.jsx         # Login page
│   │   └── Register.jsx      # Registration page
│   ├── router/
│   │   └── Router.jsx        # Route config + auth guards
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🔌 API Usage

This app consumes **two external APIs**:

### 1. TMDB API (Content)

Used to fetch trending movies and TV shows and their details:

```
https://api.themoviedb.org/3/trending/movie/day?api_key=<TMDB_KEY>
https://api.themoviedb.org/3/trending/tv/day?api_key=<TMDB_KEY>
https://api.themoviedb.org/3/{type}/{id}?api_key=<TMDB_KEY>
```

Images are served from:

```
https://image.tmdb.org/t/p/w500/<poster_path>
```

> ⚠️ **Note:** The TMDB API key is currently hardcoded in the source files
> (`src/Pages/Movies.jsx`, `src/Pages/TV.jsx`, `src/Pages/Movie.jsx`, `src/Hooks/useFetch.js`).
> For production, move it to an environment variable (e.g. `VITE_TMDB_API_KEY`).

### 2. Auth API (Users)

| Action | Endpoint                                                        |
| ------ | --------------------------------------------------------------- |
| Login  | `POST https://note-sigma-black.vercel.app/api/v1/users/signIn`   |
| Register | `POST https://note-sigma-black.vercel.app/api/v1/users/signUp` |

The returned token is stored in `localStorage` under the key `token` and is used by
the route guards to protect private pages.

---

## 🧭 Routes

| Path              | Visibility | Description                          |
| ----------------- | ---------- | ------------------------------------ |
| `/`               | Private    | Redirects to Home when authenticated |
| `/home`           | Private    | Homepage (Movies + TV trending)      |
| `/movies`         | Private    | Trending movies                      |
| `/tv`             | Private    | Trending TV shows                    |
| `/:type/:id`      | Private    | Movie/TV detail page                 |
| `/login`          | Public     | Login page                           |
| `/register`       | Public     | Registration page                    |

---

## ☁️ Deployment

The app is deployed on **Vercel** using the `vercel.json` config included in the repo.

```bash
# Build the project
pnpm build

# Deploy with Vercel CLI
vercel --prod
```

Live URL: [https://movies-xi-amber.vercel.app/](https://movies-xi-amber.vercel.app/)

---

## 📝 License

This project is for **educational/demo purposes**. All movie and TV data belongs to
[The Movie Database (TMDB)](https://www.themoviedb.org/) and is used under their API terms.

