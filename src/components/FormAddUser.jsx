import React,{ useState,useEffect } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await axios.get("http://localhost:5000/locations");
    setLocations(response.data);
  };


  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles= async () => {
    const response = await axios.get("http://localhost:5000/roles");
    setRoles(response.data);
  };


  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_code, setPhone_code] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role_name, setRole_name] = useState("");
  const [user_status, setUser_status] = useState("");
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        username: username,
        first_name:first_name,
        last_name:last_name,
        email: email,
        phone_code:phone_code,
        phone:phone,
        password: password,
        confPassword: confPassword,
        role_name:role_name,
        user_status:user_status 
      
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div >
      <h1 className="title pt-5">Users</h1>
      <h2 className="subtitle">Add New User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
             
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                
                   <input
                    type="text"
                    className="input"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Mobile</label>
                <div className="row">
                  <div className="col-1">
                 <select name="" id="" required className="input" value={phone_code} onChange={(e) => setPhone_code(e.target.value)}>
                 
                 <option></option>
                 {locations.map((location) => (
                   
                   <option>{location.country_code}</option>
                  
                  
                   ))}
         
                 </select>
                </div>
                <div className="col-11">
                <input
                    type="number"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=""
                    
                  />
                </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                  <select key={role_name.uuid} required value={role_name}  className="input" onChange={(e)=>setRole_name(e.target.value)}>
            <option>Select Role</option>
            {roles.map((Role) => (
              
              <option>{Role.role_name}</option>
             
             
              ))}
    
            </select>
                    {/* <select
                      value={role_name}
                      onChange={(e) => setRole_name(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="superadmin">Superuser</option>
                      <option value="user">User</option>
                      <option value="viewer">View Only</option>
                    </select> */}
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">User Status</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select 
                      value={user_status}
                      onChange={(e) => setUser_status(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                     
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                  <NavLink to={"/users"} className="button is-success ml-5">
               Cancel
            </NavLink>
                </div>
              </div>
           
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
