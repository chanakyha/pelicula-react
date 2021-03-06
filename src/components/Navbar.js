import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut, auth, onAuthStateChanged } from "../firebase";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      }
    });
  });

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Pelicula
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  userData?.photoURL ||
                  "https://api.lorem.space/image/face?hash=33791"
                }
                alt="Profile Pic"
              />
            </div>
          </label>
          {userData ? (
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut(auth)}>Logout</a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
