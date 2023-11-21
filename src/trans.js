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
