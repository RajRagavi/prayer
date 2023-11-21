import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams,NavLink } from "react-router-dom";
import "./Translate.css";


const FormAddStatus = () => {
 
  const [pp_status_code, setPp_status_code] = useState('');
  const [pp_status, setPp_status] = useState('');
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    const getStatusById =async() => {
      try{
        const response =await axios.get(`http://localhost:5000/prayerpoint_status/${id}`);
        setPp_status_code(response.data.pp_status_code);
        setPp_status(response.data.pp_status);
      }catch(error) {
        if(error.response){

        }
      }
    };
    getStatusById();
  }, [id]);

  const updateStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("http://localhost:5000/prayerpoint_status", {
        pp_status_code:pp_status_code,
        pp_status:pp_status,
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
      <h1 className="title pt-5">Categorys</h1>
      <h2 className="subtitle">Add New Category</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateStatus}>
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
