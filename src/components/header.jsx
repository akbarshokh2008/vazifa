import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BiLogoRedux } from "react-icons/bi";
function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}
import { useGlobalContext } from "../hooks/useGlobalContext";

import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
function header() {
  const { total } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="bg-base-200 mb-10">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link to="/">
            <BiLogoRedux className="w-100" />
          </Link>
        </div>
        <nav className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </nav>

        <div className="navbar-end flex gap-10 items-center">
          <div className="indicator">
            <span className="indicator-item badge badge-md badge-secondary">
              {total}
            </span>
            <Link to="/korzinka">
              <FaCartShopping className="w-7 h-7" />
            </Link>
          </div>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme == "dracula"}
              readOnly
            />

            {/* sun icon */}
            <IoSunnySharp className="swap-on fill-current w-10 h-10" />
            {/* moon icon */}
            <IoMoonSharp className="swap-off fill-current w-10 h-10" />
          </label>
          <div>
            <button onClick={logout} className="btn btn-primary">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
