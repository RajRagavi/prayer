import React, { useState,useEffect } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";

const FormAddRequestors = () => {


  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await axios.get("http://localhost:5000/locations");
    setLocations(response.data);
  };

 
  const [req_code, setReq_code] = useState('');
  const [req_first_name, setReq_first_name] = useState('');
  const [req_last_name, setReq_last_name] = useState('');
  const [req_email, setReq_email] = useState('');
  const [req_phone, setReq_phone] = useState('');
  const [req_org, setReq_org] = useState('');
  const [req_country, setReq_country] = useState('');
  const [req_continent, setReq_continent] = useState('');
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/requestors", {
       
      req_code:req_code,
      req_first_name:req_first_name,
      req_last_name:req_last_name,
      req_email:req_email,
      req_phone:req_phone,
      req_org:req_org,
      req_country:req_country,
      req_continent:req_continent
      });
      navigate("/requestors");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div >
      <h1 className="title pt-5">Requestors</h1>
      <h2 className="subtitle">Add New Requestors</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
              <div className="control">
                
                <label className="label">Requestors Code</label>
                <input
                  type="text"
                  className="input"
                  value={req_code}
                  onChange={(event) => setReq_code(event.target.value)}
                  placeholder="Requestors Code"
                  required
                />
                <label className="label">Requestors First Name</label>
                <input
                  type="text"
                  className="input"
                  value={req_first_name}
                  onChange={(event) => setReq_first_name(event.target.value)}
                  placeholder="Requestors First Name"
                  required
                />
                <label className="label">Requestors Last name</label>
                <input
                  type="text"
                  className="input"
                  value={req_last_name}
                  onChange={(event) => setReq_last_name(event.target.value)}
                  placeholder="Requestors Last name"
                  required
                />
                <label className="label">Requestors Email</label>
                <input
                  type="email"
                  className="input"
                  value={req_email}
                  onChange={(event) => setReq_email(event.target.value)}
                  placeholder="Requestors Email"
                  required
                />
                <label className="label">Requestors Phone</label>
                <input
                  type="number"
                  className="input"
                  value={req_phone}
                  onChange={(event) => setReq_phone(event.target.value)}
                  placeholder="Requestors Phone"
                  required
                />
                <label className="label">Requestors Organization Name</label>
                <input
                  type="text"
                  className="input"
                  value={req_org}
                  onChange={(event) => setReq_org(event.target.value)}
                  placeholder="Requestors Organization Name"
                  required
                />
               
               <div className="field">
                <label className="label">Requestors Country</label>
                <div className="control">
              
             
            <select className="input"  required value={req_country} onChange={(event) => setReq_country(event.target.value)}
                  >
            <option>Requestors Country</option>
            {locations.map((location) => (
              
              <option>{location.country}</option>
             
             
              ))}
    
            </select>
   
                </div>
              </div>
              <div className="field">
                <label className="label">Requestors Continent</label>
                <div className="control">
              
             
            <select className="input"
                  value={req_continent} required
                  onChange={(event) => setReq_continent(event.target.value)}
                  >
            <option>Requestor</option>
            {locations.map((location) => (
              
              <option>{location.continent}</option>
             
             
              ))}
    
            </select>
   
                </div>
              </div>
                 
              </div>
            </div>
         <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                  <NavLink to={"/requestors"} className="button is-success ml-5">
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

export default FormAddRequestors;
