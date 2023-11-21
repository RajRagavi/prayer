import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const PrayerPointList = () => {
  const { user } = useSelector((state) => state.auth);

  const componentPDF = useRef();

  const [prayerpoints, setPrayerpoints] = useState([]);

  useEffect(() => {
    getPrayerpoints();
  }, []);

  const getPrayerpoints = async () => {
    const response = await axios.get("http://localhost:5000/prayerpoints");
    setPrayerpoints(response.data);
  };

  const deletePrayerpoint = async (prayerpointId) => {
    await axios.delete(`http://localhost:5000/prayerpoints/${prayerpointId}`);
    getPrayerpoints();
  };

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Prayer Points",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  return (
    <div className="pt-5 mt-4">
      <br />
      <h1 className="title">New Prayer Point</h1>
      <h2 className="subtitle">List of Prayer Point</h2>
      <Link to="/prayerpoints/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div className="table-container" style={{ overflowY: "auto",overflowX: "auto", height:"300px",  width: "1100px" }}>
        <table className="table table-container is-striped is-fullwidth" ref={componentPDF}>
          <thead style={{backgroundColor: "#f2f2f2",position: "sticky",  top: "0", zIndex: "2"}}>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Prayer Category</th>
              <th>Whom Pray (person name)</th>
              <th>English</th>
              <th>Tamil</th>
              <th>Arabic</th>
              <th>Bengali</th>
              <th>Spanish</th>
              <th>French</th>
              <th>Kannada</th>
              <th>Korean</th>
              <th>Telugu</th>
              <th>Hindi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {prayerpoints.map((prayerpoint, index) => (
              <tr key={prayerpoint.uuid}>
                <td>{index + 1}</td>
                <td>{prayerpoint.username}</td>
                <td>{prayerpoint.phone}</td>
                <td>{prayerpoint.category}</td>
                <td>{prayerpoint.gpn_pp_toprayfor}</td>
                <td >{prayerpoint.english}</td>
                <td>{prayerpoint.tamil}</td>
                <td>{prayerpoint.arabic}</td>
                <td>{prayerpoint.bengali}</td>
                <td>{prayerpoint.spanish}</td>
                <td>{prayerpoint.french}</td>
                <td>{prayerpoint.kannada}</td>
                <td>{prayerpoint.korean}</td>
                <td>{prayerpoint.telugu}</td>
                <td>{prayerpoint.hindi}</td>
                <td>
                  <Link
                    to={`/prayerpoints/edit/${prayerpoint.uuid}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePrayerpoint(prayerpoint.uuid)}
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
      <button className="button is-primary mb-2" onClick={generatePDF}>
        PDF
      </button>
    </div>
  );
};

export default PrayerPointList;
