import { Grid } from "@material-ui/core";
import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { useStyles } from "./styles";
const Home = () => {
  const classes = useStyles();
  const [needExpand, setNeedExpand] = useState(false);

  const expandContentContainer = useRef(null);
  useEffect(() => {
    if (expandContentContainer.current.scrollHeight > 130) {
      setNeedExpand(true);
    } else {
      setNeedExpand(false);
    }
  }, []);
  return (
    <Grid
      container
      direction="column"
      className={`home ${needExpand ? "" : "expand-home"} `}
    >
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
      <div
        className={`list-message ${
          needExpand ? "unexpand_content" : "expand_content"
        }`}
        ref={expandContentContainer}
      >
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
        <div className={classes.titleListMess}>Nouveaux messages</div>
      </div>
      {needExpand && (
        <div className="entries-expand-button-container">
          <div
            className="entries-expand-button"
            type="button"
            onClick={() => setNeedExpand(false)}
          >
            Afficher tous les messages
          </div>
        </div>
      )}
      <Grid container di>
        <Grid></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
