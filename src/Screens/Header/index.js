import { Grid } from "@material-ui/core";
import React from "react";
import { avatar, logo, logo_color } from "../../images";
import "./style.scss";
import Avatar from "@material-ui/core/Avatar";

const Header = (props) => {
  console.log(props.authUser, "authUser");

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={props.authUser ? "headerUser" : "header"}
    >
      <img
        src={props.authUser ? logo_color : logo}
        style={{ width: 99, height: 21 }}
        alt=""
      />
      {props.authUser && <Avatar alt="Avatar" src={avatar} />}
    </Grid>
  );
};

export default Header;
