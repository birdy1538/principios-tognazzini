import React from "react";
import { useParams } from "react-router";
import data from "../data";
import "./Detail.css";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // get data from data.js and filter by id
  const info = data.filter((item) => item.id === id)[0];

  return (
    <div className="detail">
      <h1 className="detail__title">{info.title}</h1>
      <p className="detail__description">{info.description}</p>
      <div className="detail_img_container">
        <img src={info.imageWeb} alt="web" />
        <img src={info.imageMobile} alt="mobile" />
      </div>
      <Link to="/">
        <i class="fas fa-home"></i>
      </Link>
    </div>
  );
}

export default Detail;
