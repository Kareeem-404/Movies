import { Link, useNavigate } from "react-router";
import Login from "../Pages/Login";

export default function Nav() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");        
    }

    return (
    <>
      <nav className="bg-blue-300 sticky top-0 left-0 right-0 z-50">
        <div className=" items-center max-w-7xl flex justify-between gap-5 mx-auto py-4 px-6 text-white">
          <Link className="text-2xl">
            Final
          </Link>
          <div className={`md:flex justify-between hidden ${localStorage.getItem("token") && "w-full"}`}>
            {localStorage.getItem("token") ? (
              <>
                <ul className="flex gap-4 items-center">
                  <li>
                    <Link to="/home" className={`${location.pathname == "/home" ? "text-gray-700" : "text-white"}`}>Home</Link>
                  </li>
                  <li>
                    <Link to="/movies" className={`${location.pathname == "/movies" ? "text-gray-700" : "text-white"}`}>Movies</Link>
                  </li>
                  <li>
                    <Link to="/tv" className={`${location.pathname == "/tv" ? "text-gray-700" : "text-white"}`}>TV</Link>
                  </li>
                </ul>
                <span className="cursor-pointer">
                  <span onClick={handleLogout}>Logout</span>
                </span>
              </>
            ) : (
              <ul className="flex gap-4">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
          <label htmlFor="nav-toggle" className="md:hidden">
            <i className="bi bi-list text-3xl cursor-pointer"></i>
          </label>
          <input type="checkbox" id="nav-toggle" className="hidden peer" />
          <div className="md:hidden max-h-0 peer-checked:max-h-[300px] overflow-hidden transition-all duration-300 fixed right-0 left-0 top-16 bg-blue-300">
            {localStorage.getItem("token") ? (
              <>
                <ul className="flex flex-col px-10 pb-4">
                  <li className="hover:bg-blue-900 py-2 cursor-pointer hover:ps-2 transition-all duration-200">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="hover:bg-blue-900 py-2 cursor-pointer hover:ps-2 transition-all duration-200">
                    <Link to="/movies">Movies</Link>
                  </li>
                  <li className="hover:bg-blue-900 py-2 cursor-pointer hover:ps-2 transition-all duration-200">
                    <Link to="/tv">TV</Link>
                  </li>
                  <span className="hover:bg-blue-900 py-2 cursor-pointer hover:ps-2 transition-all duration-200">
                    <span onClick={handleLogout}>Logout</span>
                  </span>
                </ul>
              </>
            ) : (
              <ul className="flex flex-col px-10 pb-4">
                <li className="hover:bg-blue-900 py-2 cursor-pointer hover:ps-2 transition-all duration-200">
                  <Link to="/">Login</Link>
                </li>
                <li className="hover:bg-blue-900 py-2 cursor-pointer hover:ps-2 transition-all duration-200">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav >
    </>
  );
}
