import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Rolelist = () => {

 

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async () => {
    const response = await axios.get("http://localhost:5000/roles");
    setRoles(response.data);
  };

  const deleteRole = async (roleId) => {
    await axios.delete(`http://localhost:5000/roles/${roleId}`);
    getRoles();
  };



  return (
    <div className="pt-5 mt-4"><br/>
      <h1 className="title">New Role</h1>
      <h2 className="subtitle">List of Role</h2>
      <Link to="/roles/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div >
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            
            <th>Role Name</th>
            <th>Rolelist</th>
            <th>Update </th>
            <th>View </th>
            <th>Delete </th>
          
         </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.uuid}>
              <td>{index + 1}</td>
            
              <td>{role.role_name}</td>
              <td>{role.addition}</td>
              <td>{role.update}</td>
              <td>{role.view}</td>
              <td>{role.roledelete}</td>
             
          
      <td>
      <Link
                  to={`/roles/edit/${role.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRole(role.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>   
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      </div>
     
    </div>
  );
};

export default Rolelist;
