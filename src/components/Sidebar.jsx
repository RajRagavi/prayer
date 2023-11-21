import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
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
      <aside className="menu pl-2 has-shadow pt-5">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/prayerpoints"}>
              <IoPricetag /> Add Prayer Points
            </NavLink>
          </li>
        
          <li>
            <NavLink to={"/reports"}>
              <IoPricetag /> Reports
            </NavLink>
          </li>
         
          
        </ul>


        {user && user.role_name === "admin" &&  (
          <div>
            <p className="menu-label">Settings</p>
            <ul className="menu-list">
            
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
              <li>
            <NavLink to={"/languages"}>
              <IoPricetag /> Language
            </NavLink>
          </li>
        <li>
            <NavLink to={"/categorys"}>
              <IoPricetag /> Category
            </NavLink>
          </li>
        <li>
            <NavLink to={"/roles"}>
              <IoPricetag /> Role 
            </NavLink>
          </li>
          <li>
            <NavLink to={"/locations"}>
              <IoPricetag /> Location 
            </NavLink>
          </li>
          <li>
            <NavLink to={"/requestors"}>
              <IoPricetag /> Requestor 
            </NavLink>
          </li>
          <li>
            <NavLink to={"/prayerpoint_status"}>
              <IoPricetag /> Prayerpoint Status 
            </NavLink>
          </li>
         
            </ul>
          </div>
         )} 
        
       

        
        
      </aside>
    </div>
  );
};

export default Sidebar;
