import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";



const Welcome = () => {


  const [username, setusername] = useState([]);
  const [phone, setPhone] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [category, setCategory] = useState([]);
  const [requestors, setRequestors] = useState([]);
  const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [prayerpoints, setPrayerpoints] = useState([]);


useEffect(() => {
  getPrayerpoints();
}, []);

// const getPrayerpoints = async () => {
//   const response = await axios.get("http://localhost:5000/prayerpoints");
//   setPrayerpoints(response.data);
// };


  useEffect(() => {
    getRequestors();
  }, []);

  const getRequestors = async () => {
    const response = await axios.get("http://localhost:5000/requestors");
    setRequestors(response.data);
  };



  const [users, setUsers] = useState([]);



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

  const getPrayerpoints = async () => {
    // Build the filter object based on the state values
    const filters = {
      username,
      phone,
      languages,
      category,
      requestors,
      startDate,
      endDate,
    };
  
    // Remove any empty properties from the filters object
    const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, v]) => v != null && v !== ''));
  
    // Make the API request with the filtered parameters
    const response = await axios.get("http://localhost:5000/prayerpoints", {
      params: filteredParams,
    });
  
    setPrayerpoints(response.data);
  };

  const searchPoints = async (e) => {
    e.preventDefault();
    getPrayerpoints();
  };
  const { user } = useSelector((state) => state.auth);



  //copypage//
  const pageRef = useRef(null);

  const handleCopy = () => {
    const pageNode = pageRef.current;
    if (pageNode) {
      const pageText = pageNode.innerText;
      navigator.clipboard.writeText(pageText);
    }
  };

  //copypage//

  //checkbox enble diable//
  const checkboxenable = () => {
    const checkBox = document.getElementById("myCheckcheck");
    const checkBoxShown = document.getElementById("checkBoxShown");
    if (checkBox.checked === true) {
      checkBoxShown.style.display = "none";
    } else {
      checkBoxShown.style.display = "inline";
    }
  };
  //checkbox enble diable//

  const conponentPDF = useRef();
 



  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Prayer Points",
    onAfterPrint: () => alert("Data save in PDF")
  });

  console.log(user)
  return (

    <div className="p-5">
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome <strong>
          {user && user.username}!</strong>
      </h2>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={searchPoints}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <select className="input" value={username}  onChange={(e) => setusername(e.target.value)}>
                    <option>Select user</option>
                    {users.map((user) => (
                      <option key={user.id}>{user.username}</option>
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
                    placeholder="Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Languages</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Languages"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Prayer Category</label>
                <div className="control">
                  <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Select Category</option>
                    {categorys.map((category) => (
                      <option key={category.cat_id}>{category.cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Whom to pray (person name)</label>
                <div className="control">
                  <select className="input" onChange={(e) => setRequestors(e.target.value)}>
                    <option>Select Requestor</option>
                    {requestors.map((requestors) => (
                      <option key={requestors.id}>{requestors.req_first_name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field has-addons pt-3">
                <div className="field has-addons">
                  <label className="label px-3">Start Date</label>
                  <div className="control">
                    <input
                type="date"
                className="input"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
                  </div>
                </div>
                <label className="label px-3">End Date</label>
                <div className="control ">
                  <input
              type="date"
              className="input "
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Filter
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      <div class="panel panel-default pt-1">
        <div class="panel-body p-3" id="cpy">
          <hr class="nomargin-bottom margin-top-10" />
          <h5 class="nomargin">
            *Chain Prayer Points - 22 Mar 2023* <br />(Claim the Promises in Jesus Name)
          </h5>
          <br />
        </div>
        <div ref={conponentPDF} style={{ width: '100%' }}>


        </div>
        <input type="checkbox" onChange={checkboxenable} id="myCheckcheck" name="cb" style={{ width: '5%', marginTop: '30px', height: '30px' }}
        />
        <button className="button is-primary mb-2 m-5" id="button1" onClick={handleCopy}>
          Copy PrayerPoints
        </button>
        <button className="button is-primary mb-2 m-5" onClick={generatePDF}>
          Generate PDF
        </button>

        <div ref={pageRef}>
          {prayerpoints.map((prayerpoint, index) => (
            <div >
              <div>
                {index + 1}&#41;&nbsp; <Link id="checkBoxShown"
                  to={`/prayerpoints/edit/${prayerpoint.uuid}`}
                  className=" is-small is-info ">
                  <u>Edit</u>
                </Link>
                <RxDividerVertical />
                <b>By: </b>{user && user.username}&nbsp; <RxDividerVertical />
                <b>Mobile: </b> {user && user.phone}&nbsp; <RxDividerVertical />
                <b>Category: </b>{prayerpoint.category_name}&nbsp; <RxDividerVertical />
                <b>For: </b>{prayerpoint.gpn_pp_toprayfor}&nbsp;{prayerpoint.lang}</div>
              <p className="pl-5">{prayerpoint.english}</p><br />
            </div>
          ))}</div>

      </div>


    </div>
  );
};

export default Welcome;
