import "./App.css";
import React, { useState } from "react";

function App() {
  let plastic = "?style=plastic&logo=";
  let flat = "?style=flat&logo=";
  let flatSquare = "?style=flat-square&logo=";
  let badge = "?style=for-the-badge&logo=";
  let social = "?style=social&logo=";
  let [changeStyle, changeStyleEdit] = useState(badge);
  let [logoName, logoNameEdit] = useState("react");
  let [bgColor, bgColorEdit] = useState("black");
  let [logoColor, logoColorEdit] = useState("skyblue");
  let genLink = `https://img.shields.io/badge/${logoName}-${bgColor}.svg${changeStyle}${logoName}&logoColor=${logoColor}`;
  let genPlasticLink = `https://img.shields.io/badge/${logoName}-${bgColor}.svg${plastic}${logoName}&logoColor=${logoColor}`;
  let genFlatLink = `https://img.shields.io/badge/${logoName}-${bgColor}.svg${flat}${logoName}&logoColor=${logoColor}`;
  let genFlatSquareLink = `https://img.shields.io/badge/${logoName}-${bgColor}.svg${flatSquare}${logoName}&logoColor=${logoColor}`;
  let genBadgeLink = `https://img.shields.io/badge/${logoName}-${bgColor}.svg${badge}${logoName}&logoColor=${logoColor}`;
  let genSocialLink = `https://img.shields.io/badge/${logoName}-${bgColor}.svg${social}${logoName}&logoColor=${logoColor}`;
  return (
    <body>
      <div className="main">
        <h1>Easy Shield IO</h1>
        <div className="logo-img-border">
          <a href={genLink} target="_blank">
            <img id="main-logo-img" src={genLink} />
          </a>
        </div>
        <div className="style-list-img">
          <button
            className="btn-copy"
            onClick={() => {
              changeStyleEdit(plastic);
            }}
          >
            <img className="logo-img" src={genPlasticLink} alt="" />
            Plastic Style
          </button>
          <button
            className="btn-copy"
            onClick={() => {
              changeStyleEdit(flat);
            }}
          >
            <img className="logo-img" src={genFlatLink} alt="" />
            Flat
          </button>
          <button
            className="btn-copy"
            onClick={() => {
              changeStyleEdit(flatSquare);
            }}
          >
            <img className="logo-img" src={genFlatSquareLink} alt="" />
            Flat Square Style
          </button>
          <button
            className="btn-copy"
            onClick={() => {
              changeStyleEdit(badge);
            }}
          >
            <img className="logo-img" src={genBadgeLink} alt="" />
            Badge Style
          </button>
          <button
            className="btn-copy"
            onClick={() => {
              changeStyleEdit(social);
            }}
          >
            <img className="logo-img" src={genSocialLink} alt="" />
            Social Style
          </button>
        </div>
        <form autocomplete="off">
          <div className="input-box">
            <div className="input-text-box">
              <input
                id="logo-name"
                className="input-text"
                type="text"
                placeholder="로고 이미지 이름을 입력하세요"
                spellCheck="false"
                required
              />
              <input
                id="bg-color"
                className="input-text"
                type="text"
                placeholder="배경 색상 코드를 입력하세요 (CSS)"
                spellCheck="false"
                required
              />
              <input
                id="logo-color"
                className="input-text"
                type="text"
                placeholder="로고 이미지 색상을 입력하세요 (CSS)"
                spellCheck="false"
                required
              />
            </div>

            <div className="btn-box">
              <button
                type="button"
                className="btn-copy"
                onClick={() => {
                  logoNameEdit(document.querySelector("#logo-name").value);
                  bgColorEdit(document.querySelector("#bg-color").value);
                  logoColorEdit(document.querySelector("#logo-color").value);
                }}
              >
                적용
              </button>
              <button
                type="button"
                className="btn-copy"
                onClick={() => {
                  window.open(genLink, "_blank");
                }}
              >
                새 창에서 보기
              </button>
              <butten type="submit" style={{ display: "none" }}></butten>
            </div>
            <div className="link">
              <a href="https://shields.io/" target="_blank">
                shields.io
              </a>
            </div>
          </div>
        </form>
      </div>
      <script src="/app.js"></script>
    </body>
  );
}

export default App;
