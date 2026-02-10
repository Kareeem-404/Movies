import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TV from "../pages/TV";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import Register from "../pages/Register";

// ------------------ AUTH GUARDS ------------------

function requireAuth() {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/login");
}

function redirectIfLoggedIn() {
  const token = localStorage.getItem("token");
  if (token) return redirect("/home");
}

// ------------------ AUTH GUARDS ------------------

// ------------------ ROUTER ------------------

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, loader: requireAuth, element: <Home /> },
      {
        path: "home",
        loader: requireAuth,
        element: <Home />,
      },
      {
        path: "movies",
        loader: requireAuth,
        element: <Movies />,
      },
      {
        path: "tv",
        loader: requireAuth,
        element: <TV />,
      },
      {
        path: ":type/:id",
        loader: requireAuth,
        element: <Movie />,
      },

      {
        path: "login",
        loader: redirectIfLoggedIn,
        element: <Login />,
      },
      {
        path: "register",
        loader: redirectIfLoggedIn,
        element: <Register />,
      },
    ],
  },
]);
