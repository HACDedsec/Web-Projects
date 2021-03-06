import React from "react";
import "./menuitem.style.scss";

const Menuitem = ({ title, imageUrl, size }) => (
  <div className={`${size} menuitem`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default Menuitem;
