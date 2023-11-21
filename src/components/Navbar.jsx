import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import {  IoHome} from "react-icons/io5";




const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="" className=" pl-4">
            <img src={logo} width="50" height="50" alt="logo" />
          </NavLink>
         

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              {user && user.role === "admin" && (
          <div>
            <h1 className=" p-5"><b>{user && user.name} </b>- [Admin]</h1>
          
          </div>
        )}
             
          <NavLink to={"/dashboard"} className="p-2">
              <IoHome /> Home
            </NavLink>
                <button onClick={logout} className="button is-light">
                  Log out
                </button>

              </div>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
  );
};

export default Navbar;
