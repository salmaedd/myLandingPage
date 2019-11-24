import React from "react";
import facebook from "../icons/navbar/facebook.svg";
import instagram from "../icons/navbar/instagram.png";
import linkedin from "../icons/navbar/linkedin.svg";
import twitter from "../icons/navbar/twitter.svg";
import Snowflake from "../icons/navbar/Snowflake.svg";
import "../../sass/navbar.scss";
import $ from "jquery";

$(".nav-link .text-grey .text-uppercase .ml-5").click(function() {
  $(".nav-item").removeClass("active");
  $(this).addClass("active");
});
function myNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand ml-5 font-weight-bold" href="/Home">
        <img src={Snowflake} alt="Snowflake" style={{ width: "30px" }} />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link text-grey text-uppercase ml-5" href="/Home">
              <i class="fas fa-home"></i>&nbsp; Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-grey text-uppercase ml-5" href="/News">
              <i class="far fa-newspaper"></i>&nbsp; News
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-grey text-uppercase ml-5"
              href="/Contact-us"
            >
              <i class="far fa-envelope"></i>&nbsp; Contact us
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white text-uppercase ml-5"
              href="https://www.instagram.com/"
            >
              <img src={instagram} alt="instagram" style={{ width: "30px" }} />
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link text-white text-uppercase ml-5"
              href="https://www.linkedin.com/"
            >
              <img src={linkedin} alt="linkedin" style={{ width: "30px" }} />
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className=" button btn btn-dark my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default myNavbar;