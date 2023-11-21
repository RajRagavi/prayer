import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ReportList = () => {
  const [requestors, setRequestors] = useState([]);
  const [users, setUsers] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [prayerpoints, setPrayerpoints] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [filter, setFilter] = useState({
    username: "",
    phone: "",
    category: "",
    requestors: "",
    praise: false,
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    getRequestors();
    getUsers();
    getCategorys();
    getPrayerpoints();
  }, []);

  const getRequestors = async () => {
    const response = await axios.get("http://localhost:5000/requestors");
    setRequestors(response.data);
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/categorys");
    setCategorys(response.data);
  };

  const getPrayerpoints = async () => {
    const response = await axios.get("http://localhost:5000/prayerpoints");
    setPrayerpoints(response.data);
  };

  const handleFilterChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  
    // Make the API request with the filtered parameters
    const response = await axios.get("http://localhost:5000/prayerpoints", {
      params: filter,
    });
    setPrayerpoints(response.data);
  };

  return (
    <div className="pt-4">
      <h1 className="title">Reports</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={handleFilterSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <select name="username" className="input" value={filter.username} onChange={handleFilterChange}>
                    <option>Select user</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.username}>
                        {user.username}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Add other filter inputs here */}
              <div className="field">
                <label className="label">Mobile</label>
                <div className="control">
                  <input
                    type="text"
                    name="phone"
                    className="input"
                    placeholder="Mobile"
                    value={filter.phone}
                    onChange={handleFilterChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Languages</label>
                <div className="control">
                  <input
                    type="text"
                    name="languages"
                    className="input"
                    placeholder="Languages"
                    value={filter.languages}
                    onChange={handleFilterChange}
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
              {/* Add other filter inputs similarly */}

              {/* Filter Button */}
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-info">
                    Filter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Edit</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Prayer Category</th>
            <th>Whom Pray (person name)</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {prayerpoints.map((prayerpoint, index) => {
            // Apply filter criteria
            const filterMatch =
              (filter.username === "" || prayerpoint.username === filter.username) &&
              (filter.phone === "" || prayerpoint.phone === filter.phone) &&
              (filter.languages === "" || prayerpoint.languages === filter.languages) &&
              (filter.category === "" || prayerpoint.category === filter.category) &&
              (filter.requestors === "" || prayerpoint.requestors === filter.requestors) &&
              (!filter.praise || prayerpoint.praise) &&
              (filter.startDate === "" || prayerpoint.startDate === filter.startDate) &&
              (filter.endDate === "" || prayerpoint.endDate === filter.endDate);

            // Display the row only if it matches the filter criteria
            if (filterMatch) {
              return (
                <tr key={prayerpoint.uuid}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/prayerpoints/edit/${prayerpoint.uuid}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>{prayerpoint.username}</td>
                  <td>{prayerpoint.phone}</td>
                  <td>{prayerpoint.category}</td>
                  <td>{prayerpoint.gpn_pp_toprayfor}</td>
                  <td>{prayerpoint.english}</td>
                </tr>
              );
            } else {
              return null; // Row does not match filter criteria, don't display it
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReportList;
