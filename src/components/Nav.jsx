import { Link, useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Nav() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login"); 
        toast.error('Logged-out', { autoClose: 600 })
    }

    // -------------------------- Styles --------------------------
    const li_2_Style = "hover:bg-blue-400 rounded-md py-2 cursor-pointer hover:ps-2 transition-all duration-200";
    const linkStyle = ({ isActive }) => isActive ? "text-gray-700" : "text-white";
    // -------------------------- Styles --------------------------

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
                    <NavLink to="/home" className={linkStyle}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/movies" className={linkStyle}>Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tv" className={linkStyle}>TV</NavLink>
                  </li>
                </ul>
                <span className="cursor-pointer">
                  <span onClick={handleLogout}>Logout</span>
                </span>
              </>
            ) : (
              <ul className="flex gap-4">
                <li>
                  <NavLink className={linkStyle} to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink className={linkStyle} to="/register">Register</NavLink>
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
                  <li className={li_2_Style}>
                    <NavLink className={linkStyle} to="/home">Home</NavLink>
                  </li>
                  <li className={li_2_Style}>
                    <NavLink className={linkStyle} to="/movies">Movies</NavLink>
                  </li>
                  <li className={li_2_Style}>
                    <NavLink className={linkStyle} to="/tv">TV</NavLink>
                  </li>
                  <span className={li_2_Style}>
                    <span onClick={handleLogout}>Logout</span>
                  </span>
                </ul>
              </>
            ) : (
              <ul className="flex flex-col px-10 pb-4">
                <li className={li_2_Style}>
                  <NavLink className={linkStyle} to="/">Login</NavLink>
                </li>
                <li className={li_2_Style}>
                  <NavLink className={linkStyle} to="/register">Register</NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav >
    </>
  );
}
