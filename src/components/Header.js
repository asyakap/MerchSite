import React from "react";
import mannequinsImage from "./../img/fancymannequins.jpeg";

function Header() {
  return (
    <React.Fragment>
      <h1>Department Store</h1>
      <img src={mannequinsImage} alt="Five mannequins with different white design details" />
    </React.Fragment>
  );
}

export default Header;