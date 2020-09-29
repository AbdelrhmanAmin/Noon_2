import React, { useState, useEffect, useRef } from "react";
import "./style.css";
function Bar(props) {
  const ship = useRef(null);
  const clicker = () => {
    ship.current.style.display == "flex"
      ? (ship.current.style.display = "none")
      : (ship.current.style.display = "flex");
    document.querySelector(".bg1").style.display == "block"
      ? (document.querySelector(".bg1").style.display = "none")
      : (document.querySelector(".bg1").style.display = "block");
  };
  useEffect(() => {
    window.addEventListener(
      "click",
      function (e) {
        if (document.getElementById("support-left-2").contains(e.target)) {
          console.log(e.target);
        } else {
          ship.current.style.display = "none";
          document.querySelector(".bg1").style.display = "none";
        }
      },
      []
    );
  });
  return (
    <div id="support-wrapper">
      <div id="support-left">
        <div id="support-left-1">
          <strong>العربية</strong>
        </div>
        <div id="support-left-2" onClick={clicker}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
            id="flag"
          />
          <span>
            Ship to <strong> EGYPT</strong>
          </span>
          <button id="caret-icon">
            <i className="fa fa-caret-down"></i>
          </button>
        </div>
        <div id="dropDownContainer" ref={ship}>
          <div id="d-country">
            <label class="radio">
              <span class="radio__input">
                <input type="radio" name="radio" />
                <span class="radio__control"></span>
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
                id="flag"
              />
              <span class="radio__label">Egypt</span>
            </label>
          </div>
          <div id="d-country">
            <label class="radio">
              <span class="radio__input">
                <input type="radio" name="radio" />
                <span class="radio__control"></span>
              </span>
              <img
                src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png"
                id="flag"
              />
              <span class="radio__label">Saudi Arabia</span>
            </label>
          </div>
          <div id="d-country">
            <label class="radio">
              <span class="radio__input">
                <input type="radio" name="radio" />
                <span class="radio__control"></span>
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png"
                id="flag"
              />
              <span class="radio__label">United Arab Emirates</span>
            </label>
          </div>
        </div>
      </div>

      <div></div>
      <ul id="support-right">
        <li>
          <i className="fa fa-backward"></i>
          FREE & EASY Returns
        </li>
        <li>
          <i className="fa fa-fire"></i> Best Deals
        </li>
      </ul>
    </div>
  );
}
export default Bar;
