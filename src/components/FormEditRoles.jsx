import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams,NavLink } from "react-router-dom";

import "./Translate.css";

const FormEditRoles = () => {
  const [role_name, setRole_name] = useState('');
  const [addition, setAddition] = useState('');
  const [update, setUpdate] = useState('');
  const [view, setView] = useState('');
  const [roledelete, setDelete] = useState('');

  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    const getRoleById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/roles/${id}`
        );
        setRole_name(response.data.role_name);
        setAddition(response.data.addition);
        setUpdate(response.data.update);
        setView(response.data.view);
        setDelete(response.data.roledelete);
    

      } catch (error) {
        if (error.response) {
          // setMsg(error.response.data.msg);
        }
      }
    };
    getRoleById();
  }, [id]);


  const updateRole = async (e) => {
    e.preventDefault();
    
    try {
      await axios.patch(`http://localhost:5000/roles/${id}`, {
        role_name: role_name,
            addition:addition,
            update:update,
            view:view,
            roledelete:roledelete,
      });
      navigate("/roles");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };





 



  return (
    <div>
     
      <h2 className="subtitle">Edit Role</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={updateRole}>
      
      <div className="field">
        <label className="label">Role</label>
        <div className="control">
          <input
            type="text"
            className="input"
            value={role_name}
            onChange={(event) => setRole_name(event.target.value)}
            placeholder="Role"
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Addition</label>
        <div className="control">
        <select aria-label="Default select example" value={addition}  className="input" onChange={(e)=>setAddition(e.target.value)} required>
    <option selected="" disabled="" value="">Select</option>
   <option value="Yes">Yes</option>
    <option value="No">No</option>
    
</select>
        </div>
      </div>
      <div className="field">
        <label className="label">Update</label>
        <div className="control">
        <select aria-label="Default select example" value={update}  className="input" onChange={(e)=>setUpdate(e.target.value)} required>
    <option selected="" disabled="" value="">Select</option>
   <option value="Yes">Yes</option>
    <option value="No">No</option>
    
</select>
        </div>
      </div>
      <div className="field">
        <label className="label">View</label>
        <div className="control">
        <select aria-label="Default select example" value={view}  className="input" onChange={(e)=>setView(e.target.value)} required>
    <option selected="" disabled="" value="">Select</option>
   <option value="Yes">Yes</option>
    <option value="No">No</option>
    
</select>
        </div>
      </div>
      <div className="field">
        <label className="label">Delete</label>
        <div className="control">
        <select aria-label="Default select example" value={roledelete}  className="input" onChange={(e)=>setDelete(e.target.value)} required>
    <option selected="" disabled="" value="">Select</option>
   <option value="Yes">Yes</option>
    <option value="No">No</option>
    
</select>
        </div>
      </div>
      
     
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-success">
            Update
          </button>
          <NavLink to={"/roles"} className="button is-success ml-5">
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

export default FormEditRoles;
