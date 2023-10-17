import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Stats</a>
                <ul className="p-2">
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Skills</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Experience</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Coder Shubham</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Stats</summary>
                <ul className="p-2">
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Skills</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>Projects</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a>Experience</a>
                  </li>
                  <li>
                    <a>About me</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">SignIn</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar