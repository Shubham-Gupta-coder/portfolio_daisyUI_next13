import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50'>
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
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'#'}>Stats</Link>
                <ul className="p-2">
                  <li>
                    <Link href={'#services'}>Services</Link>
                  </li>
                  <li>
                    <Link href={'#skills'}>Skills</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={'#about'}>About</Link>
              </li>
              <li>
                <Link href={'/projects'}>Projects</Link>
              </li>
              <li>
                <Link href={'#contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">Coder Shubham</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Stats</summary>
                <ul className="p-2">
                  <li>
                    <Link href={'#services'}>Services</Link>
                  </li>
                  <li>
                    <Link href={'#skills'}>Skills</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link href={'/projects'}>Projects</Link>
            </li>
            <li>
              <Link href={'#about'}>About</Link>
            </li>
            <li>
              <Link href={'#contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/'} className="btn">SignIn</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar