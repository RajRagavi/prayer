import React, { useState } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";

const FormAddCategory = () => {
 
  const [cat, setcat] = useState('');
  const [cat_desc, setcat_desc] = useState('');
  const [cat_code, setcat_code] = useState('');
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/categorys", {
       
        cat: cat,
        cat_desc:cat_desc,
        cat_code:cat_code,
      });
      navigate("/categorys");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div >
      <h1 className="title pt-5">Categorys</h1>
      <h2 className="subtitle">Add New Category</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              {/* <p className="has-text-centered">{msg}</p> */}
              <div className="field">
              <div className="control">
                
                <label className="label">Prayer Point Category</label>
                <input
                  type="text"
                  className="input"
                  value={cat}
                  onChange={(event) => setcat(event.target.value)}
                  placeholder="Prayer Point Category"
                  required
                />
                <label className="label">Description</label>
                <input
                  type="text"
                  className="input"
                  value={cat_desc}
                  onChange={(event) => setcat_desc(event.target.value)}
                  placeholder="Description"
                  required
                />
                <label className="label">Category Code</label>
                <input
                  type="text"
                  className="input"
                  value={cat_code}
                  onChange={(event) => setcat_code(event.target.value)}
                  placeholder="Category Code"
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

export default FormAddCategory;
