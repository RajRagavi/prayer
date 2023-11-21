import React, { useState } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";

const FormAddLocation = () => {
 
  const [country, setCountry] = useState('');
  const [country_code, setCountry_code] = useState('');
  const [continent, setContinent] = useState('');
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/locations", {
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
    <div >
      <h1 className="title pt-5">Locations</h1>
      <h2 className="subtitle">Add New Locations</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              
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
                    Save
                  </button>
                  <NavLink to={"/categorys"} className="button is-success ml-5">
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

export default FormAddLocation;
