import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary-content rounded-2xl p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to={"/drugSearch"}
                className="hover:text-primary-content font-semibold"
              >
                DRUG SEARCH
              </Link>
            </li>
            <li tabIndex={0}>
              <ul className="p-2">
                <li>
                  <Link
                    to={"/drugSearch"}
                    className="hover:text-primary-content font-semibold"
                  >
                    DRUG SEARCH
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/drugScan"}
                    className="hover:text-primary-content font-semibold"
                  >
                    DRUG SCAN
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to={"/drugScan"}
                className="hover:text-primary-content font-semibold"
              >
                DRUG SCAN
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/about"}
          className="btn btn-ghost normal-case text-2xl font-bold text-primary"
        >
          Mediscan
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={"/drugScan"}
              className="hover:text-white text-primary font-bold"
            >
              DRUG SCAN
            </Link>
          </li>

          <li>
            <Link
              to={"/drugSearch"}
              className="hover:text-white text-primary font-bold"
            >
              DRUG SEARCH
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/"}
          className="btn btn-secondary font-bold text-md btn-outline "
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
