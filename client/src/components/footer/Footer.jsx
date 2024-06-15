import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="info">
          <div className="intro">Created by VEDANT PATEL</div>
          <div className="links"> 
            <div className="item">
              <img src="/img/github.png" alt="" className="github"/>
              <a href="https://github.com/vedantcode04">Github</a>
            </div>
            <div className="item">
              <img src="/img/linkedin.png" alt="" />
              <a href="https://linkedin.com/vedantpatel31">Linkedin</a>
            </div>
          </div>
        </div>
        <img src="/img/profile.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
