import React from "react";
import { google, dropbox, atlassian, shopify, slack } from "./imports";
import "./brand.css";
function Brand() {
  return (
    <div className="gbt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlssian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
