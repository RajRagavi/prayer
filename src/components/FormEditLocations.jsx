import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams,NavLink } from "react-router-dom";

import "./Translate.css";

const FormEditLocations = () => {
  const [country, setCountry] = useState('');
  const [country_code, setCountry_code] = useState('');
  const [continent, setContinent] = useState('');



  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    const getLocationById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/locations/${id}`
        );
        setCountry(response.data.country);
        setCountry_code(response.data.country_code);
        setContinent(response.data.continent);

      } catch (error) {
        if (error.response) {
          // setMsg(error.response.data.msg);
        }
      }
    };
    getLocationById();
  }, [id]);

  const tamilRef = useRef();
  const updateLocation = async (e) => {
    e.preventDefault();
  
    try {
      await axios.patch(`http://localhost:5000/locations/${id}`, {
        country: country,
        country_code:country_code,
        continent:continent
      });
      navigate("/locations");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };







  return (
    <div>
     
      <h2 className="subtitle">Edit Location</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
          <form onSubmit={updateLocation}>
              
              <div className="field">
              <div className="control">
                
                <label className="label">Locations</label>
                <input
                  type="text"
                  className="input"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  placeholder="Country"
                  required
                />
                <label className="label">Country Code</label>
                <input
                  type="text"
                  className="input"
                  value={country_code}
                  onChange={(event) => setCountry_code(event.target.value)}
                  placeholder="country_code"
                  required
                />
                <label className="label">Continent</label>
                <input
                  type="text"
                  className="input"
                  value={continent}
                  onChange={(event) => setContinent(event.target.value)}
                  placeholder="Continent"
                  required
                />
              </div>
            </div>
         
           
         
            
            <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                  <NavLink to={"/locations"} className="button is-success ml-5">
               Cancel
            </NavLink>
                </div>
              </div>
              {/* <p className="has-text-centered">{msg}</p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditLocations;
