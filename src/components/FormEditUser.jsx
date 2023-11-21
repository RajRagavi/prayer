import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink,useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role_name, setRole_name] = useState("");
  const [user_status, setUser_status] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUsername(response.data.username);
        setFirst_name(response.data.first_name);
        setLast_name(response.data.last_name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setRole_name(response.data.role_name);
        setUser_status(response.data.user_status);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        username: username,
        first_name:first_name,
        last_name:last_name,
        email: email,
        phone:phone,
        password: password,
        confPassword: confPassword,
        role_name:role_name,
        user_status:user_status 
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="pt-4">
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Update User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={updateUser }>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
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
                    placeholder="Username"
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
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
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
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role_name}
                      onChange={(e) => setRole_name(e.target.value)}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Superadmin">Superuser</option>
                      <option value="User">User</option>
                      <option value="View Only">View Only</option>
                    </select>
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
                      <option value="">Active</option>
                      <option value="">Inactive</option>
                     
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

export default FormEditUser;
