import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams ,NavLink} from "react-router-dom";
import countries from "./data";
import { Button } from "react-bootstrap";
import "./Translate.css";

const FormEditPoints = () => {
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
  const { gpn_pp_id } = useParams();

  const [requestors, setRequestors] = useState([]);
  const [pp_stat, setPp_stat] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategorys();
  }, []);

  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/categorys");
    setCategorys(response.data);
  };
  useEffect(() => {
    const getPrayerpointById = async () => {
      if (gpn_pp_id !== undefined) {
        console.log("hi")
         try {
        const response = await axios.get(`http://localhost:5000/prayerpoints/${gpn_pp_id}`
        );
        setUsername(response.data.username);
        
        setPhone(response.data.phone);
        setCategory_name(response.data.category_name);
        setGpn_pp_toprayfor(response.data.gpn_pp_toprayfor);
        setEnglish(response.data.english);
        setTamil(response.data.tamil);
        setArabic(response.data.arabic);
        setBengali(response.data.bengali);
        setSpanish(response.data.spanish);
        setFrench(response.data.french);
        setKannada(response.data.kannada);
        setKorean(response.data.korean);
        setTelugu(response.data.telugu);
        setHindi(response.data.hindi);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);

        }
      }
    }};
    getPrayerpointById();
  }, [gpn_pp_id]);

  const tamilRef = useRef();
  const arabicRef = useRef();
  const bengaliRef = useRef();
  const kannadaRef = useRef();
  const koreanRef = useRef();
  const spanishRef = useRef();
  const teluguRef = useRef();
  const hindiRef = useRef();
  const frenchRef = useRef();

  const updatePrayerpoint = async (e) => {
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
      await axios.patch(`http://localhost:5000/prayerpoints/${gpn_pp_id}`, {
        username: username,
        phone: phone,
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



  const enableButton2 = () => {
    document.getElementById("savebtn").disabled = false;
  }

  //Translate
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const exchageIcon = document.querySelector(".exchange");
    const selectTag = document.querySelectorAll(".langselect");

    const icons = document.querySelectorAll(".row .volumeicone");
    const translateBtn = document.querySelector(".transbutton");

   
    const fromarText = document.querySelector(".fromar-text");
    const toarText = document.querySelector(".toar-text");
    const selectTagar = document.querySelectorAll(".langselectar");
    const translateBtnar = document.querySelector(".transbuttonar");
   
    const frombenText = document.querySelector(".fromben-text");
    const tobenText = document.querySelector(".toben-text");
    const selectTagben = document.querySelectorAll(".langselectben");
    const translateBtnben = document.querySelector(".transbuttonben");

    const fromspaText = document.querySelector(".fromspa-text");
    const tospaText = document.querySelector(".tospa-text");
    const selectTagspa = document.querySelectorAll(".langselectspa");
    const translateBtnspa = document.querySelector(".transbuttonspa");

    const fromfreText = document.querySelector(".fromfre-text");
    const tofreText = document.querySelector(".tofre-text");
    const selectTagfre = document.querySelectorAll(".langselectfre");
    const translateBtnfre = document.querySelector(".transbuttonfre");


    const fromhinText = document.querySelector(".fromhin-text");
    const tohinText = document.querySelector(".tohin-text");
    const selectTaghin = document.querySelectorAll(".langselecthin");
    const translateBtnhin = document.querySelector(".transbuttonhin");
   
   
    const fromtelText = document.querySelector(".fromtel-text");
    const totelText = document.querySelector(".totel-text");
    const selectTagtel = document.querySelectorAll(".langselecttel");
    const translateBtntel = document.querySelector(".transbuttontel");
   
   
    const fromkanText = document.querySelector(".fromkan-text");
    const tokanText = document.querySelector(".tokan-text");
    const selectTagkan = document.querySelectorAll(".langselectkan");
    const translateBtnkan = document.querySelector(".transbuttonkan");
    
    const fromkorText = document.querySelector(".fromkor-text");
    const tokorText = document.querySelector(".tokor-text");
    const selectTagkor = document.querySelectorAll(".langselectkor");
    const translateBtnkor = document.querySelector(".transbuttonkor");


    selectTag.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code == "en-GB"
              ? "selected"
              : ""
            : country_code == "ta-LK"
              ? "selected"
              : "";

        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });
    exchageIcon.addEventListener("click", () => {

      let tempText = fromText.value;
      let tempLang = selectTag[0].value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTag[0].value = selectTag[1].value;
      selectTag[1].value = tempLang;
    });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTag[0].value;
      let translateTo = selectTag[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach((data) => {
            if (data.id == 0) {
              toText.value = data.translation;
              console.log(data);
            }
          });
          toText.setAttribute("placeholder", "Translation");
        });
    });

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
          if (target.id == "from") {
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


 

    //Arabic start
    selectTagar.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code == "en-GB"
              ? "selected"
              : ""
            : country_code == "ar-SA"
              ? "selected"
              : "";

        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });
    fromarText.addEventListener("keyup", () => {
      if (!fromarText.value) {
        toarText.value = "";
      }
    });

    translateBtnar.addEventListener("click", () => {
      let textar = fromarText.value.trim();
      let translatearFrom = selectTagar[0].value;
      let translatearTo = selectTagar[1].value;
      if (!textar) return;
      toarText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${textar}&langpair=${translatearFrom}|${translatearTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toarText.value = data.responseData.translatedText;
          data.matches.forEach((data) => {
            if (data.id == 0) {
              toarText.value = data.translation;
              console.log(data);
            }
          });
          toarText.setAttribute("placeholder", "Translation");
        });
    });
    //Arabic end
  //bengali start
  selectTagben.forEach((tag, id) => {
    for (let country_code in countries) {
      let selected =
        id === 0
          ? country_code == "en-GB"
            ? "selected"
            : ""
          : country_code == "bn-IN"
            ? "selected"
            : "";

      let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
      tag.insertAdjacentHTML("beforeend", option);
    }
  });
  frombenText.addEventListener("keyup", () => {
    if (!frombenText.value) {
      tobenText.value = "";
    }
  });

  translateBtnben.addEventListener("click", () => {
    let textben = frombenText.value.trim();
    let translatebenFrom = selectTagben[0].value;
    let translatebenTo = selectTagben[1].value;
    if (!textben) return;
    tobenText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${textben}&langpair=${translatebenFrom}|${translatebenTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        tobenText.value = data.responseData.translatedText;
        data.matches.forEach((data) => {
          if (data.id == 0) {
            tobenText.value = data.translation;
            console.log(data);
          }
        });
        tobenText.setAttribute("placeholder", "Translation");
      });
  });
  //bengali end


 //spanish start
 selectTagspa.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected =
      id === 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "es-ES"
          ? "selected"
          : "";

    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
fromspaText.addEventListener("keyup", () => {
  if (!fromspaText.value) {
    tospaText.value = "";
  }
});

translateBtnspa.addEventListener("click", () => {
  let textspa = fromspaText.value.trim();
  let translatespaFrom = selectTagspa[0].value;
  let translatespaTo = selectTagspa[1].value;
  if (!textspa) return;
  tospaText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${textspa}&langpair=${translatespaFrom}|${translatespaTo}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      tospaText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id == 0) {
          tospaText.value = data.translation;
          console.log(data);
        }
      });
      tospaText.setAttribute("placeholder", "Translation");
    });
});
//spanish end


//french start
selectTagfre.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected =
      id === 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "fr-FR"
          ? "selected"
          : "";

    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
fromfreText.addEventListener("keyup", () => {
  if (!fromfreText.value) {
    tofreText.value = "";
  }
});

translateBtnfre.addEventListener("click", () => {
  let textfre = fromfreText.value.trim();
  let translatefreFrom = selectTagfre[0].value;
  let translatefreTo = selectTagfre[1].value;
  if (!textfre) return;
  tofreText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${textfre}&langpair=${translatefreFrom}|${translatefreTo}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      tofreText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id == 0) {
          tofreText.value = data.translation;
          console.log(data);
        }
      });
      tofreText.setAttribute("placeholder", "Translation");
    });
});
//french end
//Hindi start
selectTaghin.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected =
      id === 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "hi-IN"
          ? "selected"
          : "";

    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
fromhinText.addEventListener("keyup", () => {
  if (!fromhinText.value) {
    tohinText.value = "";
  }
});

translateBtnhin.addEventListener("click", () => {
  let texthin = fromhinText.value.trim();
  let translatehinFrom = selectTaghin[0].value;
  let translatehinTo = selectTaghin[1].value;
  if (!texthin) return;
  tohinText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${texthin}&langpair=${translatehinFrom}|${translatehinTo}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      tohinText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id == 0) {
          tohinText.value = data.translation;
          console.log(data);
        }
      });
      tohinText.setAttribute("placeholder", "Translation");
    });
});
//Hindi end

//Telugu start
selectTagtel.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected =
      id === 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "te-IN"
          ? "selected"
          : "";

    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
fromtelText.addEventListener("keyup", () => {
  if (!fromtelText.value) {
    totelText.value = "";
  }
});

translateBtntel.addEventListener("click", () => {
  let texttel = fromtelText.value.trim();
  let translatetelFrom = selectTagtel[0].value;
  let translatetelTo = selectTagtel[1].value;
  if (!texttel) return;
  totelText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${texttel}&langpair=${translatetelFrom}|${translatetelTo}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      totelText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id == 0) {
          totelText.value = data.translation;
          console.log(data);
        }
      });
      totelText.setAttribute("placeholder", "Translation");
    });
});
//Telugu end
//Kannada start
selectTagkan.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected =
      id === 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "kn-IN"
          ? "selected"
          : "";

    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
fromkanText.addEventListener("keyup", () => {
  if (!fromkanText.value) {
    tokanText.value = "";
  }
});

translateBtnkan.addEventListener("click", () => {
  let textkan = fromkanText.value.trim();
  let translatekanFrom = selectTagkan[0].value;
  let translatekanTo = selectTagkan[1].value;
  if (!textkan) return;
  tokanText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${textkan}&langpair=${translatekanFrom}|${translatekanTo}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      totelText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id == 0) {
          tokanText.value = data.translation;
          console.log(data);
        }
      });
      tokanText.setAttribute("placeholder", "Translation");
    });
});
//Kannada end
//Korean start
selectTagkor.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected =
      id === 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "ko-KR"
          ? "selected"
          : "";

    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
fromkorText.addEventListener("keyup", () => {
  if (!fromkorText.value) {
    tokorText.value = "";
  }
});

translateBtnkor.addEventListener("click", () => {
  let textkor = fromkorText.value.trim();
  let translatekorFrom = selectTagkor[0].value;
  let translatekorTo = selectTagkor[1].value;
  if (!textkor) return;
  tokorText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${textkor}&langpair=${translatekorFrom}|${translatekorTo}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      tokorText.value = data.responseData.translatedText;
      data.matches.forEach((data) => {
        if (data.id == 0) {
          tokorText.value = data.translation;
          console.log(data);
        }
      });
      tokorText.setAttribute("placeholder", "Translation");
    });
});
//Korean end

  }, []);



  return (
    <div>
      <h1 className="title">Prayer Points</h1>
      <h2 className="subtitle">Edit Prayerpoints</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updatePrayerpoint}> 
        

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
                <button type="submit" className="button is-success">
                    Update
                  </button>
                  <NavLink to={"/prayerpoints"} className="button is-success ml-5">
               Cancel
            </NavLink>

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

export default FormEditPoints;
