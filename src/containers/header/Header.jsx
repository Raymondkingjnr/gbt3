import React from "react";
import "./header.css";
import Group from "../../assets/Group 81.png";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <div className="gbt3__header section__padding" id="home">
      <div className="gtb3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gbt3__header-content_input">
          <input type="email" placeholder="Your emaill Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gbt3__header-content__people">
          <img src={Group} alt="grop" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className="gbt3__header-image">
          <img src={ai} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
