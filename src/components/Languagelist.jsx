import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";


const Laguageslist = (props) => {






  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getLanguages();
  }, []);

  const getLanguages = async () => {
    const response = await axios.get("http://localhost:5000/languages");
    setLanguages(response.data);
  };

 
  const deleteLanguage = async (languageId) => {
    await axios.delete(`http://localhost:5000/languages/${languageId}`);
    getLanguages();
  };



  return (
    <div className="pt-5">
    <h1 className="title">Add New Languages</h1>
    <h2 className="subtitle">List of Languages</h2>
    <Link to="/languages/add" className="button is-primary mb-2">
        Add New
      </Link>
  
              <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Languages</th>
            <th>Language Code</th>
            <th>Enabled Language</th>
            <th>Default Language</th>
            <th>Action</th>
          
         </tr>
        </thead>
        <tbody>
          {languages.map((language, index) => (
            <tr key={language.uuid}>
              <td>{index + 1}</td>
              <td>{language.lang}</td>
              <td>{language.lang_code}</td>
             <td>{language.lang_enabled}</td>
             <td>{language.is_default_lang}</td>
             <td>
            
                  <Link
                  to={`/languages/edit/${language.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
               
                <button
                  onClick={() => deleteLanguage(language.uuid)}
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
  );
};

export default Laguageslist;
