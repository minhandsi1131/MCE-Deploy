import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BottomMenu from "../Screens/Dashboard/BottomNavigation";
import Header from "../Screens/Header";
import { Grid } from "@material-ui/core";
import colors from "../styles/colors";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const PrivateRoutes = ({ Component, ...props }) => {
  const mobilePoint = 540;
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log(windowDimensions);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Header authUser={true} />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems={
          windowDimensions.width <= mobilePoint ? "stretch" : "center"
        }
      >
        <div
          style={{
            backgroundColor: colors.pale_grey,
            borderRadius: 20,
          }}
        >
          <Component {...props} />
          <BottomMenu />
        </div>
      </Grid>
    </div>
  );
};
PrivateRoutes.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
export default PrivateRoutes;
