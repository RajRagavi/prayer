import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Categorylist = () => {

 

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategorys();
  }, []);

  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/categorys");
    setCategorys(response.data);
  };

  const deleteCategory = async (categoryId) => {
    await axios.delete(`http://localhost:5000/categorys/${categoryId}`);
    getCategorys();
  };



  return (
    <div className="pt-5 mt-4"><br/>
      <h1 className="title">New Categorys</h1>
      <h2 className="subtitle">List of Categorys</h2>
      <Link to="/categorys/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div >
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            
            <th>Prayer Point Category</th>
            <th>Description</th>
            <th>Category Code</th>
          
         </tr>
        </thead>
        <tbody>
          {categorys.map((category, index) => (
            <tr key={category.uuid}>
              <td>{index + 1}</td>
            
              <td>{category.cat}</td>
              <td>{category.cat_desc}</td>
              <td>{category.cat_code}</td>
             
          
      <td>
      <Link
                  to={`/categorys/edit/${category.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteCategory(category.uuid)}
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

export default Categorylist;
