import Nav from "./Layout/Nav";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies"
import TV from "./Pages/TV"
import Movie from "./Pages/Movie"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Footer from "./Layout/Footer";
function App() {
  return (
    <>
      <Nav />
      {localStorage.getItem("token") ? <main className="p-10">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/:type/:id" element={<Movie />} />
          <Route path="/:type/:id" element={<Movie />} />
          <Route path="/" element={localStorage.getItem("token") ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main> : <main className="p-10">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>   
      </main>}
      <Footer />
    </>
  );
}

export default App;