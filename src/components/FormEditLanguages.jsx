import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams,NavLink } from "react-router-dom";

import "./Translate.css";

function FormEditLanguages() {
 
  const [lang, setLang] = useState('');
  const [lang_code, setLang_code] = useState('');
  const [langusername, setLangusername] = useState('');
  const [lang_enabled, setLang_enabled] = useState('');
  const [is_default_lang, setIs_default_lang] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    const getLanguageById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/languages/${id}`
        );
        setLang(response.data.lang);
        setLang_code(response.data.lang_code);
        setLangusername(response.data.langusername);
        setLang_enabled(response.data.lang_enabled);
        setIs_default_lang(response.data.is_default_lang);
      } catch (error) {
        if (error.response) {
          // setMsg(error.response.data.msg);
        }
      }
    };
    getLanguageById();
  }, [id]);


  const updateLanguages = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/languages/${id}`, {
        lang_code: lang_code,
        lang: lang,
        // langusername: langusername,
        lang_enabled: lang_enabled,
        is_default_lang:is_default_lang
      });
      navigate("/languages");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }};
  
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
      getLanguages();
    }, []);
  
    const getLanguages = async () => {
      const response = await axios.get("http://localhost:5000/languages");
      setLanguages(response.data);
    };
  

  return (
    <div >
    <h1 className="title pt-5">Categorys</h1>
    <h2 className="subtitle">Add New Category</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
        <form onSubmit={updateLanguages}>
            {/* <p className="has-text-centered">{msg}</p> */}
            <div className="field">
            <div className="control">
              
              <label className="label">Languages</label>
              <select value={lang} className="input" onChange={(e) => setLang(e.target.value)}>
                 
                    {languages.map((language) => (

                      <option>{language.lang}</option>
                    ))}
                  </select>
              
            </div>
            <label className="label ">Language code</label>
                    <div className="control">
                      <select
                       
                        value={lang_code}
                        className="input"
                        onChange={(e) => setLang_code(e.target.value)}
                        required
                      >     {languages.map((language) => (

                        <option>{language.lang_code}</option>
  
  
                      ))}
                     
                      </select>
                    </div>
                    {/* <label className="label ">User</label>

                   
<select  value={langusername} className="input" onChange={(e) => setLangusername(e.target.value)}>

{languages.map((language) => (

  <option>{language.langusername}</option>


))}

</select> */}

<label className="label ">Enabled</label>
<div className="control">
  <select aria-label="Default select example" value={lang_enabled} className="input" onChange={(e) => setLang_enabled(e.target.value)} required>
    
    <option value="Yes">Yes</option>
    <option value="No">No</option>

  </select>
</div>
<label className="label ">Default_lang</label>
<div className="control">
  <select aria-label="Default select example" value={is_default_lang} className="input" onChange={(e) => setIs_default_lang(e.target.value)} required>

    <option value="Yes">Yes</option>
    <option value="No">No</option>

  </select>
</div>    
          </div>
       
         
       
          
          <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
                <NavLink to={"/languages"} className="button is-success ml-5">
             Cancel
          </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormEditLanguages