import { Grid } from "@material-ui/core";
import React from "react";
import "./style.scss";
import { useStyles } from "./styles";
const Home = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className="home">
      <div className={classes.textName}>
        Bonjour,
        <br />
        Dr <b>Philippe Dubois</b>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        className="bannerHome"
      >
        <div className={classes.textNumber}>01</div>
        <div className={classes.textTitle}>
          Nouvelle <br />
          consultation
        </div>
      </Grid>
      <div className={classes.list_message}>
        <div className={classes.titleListMess}>Nouveaux messages</div>
      </div>
    </Grid>
  );
};

export default Home;
