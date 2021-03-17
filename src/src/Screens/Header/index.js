import React from "react";
import { logo, logo_color } from "../../images";
import "./style.scss";
const Header = (props) => {
  console.log(props.authUser, "authUser");

  return (
    <div className={props.authUser ? "headerUser" : "header"}>
      <img
        src={props.authUser ? logo_color : logo}
        style={{ width: 99, height: 21 }}
        alt=""
      />
    </div>
  );
};

export default Header;
