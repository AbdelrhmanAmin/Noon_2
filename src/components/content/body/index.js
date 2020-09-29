import React, { useState, useEffect, useRef } from "react";

import Card from "../card";
import "./style.css";
function BodyContainer(props) {
  const [display, setDisplay] = useState("GRID");
  const [sorted, setSorted] = useState("Popularity");
  const [page, setPages] = useState("50 Per Page");
  const drop1 = useRef(null);
  const drop2 = useRef(null);

  const displayer = () => {
    if (display == "GRID") {
      setDisplay("ROW");
    }
    if (display == "ROW") {
      setDisplay("GRID");
    }
  };
  const highligher1 = (e) => {
    drop1.current.style.display == "flex"
      ? (drop1.current.style.display = "none")
      : (drop1.current.style.display = "flex");
  };
  const highligher2 = (e) => {
    drop2.current.style.display == "flex"
      ? (drop2.current.style.display = "none")
      : (drop2.current.style.display = "flex");
  };
  useEffect(() => {
    window.addEventListener(
      "click",
      function (e) {
        if (document.querySelector(".btn1").contains(e.target)) {
          if (e.path[2].nodeName == "LABEL") {
            setSorted(e.path[2].innerText);
            console.log(drop1);
            drop1.current.childNodes.forEach((child) => {
              child.childNodes[0].childNodes[0].childNodes[0].checked = false;
              child.childNodes[0].childNodes[1].style.fontSize = "12px";
              child.childNodes[0].childNodes[1].style.fontWeight = "500";
            });

            e.path[1].childNodes[0].checked = true;
            e.path[2].childNodes[1].style.cssText =
              "font-size:13px; font-weight:bold";
          }
        } else {
          drop1.current.style.display = "none";
        }

        if (document.querySelector(".btn2").contains(e.target)) {
          if (e.path[2].nodeName == "LABEL") {
            console.log(e, e.path[1].childNodes[0]);
            setPages(e.path[2].innerText);
            drop2.current.childNodes.forEach((child) => {
              child.childNodes[0].childNodes[0].childNodes[0].checked = false;
              child.childNodes[0].childNodes[1].style.fontSize = "12px";
              child.childNodes[0].childNodes[1].style.fontWeight = "500";
            });
            e.path[1].childNodes[0].checked = true;
            e.path[2].childNodes[1].style.cssText =
              "font-size:13px; font-weight:bold";
          }
        } else {
          drop2.current.style.display = "none";
        }
      },
      []
    );
  });
  return (
    <div id="body-content">
      <div id="top-body">
        <div id="body-left">
          <span>
            20 results found for <strong> Sports, Fitness & Outdoors</strong>
          </span>
        </div>
        <div id="body-right">
          <div id="body-right-container" className="btn1">
            <label>Sort by</label>
            <div id="body-btn-container" onClick={highligher1}>
              <button aria-label="Popularity" id="body-btn">
                <strong>{sorted}</strong> <i className="fa fa-caret-down"></i>
              </button>
            </div>
            <div id="droper" ref={drop1}>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio1" checked />
                    <span class="radio__control"></span>
                  </span>

                  <span
                    class="radio__label"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Popularity
                  </span>
                </label>
              </div>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>

                  <span class="radio__label">Price: High to Low</span>
                </label>
              </div>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>

                  <span class="radio__label">Price: Low to High</span>
                </label>
              </div>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>

                  <span class="radio__label">New Arrivals</span>
                </label>
              </div>
            </div>
          </div>

          <div id="body-right-container" className="btn2">
            <label>DISPLAY</label>
            <div id="body-btn-container" onClick={highligher2}>
              <button aria-label="Popularity" id="body-btn">
                <strong>{page}</strong> <i className="fa fa-caret-down"></i>
              </button>
            </div>
            <div id="droper" ref={drop2} style={{ right: "150px" }}>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio2" checked />
                    <span class="radio__control"></span>
                  </span>

                  <span
                    class="radio__label"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    50 Per Page
                  </span>
                </label>
              </div>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>

                  <span class="radio__label">100 Per Page</span>
                </label>
              </div>
              <div id="d-country">
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>

                  <span class="radio__label">150 Per Page</span>
                </label>
              </div>
            </div>
          </div>

          <div id="body-right-container">
            <label>{display}</label>
            <div id="body-btn-container">
              <button aria-label="Popularity" id="body-btn" onClick={displayer}>
                {display == "GRID" ? (
                  <i className="fa fa-th"></i>
                ) : (
                  <i class="fa fa-list"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="shop-by-category">
        <h1 style={{ textAlign: "center", margin: "40px 0 20px 0" }}>
          Shop by Category
        </h1>
        <ul id="category-list" style={{ cursor: "pointer" }}>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-01.png" />{" "}
          </li>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-02.png" />{" "}
          </li>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-03.png" />{" "}
          </li>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-04.png" />{" "}
          </li>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-05.png" />{" "}
          </li>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-06.png" />{" "}
          </li>
          <li>
            {" "}
            <img src="https://k.nooncdn.com/cms/pages/20200401/754246b96ef52116cc75fb2c4997b8a9/en_mb-category-07.png" />{" "}
          </li>
        </ul>
      </div>
      <div id={display == "GRID" ? "card-grid" : "card-row"}>
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
        <Card display={display} />
      </div>
    </div>
  );
}
export default BodyContainer;
