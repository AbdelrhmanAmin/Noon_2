//https://k.nooncdn.com/s/app/2019/noon-bigalog/948ce9cf942c2f93474fb11864256b39d4000acf/static/images/noon_logo_black_english.svg
import React, { useRef, useState, useEffect } from "react";

function Search(props) {
  const acc = useRef(null);

  const clicker = () => {
    acc.current.style.display == "block"
      ? (acc.current.style.display = "none")
      : (acc.current.style.display = "block");
    document.querySelector(".bg").style.display == "block"
      ? (document.querySelector(".bg").style.display = "none")
      : (document.querySelector(".bg").style.display = "block");
  };
  useEffect(() => {
    window.addEventListener(
      "click",
      function (e) {
        if (document.getElementById("acc").contains(e.target)) {
          console.log(e.target);
        } else {
          acc.current.style.display = "none";
          document.querySelector(".bg").style.display = "none";
        }
      },
      []
    );
  });
  return (
    <div id="support-wrapper">
      <div id="support-left">
        <img src="https://k.nooncdn.com/s/app/2019/noon-bigalog/948ce9cf942c2f93474fb11864256b39d4000acf/static/images/noon_logo_black_english.svg" />
      </div>
      <div id="input-container">
        <input
          type="text"
          placeholder="what are you looking for ?"
          id="searchInput"
        />

        <i className="fa fa-search fa-1x"></i>
      </div>
      <ul id="support-right">
        <li id="acc">
          <span onClick={clicker}>
            <p>Hala Abdelrhman</p>
            <strong>My Account</strong>
          </span>
          <button id="caret-icon">
            <i className="fa fa-caret-down"></i>
          </button>
          <div id="dropDownCtr" ref={acc}>
            <ul>
              <li>
                <i class="fa fa-clipboard"></i> Orders
              </li>
              <li>
                <i class="fa fa-comment"></i> Addresses
              </li>
              <li>
                <i class="fa fa-credit-card"></i> Payment
              </li>
              <li>
                <i class="fa fa-bitcoin"></i> noon Credits
              </li>
              <li>
                <i class="fa fa-undo"></i> Returns
              </li>
              <li>
                <i class="fa fa-wrench"></i> Claims
              </li>
              <li>
                <i class="fa fa-sliders"></i> Preferences
              </li>
              <li>
                <i class="fa fa-user"></i> Profile
              </li>
            </ul>
            <span>Sign Out</span>
          </div>
        </li>
        <li id="cart">
          <span>Cart</span>
          <i className="fa fa-shopping-cart fa-2x"></i>
        </li>
      </ul>
    </div>
  );
}
export default Search;
