import Nav from "./Layout/Nav";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies"
import TV from "./Pages/TV"
import Movie from "./Pages/Movie"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Footer from "./Layout/Footer";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <>
      <Nav />
      <main className="p-10">
        <Routes>
          <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/movies" element={<ProtectedRoute> <Movies /> </ProtectedRoute>} />
          <Route path="/tv" element={<ProtectedRoute> <TV /> </ProtectedRoute>} />
          <Route path="/:type/:id" element={<ProtectedRoute> <Movie /> </ProtectedRoute>} />
          <Route path="/:type/:id" element={<ProtectedRoute> <Movie /> </ProtectedRoute>} />
          <Route path="/" element={localStorage.getItem("token") ? <ProtectedRoute> <Home /> </ProtectedRoute> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;