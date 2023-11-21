import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Locationlist = () => {

 

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await axios.get("http://localhost:5000/locations");
    setLocations(response.data);
  };

  const deleteLocation = async (locationId) => {
    await axios.delete(`http://localhost:5000/locations/${locationId}`);
    getLocations();
  };




  return (
    <div className="pt-5 mt-4"><br/>
      <h1 className="title">New Locations</h1>
      <h2 className="subtitle">List of Locations</h2>
      <Link to="/locations/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div >
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Country</th>
            <th>Country Code</th>
            <th>Continent</th>
          
         </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={location.uuid}>
              <td>{index + 1}</td>
             
              <td>{location.country}</td>
              <td>{location.country_code}</td>
              <td>{location.continent}</td>
             
          
      <td>
      <Link
                  to={`/locations/edit/${location.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteLocation(location.uuid)}
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

export default Locationlist;
