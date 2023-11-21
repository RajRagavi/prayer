import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams,NavLink } from "react-router-dom";

import "./Translate.css";

const FormEditRequestors = () => {
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
  const { id } = useParams();

  
  useEffect(() => {
    const getCategoryById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/requestors/${id}`
        );
        setReq_code(response.data.req_code);
        setReq_first_name(response.data.req_first_name);
        setReq_last_name(response.data.req_last_name);
        setReq_email(response.data.req_email);
        setReq_phone(response.data.req_phone);
        setReq_org(response.data.req_org);
        setReq_country(response.data.req_country);
        setReq_continent(response.data.req_continent);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getCategoryById();
  }, [id]);


  const updateRequestor = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/requestors/${id}`, {
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



  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await axios.get("http://localhost:5000/locations");
    setLocations(response.data);
  };





  return (
    <div >
      <h1 className="title pt-5">Categorys</h1>
      <h2 className="subtitle">Add New Category</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={updateRequestor}>
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
                />
                <label className="label">Requestors First Name</label>
                <input
                  type="text"
                  className="input"
                  value={req_first_name}
                  onChange={(event) => setReq_first_name(event.target.value)}
                  placeholder="Requestors First Name"
                />
                <label className="label">Requestors Last name</label>
                <input
                  type="text"
                  className="input"
                  value={req_last_name}
                  onChange={(event) => setReq_last_name(event.target.value)}
                  placeholder="Requestors Last name"
                />
                <label className="label">Requestors Email</label>
                <input
                  type="text"
                  className="input"
                  value={req_email}
                  onChange={(event) => setReq_email(event.target.value)}
                  placeholder="Requestors Email"
                />
                <label className="label">Requestors Phone</label>
                <input
                  type="text"
                  className="input"
                  value={req_phone}
                  onChange={(event) => setReq_phone(event.target.value)}
                  placeholder="Requestors Phone"
                />
                <label className="label">Requestors Organization Name</label>
                <input
                  type="text"
                  className="input"
                  value={req_org}
                  onChange={(event) => setReq_org(event.target.value)}
                  placeholder="Requestors Organization Name"
                />
               
               <div className="field">
                <label className="label">Requestors Country</label>
                <div className="control">
              
             
            <select className="input"   value={req_country} onChange={(event) => setReq_country(event.target.value)}
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
                  value={req_continent}
                  onChange={(event) => setReq_continent(event.target.value)}
                  >
           
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
                    Update
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

export default FormEditRequestors;
