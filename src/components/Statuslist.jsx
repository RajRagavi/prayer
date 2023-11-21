import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Statuslist = () => {

 

  const [prayerpoint_status, setPrayerpoint_status] = useState([]);

  useEffect(() => {
    getPrayerpoint_status();
  }, []);

  const getPrayerpoint_status = async () => {
    const response = await axios.get("http://localhost:5000/prayerpoint_status");
    setPrayerpoint_status(response.data);
  };

  const deletePrayerpoint_status = async (statusId) => {
    await axios.delete(`http://localhost:5000/prayerpoint_status/${statusId}`);
    getPrayerpoint_status();
  };



  return (
    <div className="pt-5 mt-4"><br/>
      <h1 className="title">New Status</h1>
      <h2 className="subtitle">List of Status</h2>
      <Link to="/prayerpoint_status/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div >
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            
            <th>Status Code</th>
            <th>Status</th>
            <th>Action</th>
          
         </tr>
        </thead>
        <tbody>
          {prayerpoint_status.map((status, index) => (
            <tr key={prayerpoint_status.uuid}>
              <td>{index + 1}</td>
            
              <td>{status.pp_status_code}</td>
              <td>{status.pp_status}</td>
             
          
      <td>
      <Link
                  to={`/prayerpoint_status/edit/${prayerpoint_status.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePrayerpoint_status(prayerpoint_status.uuid)}
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

export default Statuslist;
