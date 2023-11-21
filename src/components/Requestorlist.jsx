import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Requestorlist = () => {

 

  const [requestors, setRequestors] = useState([]);

  useEffect(() => {
    getRequestors();
  }, []);

  const getRequestors = async () => {
    const response = await axios.get("http://localhost:5000/requestors");
    setRequestors(response.data);
  };

  const deleteRequestor = async (requestorId) => {
    await axios.delete(`http://localhost:5000/requestors/${requestorId}`);
    getRequestors();
  };




  return (
    <div className="pt-5 mt-4"><br/>
      <h1 className="title">New Requestors</h1>
      <h2 className="subtitle">List of Requestors</h2>
      <Link to="/requestors/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div >
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            
            <th>Requestors Code</th>
            <th>Requestors First Name</th>
            <th>Requestors Last Name</th>
            <th>Requestors Email</th>
            <th>Requestors Phone</th>
            <th>Requestors Organization</th>
            <th>Requestors Country</th>
            <th>Requestors Continent</th>
          
         </tr>
        </thead>
        <tbody>
          {requestors.map((requestor, index) => (
            <tr key={requestor.uuid}>
              <td>{index + 1}</td>
            
              <td>{requestor.req_code}</td>
              <td>{requestor.req_first_name}</td>
              <td>{requestor.req_last_name}</td>
              <td>{requestor.req_email}</td>
              <td>{requestor.req_phone}</td>
              <td>{requestor.req_org}</td>
              <td>{requestor.req_country}</td>
              <td>{requestor.req_continent}</td>
             
          
      <td>
      <Link
                  to={`/requestors/edit/${requestor.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRequestor(requestor.uuid)}
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

export default Requestorlist;
