import React, { Component } from "react";
import "./style.css";
class Navmenu extends Component {
  constructor(props) {
    super(props);
    this.navdrop1 = React.createRef();
    this.navdrop2 = React.createRef();
    this.navdrop3 = React.createRef();
    this.navdrop4 = React.createRef();
    this.navdrop5 = React.createRef();
    this.navdrop6 = React.createRef();
    this.navdrop7 = React.createRef();
    this.navdrop8 = React.createRef();
    this.categoryMain = React.createRef();
  }
  state = {
    drop: false,
    main: "Electronics",
  };

  targeter = (e) => {
    this.setState({
      main: e.target.innerText,
    });
    if (e.target != this.categoryMain.current.firstElementChild) {
      console.log(this.state.main);
      this.categoryMain.current.childNodes.forEach((child) => {
        child.style.fontSize = "12px";
        child.style.fontWeight = "500";
        child.style.backgroundColor = "#fffbe2";
      });
      e.target.style.cssText =
        "background-color:white; font-size:12px; font-weight:bold";
    } else {
      this.categoryMain.current.childNodes.forEach((child) => {
        child.style.fontSize = "12px";
        child.style.fontWeight = "500";
        child.style.backgroundColor = "#fffbe2";
      });
      e.target.style.cssText =
        "background-color:white; font-size:12px; font-weight:bold";
    }
  };
  render() {
    return (
      <div id="Nav-container">
        <div id="Nav-content">
          <div
            id="Nav-main"
            onMouseEnter={() => {
              this.navdrop8.current.style.display = "grid";
              document.querySelector("#bg").style.display = "block";
            }}
            onMouseLeave={() => {
              this.navdrop8.current.style.display = "none";
              document.querySelector("#bg").style.display = "none";
            }}
          >
            <button>
              <span>ALL CATEGORIES</span>
              <button id="caret-icon">
                <i className="fa fa-caret-down fa-1x"></i>
              </button>
            </button>
            <div id="dropdowndrawer" ref={this.navdrop8}>
              <div id="left-floor">
                <button>
                  <span>ALL CATEGORIES</span>
                  <button id="caret-icon" style={{ color: "#b2bbd2" }}>
                    <i className="fa fa-caret-down fa-1x"></i>
                  </button>
                </button>
                <div
                  id="topLevel"
                  onMouseOver={this.targeter}
                  ref={this.categoryMain}
                >
                  <span
                    style={{ backgroundColor: "white", fontWeight: "bold" }}
                  >
                    Electronics
                  </span>
                  <span>Mobiles</span>
                  <span>Beauty & Health</span>
                  <span>Fashion</span>
                  <span>Home & Kitchen</span>
                  <span>Sports & Fitness</span>
                  <span>Baby Products</span>
                  <span>Books & Media</span>
                  <span>Office Products</span>
                </div>
              </div>
              <div id="right-floor">
                <div id="right-floor-upper">
                  <h1>{this.state.main}</h1>
                  <span>
                    View All {this.state.main}{" "}
                    <i class="fa fa-chevron-right"></i>
                  </span>
                </div>
                {this.state.main == "Electronics" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Televisions</span>
                      <span>Laptops</span>
                      <span>Cameras</span>
                      <span>Audio</span>
                      <span>IT Essentials</span>
                      <span>Video Games</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>Samsung</span>
                      <span>LG</span>
                      <span>Jac</span>
                      <span>Lenovo</span>
                      <span>HP</span>
                      <span>Dell</span>
                      <span>Apple</span>
                      <span>Toshiba</span>
                      <span>Sony</span>
                    </section>
                  </div>
                ) : this.state.main == "Mobiles" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Shop all</span>
                      <span>Budget Mobiles</span>
                      <span>Premium Mobiles</span>
                      <span>Big Size Mobiles</span>
                      <span>Big Battery Mobiles</span>
                      <span>Tablets</span>
                      <span>Mobiles Accessories</span>
                      <span>Powerbanks</span>
                      <span>Chargers</span>
                      <span>Wearable Devices</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>Samsung</span>
                      <span>Huawei</span>
                      <span>Honor</span>
                      <span>Apple</span>
                      <span>Xiaomi</span>
                      <span>infinix</span>
                      <span>Oppo</span>
                      <span>Sony</span>
                      <span>Lenovo</span>
                    </section>
                  </div>
                ) : this.state.main == "Beauty & Health" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Fragrance</span>
                      <span>Makeup</span>
                      <span>Hair care</span>
                      <span>Skin Care</span>
                      <span>Personal Care</span>
                      <span>Men's Grooming</span>
                      <span>Health Care Products</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>essence</span>
                      <span>caTRIce</span>
                      <span>MAYBELLINE NEW YORK</span>
                      <span>YOLO</span>
                      <span>pupa</span>
                      <span>Calvin Klein</span>
                      <span>Golden Rose</span>
                      <span>GARNIER</span>
                      <span>L'Oreal Paris</span>
                    </section>
                  </div>
                ) : this.state.main == "Fashion" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Women's Fashion</span>
                      <span>Men's Fashion</span>
                      <span>Watches</span>
                      <span>Fashion Accessories</span>
                      <span>Eyewear</span>
                      <span>Girls' Fashion</span>
                      <span>Boys' Fashion</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>Ray-Ban</span>
                      <span>Casio</span>
                      <span>Seiko</span>
                      <span>adidas</span>
                      <span>Nike</span>
                      <span>Ravin</span>
                      <span>basix</span>
                      <span>Fossil</span>
                      <span>Citizen</span>
                    </section>
                  </div>
                ) : this.state.main == "Home & Kitchen" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Bedding</span>
                      <span>Bath</span>
                      <span>Home Decor</span>
                      <span>Kitchen & Dining</span>
                      <span>Kitchen & Home Appliances</span>
                      <span>Furniture</span>
                      <span>Home Storage & Organisation</span>
                      <span>Tools & Home Improvment</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>Toshiba</span>
                      <span>Tornado</span>
                      <span>BLACK+DECKER</span>
                      <span>Mienta</span>
                      <span>Luminarc</span>
                      <span>Tefal</span>
                      <span>Lock & Lock</span>
                      <span>sisterma</span>
                      <span>Ariika</span>
                    </section>
                  </div>
                ) : this.state.main == "Sports & Fitness" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Strength Equipment</span>
                      <span>Team Sports</span>
                      <span>Swimming & Water Sports</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>Body Sculpture</span>
                      <span>TYR</span>
                    </section>
                  </div>
                ) : this.state.main == "Baby Products" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Strollers, Prams & Accessories</span>
                      <span>Car Seats</span>
                      <span>Feeding</span>
                      <span>Bathing & Skin Care</span>
                      <span>Diapering</span>
                      <span>Baby & Toddler Toys</span>
                      <span>Toys & Games</span>
                    </section>
                    <section>
                      <strong>Top Brands</strong>
                      <span>Chicco</span>
                      <span>Pampers</span>
                      <span>Philips Avent</span>
                      <span>Baby Joy</span>
                      <span>Johnson's</span>
                      <span>LOVI</span>
                      <span>Dr.Brown's</span>
                      <span>sanosan</span>
                      <span>Canpol Babies</span>
                    </section>
                  </div>
                ) : this.state.main == "Books & Media" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Bussiness & Finance</span>
                      <span>Children's Books</span>
                      <span>English Language Teaching</span>
                      <span>Health & Personal Development</span>
                      <span>Reference</span>
                    </section>
                    <section></section>
                  </div>
                ) : this.state.main == "Office Products" ? (
                  <div id="subLevel">
                    <section>
                      <strong>Most Popular</strong>
                      <span>Printers</span>
                      <span>Printer Accessories</span>
                      <span>Printing Paper</span>
                      <span>Stationery</span>
                      <span>Writing & Correction Supplies</span>
                      <span>Education & Crafts</span>
                    </section>
                    <section></section>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div id="Nav-mini">
            <ul>
              <li
                onMouseEnter={() => {
                  this.navdrop1.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop1.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>Electronics</span>
                <div id="category-focusMenu" ref={this.navdrop1}>
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Mobiles & Accessories</span>
                        </li>

                        <li>
                          <span>Computer and Networking</span>
                        </li>

                        <li>
                          <span>Video Games</span>
                        </li>
                        <li>
                          <span>Televisions</span>
                        </li>
                        <li>
                          <span>Home Appliances</span>
                        </li>
                        <li>
                          <span>Speakers</span>
                        </li>
                        <li>
                          <span>Headphones & Earphones</span>
                        </li>
                        <li>
                          <span>Power Banks</span>
                        </li>
                        <li>
                          <span>Wearable Devices</span>
                        </li>
                        <li>
                          <span>Camera, Photo & Video</span>
                        </li>
                        <li>
                          <span>Tablets</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/apple.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/Samsung-logo.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200907/0010401fa8422cc32223607c431dd684/en_sony.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/bose.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/lenovo-elec.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/huawei_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/oppo-desk.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/noon-elec.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/philips.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200715/d5cef122b53d966c821fed525b962494/en-top-electronics-1.jpg"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200715/d5cef122b53d966c821fed525b962494/en-top-electronics-2.jpg"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => {
                  this.navdrop1.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop1.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>Mobiles</span>
                <div id="category-focusMenu" ref={this.navdrop1}>
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Shop all</span>
                        </li>

                        <li>
                          <span>Budget Mobiles</span>
                        </li>

                        <li>
                          <span>Premium Mobiles</span>
                        </li>
                        <li>
                          <span>Big Size Mobiles</span>
                        </li>
                        <li>
                          <span>Big Battery Mobiles</span>
                        </li>
                        <li>
                          <span>Tablets</span>
                        </li>
                        <li>
                          <span>Mobiles Accessories</span>
                        </li>
                        <li>
                          <span>Wearable Devices</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200915/046c7cdec2c537d4296cb2c73ad7f423/en_samsung-logo.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/huawei_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/xiaomi_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/infinix_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/honor_egy.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/apple_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/oppo_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-09.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-10.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/en_drop-01.png"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20190708/f3ec95cb3d207290fa37fb8a977ac45e/en-top-mobiles_02.jpg"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => {
                  this.navdrop2.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop2.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>FASHION</span>
                <div id="category-focusMenu" ref={this.navdrop2}>
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Women's Fashion</span>
                        </li>

                        <li>
                          <span>Men's Fashion</span>
                        </li>

                        <li>
                          <span>Footwear</span>
                        </li>
                        <li>
                          <span>Watches</span>
                        </li>
                        <li>
                          <span>Jewellery</span>
                        </li>
                        <li>
                          <span>Eyewear</span>
                        </li>
                        <li>
                          <span>Bags & Luggage</span>
                        </li>
                        <li>
                          <span>Women's Handbags</span>
                        </li>
                        <li>
                          <span>Girls' Fashion</span>
                        </li>
                        <li>
                          <span>Boys' Fashion</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/nike.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/adidas.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/reebok.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/ray_ban.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/veromoda-des.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1//tommy-des.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/casio-logo.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/aldo_01.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200705/32120a078cb549faa4f8dedd62a20657/en_calzedonia.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://via.placeholder.com/450/FFFF00/000000"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://via.placeholder.com/450/FFFF00/000000"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => {
                  this.navdrop3.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop3.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>HOME</span>
                <div id="category-focusMenu" ref={this.navdrop3}>
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Bedding</span>
                        </li>

                        <li>
                          <span>Bath</span>
                        </li>

                        <li>
                          <span>Home Decor</span>
                        </li>
                        <li>
                          <span>Kitchen & Dining</span>
                        </li>
                        <li>
                          <span>Home Appliances</span>
                        </li>
                        <li>
                          <span>Tools & Home Improvement</span>
                        </li>
                        <li>
                          <span>Furniture</span>
                        </li>
                        <li>
                          <span>Home Storage & Organisation</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/homes-r-us-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/royalford-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200722/ba5ca195aab72dc345359c55bb1438fc/homebox-desk.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/intex-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/jysx-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/black&decker-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/pan-emirates-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/noon-east-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/prestige-ae.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20191006/cddb066b197299a14715ecc191072b96/en-top-home-1.jpg"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20191006/cddb066b197299a14715ecc191072b96/en-top-home-2.jpg"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => {
                  this.navdrop4.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop4.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>BEAUTY & HEALTH</span>
                <div
                  id="category-focusMenu"
                  ref={this.navdrop4}
                  // style={{ display: `${this.state.drop ? "block" : "none"}` }}
                >
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Fragrance</span>
                        </li>

                        <li>
                          <span>Makeup</span>
                        </li>

                        <li>
                          <span>Hair Care</span>
                        </li>
                        <li>
                          <span>Skin Care</span>
                        </li>
                        <li>
                          <span>Personal Care</span>
                        </li>
                        <li>
                          <span>Tools & Accessories</span>
                        </li>
                        <li>
                          <span>Health & Nutrition</span>
                        </li>
                        <li>
                          <span>Men's Grooming</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Loreal.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Vichy.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Gucci.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Dolce-gabbana.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Bourjois.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Kerastase.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Erborian.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Clinique.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200910/f1b81d1fbbafebd105ac08ef38643fea/en_nav-Niya.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200826/755ab90dfd7c4ea28741000fcfcd56b7/en_top-beauty-1.png"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200826/755ab90dfd7c4ea28741000fcfcd56b7/en_top-beauty-2.png"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => {
                  this.navdrop5.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop5.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>BABY</span>
                <div
                  id="category-focusMenu"
                  ref={this.navdrop5}
                  // style={{ display: `${this.state.drop ? "block" : "none"}` }}
                >
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Kids Toys</span>
                        </li>

                        <li>
                          <span>Baby Transport</span>
                        </li>

                        <li>
                          <span>Nursing & Feeding</span>
                        </li>
                        <li>
                          <span>Bathing & Baby Care</span>
                        </li>
                        <li>
                          <span>Diapering</span>
                        </li>
                        <li>
                          <span>Baby Clothing & Shoes</span>
                        </li>
                        <li>
                          <span>Baby & Toddler Toys</span>
                        </li>
                        <li>
                          <span>Parenting Books</span>
                        </li>
                        <li>
                          <span>Kids' Fasion</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/babyjoy.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/pampers.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/pigeon-desk.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/chicco.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/Intex_logo.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/lego-toys.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://k.nooncdn.com/rn/brands_v1/tommee_tippee.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/lol-toys.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/rn/brands_v1/kidkraft-toys.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200805/e4af156d96790b0fa74c1b604fca3cf6/en_top-baby-01.png"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200805/e4af156d96790b0fa74c1b604fca3cf6/en_top-baby-02.png"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => {
                  this.navdrop6.current.style.display = "block";
                  document.querySelector("#bg").style.display = "block";
                }}
                onMouseLeave={() => {
                  this.navdrop6.current.style.display = "none";
                  document.querySelector("#bg").style.display = "none";
                }}
              >
                <span>SUPERMARKET</span>
                <div
                  id="category-focusMenu"
                  ref={this.navdrop6}
                  // style={{ display: `${this.state.drop ? "block" : "none"}` }}
                >
                  <div id="category-wrapper">
                    <div id="categories-Col">
                      <strong>CATEGORIES</strong>
                      <ul>
                        <li>
                          <span>Canned,Dry & Packaged Food</span>
                        </li>

                        <li>
                          <span>Beverages</span>
                        </li>

                        <li>
                          <span>Home, Care & Cleaning</span>
                        </li>
                        <li>
                          <span>Snack Food</span>
                        </li>
                        <li>
                          <span>Breakfast Food</span>
                        </li>
                        <li>
                          <span>Baby Food</span>
                        </li>
                        <li>
                          <span>Candy & Chocolate</span>
                        </li>
                        <li>
                          <span>Pet Supplies</span>
                        </li>
                      </ul>
                    </div>
                    <div id="brands-Col">
                      <strong>TOP BRANDS</strong>
                      <div id="brands-content">
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-21.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-22.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-23.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-24.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-25.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-26.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-27.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-28.png "
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                        <a href="#" id="brand-col-img-a">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/drop-brand-29.png"
                            alt="brand"
                            id="brand-col-img"
                          />
                        </a>
                      </div>
                    </div>
                    <div id="banners-Col">
                      <div id="banners-content">
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/en_drop-06.png"
                            alt="banner"
                            id="banner-img-1"
                          />
                        </span>
                        <span id="banner">
                          <img
                            src="https://a.nooncdn.com/cms/pages/20200115/3335bf024f3b65b7be35bab3ce2bf882/en_drop-07.png"
                            alt="banner"
                            id="banner-img-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span style={{ color: "rgb(239, 83, 80)" }}>DEALS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Navmenu;
