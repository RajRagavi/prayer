import React, { useState } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";

const FormAddStatus = () => {
 
  const [pp_status_code, setPp_status_code] = useState('');
  const [pp_status, setPp_status] = useState('');
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/prayerpoint_status", {
        pp_status_code:pp_status_code,
        pp_status:pp_status
      });
      navigate("/prayerpoint_status");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div >
      <h1 className="title pt-5">Prayer Point Status</h1>
      <h2 className="subtitle">Add New Prayer Point Status</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveStatus}>
              {/* <p className="has-text-centered">{msg}</p> */}
              <div className="field">
              <div className="control">
                
                <label className="label">Prayer Point Status Code</label>
                <input
                  type="text"
                  className="input"
                  value={pp_status_code}
                  onChange={(event) => setPp_status_code(event.target.value)}
                  placeholder="Prayer Point Status Code"
                  required
                />
                
                <label className="label">Prayer Point Status</label>
                <input
                  type="text"
                  className="input"
                  value={pp_status}
                  onChange={(event) => setPp_status(event.target.value)}
                  placeholder="Prayer Point Status"
                  required
                />
              </div>
            </div>
         
           
         
            
            <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                  <NavLink to={"/prayerpoint_status"} className="button is-success ml-5">
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

export default FormAddStatus;
