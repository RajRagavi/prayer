import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import countries from "./data";
import { Button } from "react-bootstrap";
import "../App.css"

const FormAddPrayerPoints = () => {




  const [requestors, setRequestors] = useState([]);

  useEffect(() => {
    getRequestors();
  }, []);

  const getRequestors = async () => {
    const response = await axios.get("http://localhost:5000/requestors");
    setRequestors(response.data);
  };

  const [pp_stat, setPp_stat] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    const response = await axios.get("http://localhost:5000/prayerpoint_status");
    setPp_stat(response.data);
  };


  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.auth);


  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  useEffect(() => {
    if (user) {
      setUsername(user.username); // Update the username state with the user's username
      setPhone(user.phone); // Update the username state with the user's username
      const userFromUsers = users.find((u) => u.username === user.username);
      // if (userFromUsers) {
      //   setPhone_code(userFromUsers.phone_code);
      // }

    }
  }, [user, users]);
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



  //disabled save button//
  const enableButton2 = () => {
    document.getElementById("savebtn").disabled = false;
  }
  //disabled save button//

  const selectall = () => {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox')
        ele[i].checked = true;
    }
  }
  const deselectall = () => {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox')
        ele[i].checked = false;

    }
  }
  const checkboxHandler = () => {
    var checkBox = document.getElementById("myChecktamil");
    var TamilBoxShown = document.getElementById("TamilBoxShown");
    if (checkBox.checked == true) {
      TamilBoxShown.style.display = "block";
    } else {
      TamilBoxShown.style.display = "none";
    }
  }
  

  const myFunction = () => {
    var checkBox = document.getElementById("myCheck");
    var textarabic = document.getElementById("textarabic");
    if (checkBox.checked == true) {
      textarabic.style.display = "block";
    } else {
      textarabic.style.display = "none";
    }
  }

  const checkboxBengali = () => {
    var checkBox = document.getElementById("myCheckbengali");
    var BengaliBoxShown = document.getElementById("BengaliBoxShown");
    if (checkBox.checked == true) {
      BengaliBoxShown.style.display = "block";
    } else {
      BengaliBoxShown.style.display = "none";
    }
  }

  const checkboxFrench = () => {
    var checkBox = document.getElementById("myCheckfrench");
    var FrenchBoxShown = document.getElementById("FrenchBoxShown");
    if (checkBox.checked == true) {
      FrenchBoxShown.style.display = "block";
    } else {
      FrenchBoxShown.style.display = "none";
    }
  }
  const checkboxSpanish = () => {
    var checkBox = document.getElementById("myCheckspanish");
    var SpanishBoxShown = document.getElementById("SpanishBoxShown");
    if (checkBox.checked == true) {
      SpanishBoxShown.style.display = "block";
    } else {
      SpanishBoxShown.style.display = "none";
    }
  }
  const checkboxHindi = () => {
    var checkBox = document.getElementById("myCheckhindi");
    var HindiBoxShown = document.getElementById("HindiBoxShown");
    if (checkBox.checked == true) {
      HindiBoxShown.style.display = "block";
    } else {
      HindiBoxShown.style.display = "none";
    }
  }

  const checkboxTelugu = () => {
    var checkBox = document.getElementById("myCheckTelugu");
    var TeluguBoxShown = document.getElementById("TeluguBoxShown");
    if (checkBox.checked == true) {
      TeluguBoxShown.style.display = "block";
    } else {
      TeluguBoxShown.style.display = "none";
    }
  }
  const checkboxKannada = () => {
    var checkBox = document.getElementById("myCheckkannada");
    var KannadaBoxShown = document.getElementById("KannadaBoxShown");
    if (checkBox.checked == true) {
      KannadaBoxShown.style.display = "block";
    } else {
      KannadaBoxShown.style.display = "none";
    }
  }
  const checkboxKorean = () => {
    var checkBox = document.getElementById("myCheckkorean");
    var KoreanBoxShown = document.getElementById("KoreanBoxShown");
    if (checkBox.checked == true) {
      KoreanBoxShown.style.display = "block";
    } else {
      KoreanBoxShown.style.display = "none";
    }
  }
  
 


  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [pp_status, setPp_status] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [gpn_pp_toprayfor, setGpn_pp_toprayfor] = useState("");

  const [english, setEnglish] = useState("");
  const [tamil, setTamil] = useState("");
  const [arabic, setArabic] = useState("");
  const [bengali, setBengali] = useState("");
  const [spanish, setSpanish] = useState("");
  const [french, setFrench] = useState("");
  const [kannada, setKannada] = useState("");
  const [korean, setKorean] = useState("");  
  const [telugu, setTelugu] = useState("");
  const [hindi, setHindi] = useState("");





  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const tamilRef = useRef();
  const arabicRef = useRef();
  const bengaliRef = useRef();
  const kannadaRef = useRef();
  const koreanRef = useRef();
  const spanishRef = useRef();
  const teluguRef = useRef();
  const hindiRef = useRef();
  const frenchRef = useRef();

  const savePrayerpoint = async (e) => {
    e.preventDefault();
    const tamilValue = tamilRef.current.value;
    const arabicValue = arabicRef.current.value;
    const bengaliValue = bengaliRef.current.value;
    const kannadaValue = kannadaRef.current.value;
    const koreanValue = koreanRef.current.value;
    const spanishValue = spanishRef.current.value;
    const teluguValue = teluguRef.current.value;
    const hindiValue = hindiRef.current.value;
    const frenchValue = frenchRef.current.value;
    try {
      await axios.post("http://localhost:5000/prayerpoints", {
        username: username,
        phone: phone,
        pp_status: pp_status,
        category_name: category_name,
        gpn_pp_toprayfor: gpn_pp_toprayfor,
        english: english,
        tamil: tamilValue,
        arabic: arabicValue,
        french: frenchValue,
        hindi: hindiValue,
        kannada: kannadaValue,
        korean: koreanValue,
        telugu: teluguValue,
        spanish: spanishValue,
        bengali: bengaliValue,

       
      });
      navigate("/prayerpoints");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };



//translate

  function handleTranslation(fromElement, toElement, selectTags) {
    fromElement.addEventListener("keyup", () => {
      if (!fromElement.value) {
        toElement.value = "";
      }
    });
  
    translateBtn.addEventListener("click", () => {
      let text = fromElement.value.trim();
      let translateFrom = selectTags[0].value;
      let translateTo = selectTags[1].value;
      if (!text) return;
      toElement.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toElement.value = data.responseData.translatedText;
          data.matches.forEach((data) => {
            if (data.id == 0) {
              toElement.value = data.translation;
              console.log(data);
            }
          });
          toElement.setAttribute("placeholder", "Translation");
        });
    });
  }
  
  // Selecting elements and initializing translations
  const languages = [
    { from: ".from-text", to: ".to-text", select: ".langselect" },
    { from: ".fromar-text", to: ".toar-text", select: ".langselectar" },
    { from: ".fromben-text", to: ".toben-text", select: ".langselectben" },
    { from: ".fromspa-text", to: ".tospa-text", select: ".langselectspa" },
    { from: ".fromfre-text", to: ".tofre-text", select: ".langselectfre" },
    { from: ".fromhin-text", to: ".tohin-text", select: ".langselecthin" },
    { from: ".fromtel-text", to: ".totel-text", select: ".langselecttel" },
    { from: ".fromkan-text", to: ".tokan-text", select: ".langselectkan" },
    { from: ".fromkor-text", to: ".tokor-text", select: ".langselectkor" },
  ];
  
  languages.forEach(({ from, to, select }) => {
    const fromText = document.querySelector(from);
    const toText = document.querySelector(to);
    const selectTags = document.querySelectorAll(select);
  
    handleTranslation(fromText, toText, selectTags);
  });
  
  // Exchange Icon Functionality
  exchageIcon.addEventListener("click", () => {
    const tempText = fromText.value;
    const tempLang = selectTag[0].value;
  
    fromText.value = toText.value;
    toText.value = tempText;
  
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
  });
  
  // Speech Icons Functionality
  icons.forEach((icon) => {
    icon.addEventListener("click", ({ target }) => {
      if (!fromText.value || !toText.value) return;
      if (target.classList.contains("fa-copy")) {
        if (target.id === "from") {
          navigator.clipboard.writeText(fromText.value);
        } else {
          navigator.clipboard.writeText(toText.value);
        }
      } else {
        let utterance;
        if (target.id === "from") {
          utterance = new SpeechSynthesisUtterance(fromText.value);
          utterance.lang = selectTag[0].value;
        } else {
          utterance = new SpeechSynthesisUtterance(toText.value);
          utterance.lang = selectTag[1].value;
        }
        speechSynthesis.speak(utterance);
      }
    });
  });


  return (
    <div className="pt-5">

      <h1 className="title ">Add New Prayer Points</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePrayerpoint}>

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={username} // Use the username state as the value
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder=""
                    required
                  />



                </div>
              </div>
              <div className="field">
                <label className="label">Mobile</label>
                <div className="row">

                  <div className="col">
                    <input
                      type="text"
                      className="input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder=""
                      required

                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Prayer Category</label>
                <div className="control">
                  <select value={category_name} required className="input" onChange={(e) => setCategory_name(e.target.value)}>
                    <option>Select Category</option>
                    {categorys.map((category) => (

                      <option>{category.cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Whom to pray (person name)</label>
                <div className="control">


                  <select
                    className="input" required
                    value={gpn_pp_toprayfor}
                    onChange={(e) => setGpn_pp_toprayfor(e.target.value)}>
                    <option>Select Requestor</option>
                    {requestors.map((requestor) => (

                      <option>{requestor.req_first_name}</option>


                    ))}

                  </select>

                </div>
              </div>
              <div className="field">
                <label className="label">Status</label>
                <div className="control">


                  <select
                    className="input" required
                    value={pp_status}
                    onChange={(e) => setPp_status(e.target.value)}>
                    <option>Select Staus</option>
                    {pp_stat.map((stat) => (

                      <option>{stat.pp_status}</option>


                    ))}

                  </select>

                </div>
              </div>


              <div className="row checkboxlang">
                <label className="label ">Languages</label>

                <div className="row">
                  <div className="col">
                    <div className="field" id="alllangu">
                      <div className=" text-input ">
                        <input type="checkbox" onChange={selectall} id="" name="chk" value="" />
                        <label for="sele"> selectAll</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" onChange={deselectall} id="" name="" value="" />
                        <label for="desele"> DeselectAll</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" onChange={checkboxHandler} id="myChecktamil" name="chk" value="" />
                        <label for="Tam"> Tamil</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheck" onChange={myFunction} name="chk" value="" />
                        <label for=""> Arabic</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheckbengali" onChange={checkboxBengali} name="chk" value="" />
                        <label for=""> Bengali</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheckfrench" onChange={checkboxFrench} name="chk" value="" />
                        <label for=""> French</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheckhindi" onChange={checkboxHindi} name="chk" value="" />
                        <label for=""> Hindi</label></div>
                      <div className=" text-input "> 
                      <input type="checkbox" onChange={checkboxTelugu} id="myCheckTelugu" name="chk" value="" />
                        <label for=""> Telugu</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheckkannada" onChange={checkboxKannada} name="chk" value="" />
                        <label for=""> Kannada</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheckkorean" onChange={checkboxKorean} name="chk" value="" />
                        <label for=""> Korean</label></div>
                      <div className=" text-input ">
                        <input type="checkbox" id="myCheckspanish" onChange={checkboxSpanish} name="chk" value="" />
                        <label for=""> Spanish</label></div>

                      



                    </div>
                  </div>

 </div>
              


              </div>
              <br />
              <div className=" field">
                <div className=" text-input ">
                  <input type="checkbox" id="emg" name="EN-GB" value="eng" checked />
                  <label for="EN-GB"> English</label>
                  <textarea value={english} className=" from-text input" onChange={(e) => setEnglish(e.target.value)}></textarea>
                </div>
              </div>
              <div className=" field">
                <div id="TamilBoxShown" style={{ display: "none" }}>
                  <div className="wrapper ">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="from-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea id="tamil"
                        ref={tamilRef}
                        spellcheck="false"
                        className="to-text input"
                        placeholder="Translation"
                        onChange={(e) => setTamil(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselect"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>
                      <li className="exchange">

                      </li>
                      <li className="row to">
                        <select className="langselect"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbutton button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />

                <div id="textarabic" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromar-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={arabicRef}
                        className="toar-text input"
                        placeholder="Translation"
                        onChange={(e) => setArabic(e.target.value)}

                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectar"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectar"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonar button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                  <br /></div>

                <div id="BengaliBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromben-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={bengaliRef}
                        className="toben-text input"
                        placeholder="Translation"
                        onChange={(e) => setBengali(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectben"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectben"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonben button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="SpanishBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromspa-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={spanishRef}
                        className="tospa-text input"
                        placeholder="Translation"
                        onChange={(e) => setSpanish(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectspa"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectspa"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonspa button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="FrenchBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromfre-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={frenchRef}
                        className="tofre-text input"
                        placeholder="Translation"
                        onChange={(e) => setFrench(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectfre"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectfre"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonfre button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="HindiBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromhin-text"
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={hindiRef}
                        className="tohin-text input"
                        placeholder="Translation"
                        onChange={(e) => setHindi(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselecthin"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselecthin"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonhin button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="TeluguBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromtel-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={teluguRef}
                        className="totel-text input"
                        placeholder="Translation"
                        onChange={(e) => setTelugu(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselecttel"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselecttel"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttontel button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="KannadaBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromkan-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={kannadaRef}
                        className="tokan-text input"
                        placeholder="Translation"
                        onChange={(e) => setKannada(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectkan"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectkan"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonkan button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="KoreanBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromkor-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={koreanRef}
                        className="tokor-text input"
                        placeholder="Translation"
                        onChange={(e) => setKorean(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectkor"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectkor"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonkor button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
                <div id="SpanishBoxShown" style={{ display: "none" }}>
                  <div className="wrapper">
                    <div className="text-input ">
                      <textarea
                        spellcheck="false"
                        className="fromspa-text "
                        placeholder="Enter text"
                        value={english}
                        readonly
                        disabled
                      ></textarea>
                      <textarea
                        spellcheck="false"
                        ref={spanishRef}
                        className="tospa-text input"
                        placeholder="Translation"
                        onChange={(e) => setSpanish(e.target.value)}
                      ></textarea>
                    </div>
                    <ul className="controls">
                      <li className="row from">
                        <select className="langselectspa"></select>
                        <div className="icons">
                          <i id="from" className="fas fa-volume-up volumeicone"></i>
                          <i id="from" className="fas fa-copy volumeicone"></i>
                        </div>

                      </li>

                      <li className="row to">
                        <select className="langselectspa"></select>
                        <div className="icons">
                          <i id="to" className="fas fa-volume-up volumeicone"></i>
                          <i id="to" className="fas fa-copy volumeicone"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button className="transbuttonspa button is-success m-2" onClick={enableButton2}>Translate Text</Button>
                </div>
                <br />
               

                
                
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" id="savebtn" className="button is-success" disabled >
                    Save
                  </button>
                  <NavLink to={"/prayerpoints"} className="button is-success ml-5">
                    Cancel
                  </NavLink>
                  <a href="#alllangu" className="button is-success ml-5">
                    Add More Language
                  </a>
                </div>
              </div>
              <p className="has-text-centered">{msg}</p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPrayerPoints;
