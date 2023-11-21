import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const FormAddLanguages = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();

  }, []);


  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const [lang_code, setLang_code] = useState('');
  const [lang, setLang] = useState('');
  const [langusername, setLangusername] = useState('');
  const [lang_enabled, setLang_enabled] = useState('');
  const [is_default_lang, setIs_default_lang] = useState('');


  const navigate = useNavigate();

  const savePrayerpoint = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/languages", {
        lang_code: lang_code,
        lang: lang,
        langusername: langusername,
        lang_enabled: lang_enabled,
        is_default_lang:is_default_lang
      });
      navigate("/languages");
    } catch (error) {
      // if (error.response) {
      //   setMsg(error.response.data.msg);
      // }
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLang(selectedLanguage);

    // Map selected language to the corresponding language code
    const languageCodes = {
      English: "ENG",
      Tamil: "TAM",
      Amharic: "AMH",
      Arabic: "ARA",
      Bielarus: "BIE",
      Bemba: "BEM",
      Bislama: "BIS",
      Bajan: "BAJ",
      Bengali: "BEN",
      Tibetan: "TIB",
      Breton: "BRE",
      Bosnian: "BOS",
      Catalan: "CAT",
      Coptic: "COP",
      Czech: "CZE",
      Welsh: "WEL",
      Danish: "DAN",
      Dzongkha: "DZO",
      German: "GER",
      Maldivian: "MAL",
      Greek: "GRE",
      English: "ENG",
      Spanish: "SPA",
      Estonian: "EST",
      Basque: "BAS",
      Persian: "PER",
      Finnish: "FIN",
      Fanagalo: "FAN",
      Faroese: "FAR",
      French: "FRE",
      Galician: "GAL",
      Gujarati: "GUJ",
      Hausa: "HAU",
      Hebrew: "HEB",
      Croatian: "CRO",
      Hungarian: "HUG",
      Indonesian: "IND",
      Icelandic: "ICE",
      Italian: "ITA",
      Japanese: "JAP",
      Kazakh: "KAZ",
      Khmer: "KHM",
      Kannada: "KAN",
      Korean: "KOR",
      Kurdish: "KUR",
      Kyrgyz: "KYR",
      Latin: "LAT",
      Lao: "LAO",
      Latvian: "LAT",
      Mende: "MEN",
      Malagasy: "MAL",
      Maori: "MAO",
      Malay: "MAL",
      Maltese: "MAL",
      Burmese: "BUR",
      Nepali: "NEP",
      Niuean: "NIU",
      Dutch: "DUT",
      Norwegian: "NOR",
      Nyanja: "NYA",
      Pakistani: "PAK",
      Palauan: "PAL",
      Panjabi: "PAN",
      Pashto: "PAS",
      Pijin: "PIJ",
      Polish: "POL",
      Portuguese: "POR",
      Kirundi: "KIR",
      Romanian: "ROM",
      Russian: "RUS",
      Sango: "SAN",
      Sinhala: "SIN",
      Slovak: "SLO",
      Samoan: "SAM",
      Shona: "SHO",
      Somali: "SOM",
      Albanian: "ALB",
      Serbian: "SER",
      Swedish: "SWE",
      Swahili: "SWA",
      Telugu: "TEL",
      Tetum: "TET",
      Tajik: "TAJ",
      Thai: "THA",
      Tigrinya: "TIG",
      Turkmen: "TUR",
      Tagalog: "TAG",
      Tswana: "TSW",
      Tongan: "TON",
      Turkish: "TUR",
      Ukrainian: "UKR",
      Uzbek: "UZB",
      Vietnamese: "VIE",
      Wolof: "WOL",
      Xhosa: "XHO",
      Yiddish: "YID",
      Zulu: "ZUL"
      // Add more language code mappings here...
    };

    // Set the language code based on the selected language
    setLang_code(languageCodes[selectedLanguage] || "");
  };
  return (
    <div >
      <h1 className="title pt-5">Languages</h1>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePrayerpoint}>
              <div className="row checkboxlang p-4">

                <div className="field">
                  <div className="control">
                    <label className="label ">Languages</label>
                    <div className="control">
                      <select
                        aria-label="Default select example"
                        value={lang}
                        className="input"
                        onChange={handleLanguageChange} // Use the updated event handler
                        required
                      >  <option selected="" disabled="" value="">Select Code</option>
                        <option value="English">English</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Amharic">Amharic</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Bielarus">Bielarus</option>
                        <option value="Bemba">Bemba</option>
                        <option value="Bislama">Bislama</option>
                        <option value="Bajan">Bajan</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Tibetan">Tibetan</option>
                        <option value="Breton">Breton</option>
                        <option value="Bosnian">Bosnian</option>
                        <option value="Catalan">Catalan</option>
                        <option value="Coptic">Coptic</option>
                        <option value="Czech">Czech</option>
                        <option value="Welsh">Welsh</option>
                        <option value="Danish">Danish</option>
                        <option value="Dzongkha">Dzongkha</option>
                        <option value="German">German</option>
                        <option value="Maldivian">Maldivian</option>
                        <option value="Greek">Greek</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Basque">Basque</option>
                        <option value="Persian">Persian</option>
                        <option value="Finnish">Finnish</option>
                        <option value="Fanagalo">Fanagalo</option>
                        <option value="Faroese">Faroese</option>
                        <option value="French">French</option>
                        <option value="Galician">Galician</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Hausa">Hausa</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Croatian">Croatian</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Icelandic">Icelandic</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Kazakh">Kazakh</option>
                        <option value="Khmer">Khmer</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Korean">Korean</option>
                        <option value="Kurdish">Kurdish</option>
                        <option value="Kyrgyz">Kyrgyz</option>
                        <option value="Latin">Latin</option>
                        <option value="Lao">Lao</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Mende">Mende</option>
                        <option value="Malagasy">Malagasy</option>
                        <option value="Maori">Maori</option>
                        <option value="Malay">Malay</option>
                        <option value="Maltese">Maltese</option>
                        <option value="Burmese">Burmese</option>
                        <option value="Nepali">Nepali</option>
                        <option value="Niuean">Niuean</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Norwegian">Norwegian</option>
                        <option value="Nyanja">Nyanja</option>
                        <option value="Pakistani">Pakistani</option>
                        <option value="Palauan">Palauan</option>
                        <option value="Panjabi">Panjabi</option>
                        <option value="Pashto">Pashto</option>
                        <option value="Pijin">Pijin</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Kirundi">Kirundi</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="Sango">Sango</option>
                        <option value="Sinhala">Sinhala</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Samoan">Samoan</option>
                        <option value="Shona">Shona</option>
                        <option value="Somali">Somali</option>
                        <option value="Albanian">Albanian</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Swedish">Swedish</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tetum">Tetum</option>
                        <option value="Tajik">Tajik</option>
                        <option value="Thai">Thai</option>
                        <option value="Tigrinya">Tigrinya</option>
                        <option value="Turkmen">Turkmen</option>
                        <option value="Tagalog">Tagalog</option>
                        <option value="Tswana">Tswana</option>
                        <option value="Tongan">Tongan</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Ukrainian">Ukrainian</option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Wolof">Wolof</option>
                        <option value="Xhosa">Xhosa</option>
                        <option value="Yiddish">Yiddish</option>
                        <option value="Zulu">Zulu</option>
                      </select>
                    </div>
                    <label className="label ">Language code</label>
                    <div className="control">
                      <select
                        aria-label="Default select example"
                        value={lang_code}
                        className="input"
                        onChange={(e) => setLang_code(e.target.value)}
                        required
                      >  <option selected="" disabled="" value="">Select Code</option>
                        <option value="ENG">ENG</option>
                        <option value="TAM">TAM</option>
                        <option value="ARA">ARA</option>
                        <option value="AMH">AMH</option>
                        <option value="BIE">BIE</option>
                        <option value="BEM">BEM</option>
                        <option value="BIS">BIS</option>
                        <option value="BAJ">BAJ</option>
                        <option value="BEN">BEN</option>
                        <option value="TIB">TIB</option>
                        <option value="BRE">BRE</option>
                        <option value="BOS">BOS</option>
                        <option value="CAT">CAT</option>
                        <option value="COP">COP</option>
                        <option value="CZE">CZE</option>
                        <option value="WEL">WEL</option>
                        <option value="DAN">DAN</option>
                        <option value="DZO">DZO</option>
                        <option value="GER">GER</option>
                        <option value="MAL">MAL</option>
                        <option value="GRE">GRE</option>
                        <option value="SPA">SPA</option>
                        <option value="EST">EST</option>
                        <option value="BAS">BAS</option>
                        <option value="PER">PER</option>
                        <option value="FIN">FIN</option>
                        <option value="FAN">FAN</option>
                        <option value="FAR">FAR</option>
                        <option value="FRE">FRE</option>
                        <option value="GAL">GAL</option>
                        <option value="GUJ">GUJ</option>
                        <option value="HAU">HAU</option>
                        <option value="HEB">HEB</option>
                        <option value="HIN">HIN</option>
                        <option value="CRO">CRO</option>
                        <option value="HUG">HUG</option>
                        <option value="IND">IND</option>
                        <option value="ICE">ICE</option>
                        <option value="ITA">ITA</option>
                        <option value="JAP">JAP</option>
                        <option value="KAZ">KAZ</option>
                        <option value="KHM">KHM</option>
                        <option value="KAN">KAN</option>
                        <option value="KOR">KOR</option>
                        <option value="KUR">KUR</option>
                        <option value="KYR">KYR</option>
                        <option value="LAT">LAT</option>
                        <option value="LAO">LAO</option>
                        <option value="LAV">LAV</option>
                        <option value="MEN">MEN</option>
                        <option value="MAL">MAL</option>
                        <option value="MAO">MAO</option>
                        <option value="MAA">MAA</option>
                        <option value="MAT">MAT</option>
                        <option value="BUR">BUR</option>
                        <option value="NEP">NEP</option>
                        <option value="NIU">NIU</option>
                        <option value="DUT">DUT</option>
                        <option value="NOR">NOR</option>
                        <option value="NYA">NYA</option>
                        <option value="PAK">PAK</option>
                        <option value="PAL">PAL</option>
                        <option value="PAN">PAN</option>
                        <option value="PAS">PAS</option>
                        <option value="PIJ">PIJ</option>
                        <option value="POL">POL</option>
                        <option value="POR">POR</option>
                        <option value="KIR">KIR</option>
                        <option value="ROM">ROM</option>
                        <option value="RUS">RUS</option>
                        <option value="SAN">SAN</option>
                        <option value="SIN">SIN</option>
                        <option value="SLO">SLO</option>
                        <option value="SAM">SAM</option>
                        <option value="SHO">SHO</option>
                        <option value="SOM">SOM</option>
                        <option value="ALB">ALB</option>
                        <option value="SER">SER</option>
                        <option value="SWE">SWE</option>
                        <option value="SWA">SWA</option>
                        <option value="TEL">TEL</option>
                        <option value="TET">TET</option>
                        <option value="TAJ">TAJ</option>
                        <option value="THA">THA</option>
                        <option value="TIG">TIG</option>
                        <option value="TUR">TUR</option>
                        <option value="TAG">TAG</option>
                        <option value="TSW">TSW</option>
                        <option value="TON">TON</option>
                        <option value="TUR">TUR</option>
                        <option value="UKR">UKR</option>
                        <option value="UZB">UZB</option>
                        <option value="VIE">VIE</option>
                        <option value="WOL">WOL</option>
                        <option value="XHO">XHO</option>
                        <option value="YID">YID</option>
                        <option value="ZUL">ZUL</option>
                      </select>
                    </div>
                    {/* <label className="label ">User</label>

                    <select value={langusername} className="input" onChange={(e) => setLangusername(e.target.value)}>
                      <option>Select User</option>
                      {users.map((user) => (

                        <option>{user.username}</option>


                      ))}

                    </select> */}

                    <label className="label ">Enabled</label>
                    <div className="control">
                      <select aria-label="Default select example" value={lang_enabled} className="input" onChange={(e) => setLang_enabled(e.target.value)} required>
                        <option selected="" disabled="" value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                      </select>
                    </div>
                    <label className="label ">Default_lang</label>
                    <div className="control">
                      <select aria-label="Default select example" value={is_default_lang} className="input" onChange={(e) => setIs_default_lang(e.target.value)} required>
                        <option selected="" disabled="" value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                      </select>
                    </div>
                  </div>
                </div>


              </div>



              <button type="submit" id="savebtn" className="button is-success"  >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddLanguages;
