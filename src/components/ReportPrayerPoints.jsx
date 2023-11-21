import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FormAddPrayerPoints = () => {
  
  const [requestors, setRequestors] = useState([]);

  useEffect(() => {
    getRequestors();
  }, []);

  const getRequestors = async () => {
    const response = await axios.get("http://localhost:5000/requestors");
    setRequestors(response.data);
  };

 

  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.auth);
 
  
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
 
  useEffect(() => {
    getUsers();
   
  }, []);
 

 

 


  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategorys();
  }, []);

  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/categorys");
    setCategorys(response.data);
  };


  const [prayerpoints, setPrayerpoints] = useState([]);
  const searchPoints = async (e) => {
    e.preventDefault();

    // Capture filter values from the form
    const usernameFilter = e.target.elements.username ? e.target.elements.username.value : '';
  const mobileFilter = e.target.elements.mobile ? e.target.elements.mobile.value : '';
  const languagesFilter = e.target.elements.languages ? e.target.elements.languages.value : '';
  const categoryFilter = e.target.elements.category ? e.target.elements.category.value : '';
  const requestorFilter = e.target.elements.requestors ? e.target.elements.requestors.value : '';
  const praiseFilter = e.target.elements.praise ? e.target.elements.praise.checked : false;
  const startDateFilter = e.target.elements.startDate ? e.target.elements.startDate.value : '';
  const endDateFilter = e.target.elements.endDate ? e.target.elements.endDate.value : '';
// Build the query parameters based on the filter values
    
    const queryParams = {
      username: usernameFilter,
      phone: mobileFilter,
      languages: languagesFilter,
      category: categoryFilter,
      requestors: requestorFilter,
      praise: praiseFilter,
      startDate: startDateFilter,
      endDate: endDateFilter,
    };

    // Remove empty filter values from the queryParams object
    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(([_, v]) => v !== "")
    );

    // Make the API request with the filtered parameters
    const response = await axios.get("http://localhost:5000/prayerpoints", {
      params: filteredParams,
    });

    // Set the filtered prayer points in the state
    setPrayerpoints(response.data);
    console.log(filteredParams)
  };
 


  return (
    <div className="pt-4">
      

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={searchPoints}>
             
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                <select name="username" className="input">
            <option>Select user</option>
            {users.map((user) => (
              
              <option>{user.username}</option>
             
             
              ))}
    
            </select>
               
                </div>
              </div>
              <div className="field">
                <label className="label">Mobile</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                   name="phone"
                    placeholder="Moblie"
                    
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Languages</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    name="languages"
                    placeholder="Languages"
                  />
                </div>
              </div>
              <div className="field">
              <div className="field">
                <label className="label">Prayer Category</label>
                <div className="control">
              
             
            <select name="category" className="input" >
            <option>Select Category</option>
            {categorys.map((category) => (
              
              <option>{category.cat}</option>
             
             
              ))}
    
            </select>
   
                </div>
              </div>
              </div>
              <div className="field">
                <label className="label">Whom to pray (person name)</label>
                <div className="control">
              
             
            <select name="requestors"
                    className="input"
                    >
            <option>Select Requestor</option>
            {requestors.map((requestor) => (
              
              <option>{requestor.req_first_name}</option>
             
             
              ))}
    
            </select>
   
                </div>
              </div>
             
              <div className="field has-addons pt-3">
                <label className="label pr-3">Praise</label>
                <div className="control ">
                  <input
                    type="checkbox"
                    className=""
                    
                    placeholder="Praise"
                  />
                  </div>
                   <div className="field has-addons">
                    <label className="label px-3">Start Date</label>
                    <div className="control">
                  <input
                    type="date"
                    className="input"
                   
                    placeholder="Start Date"
                  />
                  </div>
                  </div>
                  <label className="label px-3">End Date</label>
                  <div className="control ">
                  <input
                    type="date"
                    className="input "
                   
                    placeholder="End Date"
                  />

                </div>
              </div>
              

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Search
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPrayerPoints;
