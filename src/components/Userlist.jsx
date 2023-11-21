import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = (props) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();
   
  }, []);
 

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };

  return (
    <div className="pt-4">
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      {/* {props.user !==  "admin" ? */}
      <div> <Link to="/users/add" className="button is-primary mb-2">
        Add New
      </Link>
      </div>:<div>-</div>
                {/* } */}
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role_name}</td>
              <td>{user.phone}</td>
              <td>
                {/* {props.user ===  "admin" ?<div> */}
                  <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
                {/* </div>:<div>-</div>
                } */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
