import React from "react";
import data from "../data";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Principios de Bruce Tognazzini</h1>

      {/* iterate each data and show the images in a list */}
      <div className="home__container">
        {/* for i in data:  */}
        {data.map((item, index) => (
          <Link to={`/detail/${item.id}`} key={index}>
            <div
              key={index}
              className="home__item"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
