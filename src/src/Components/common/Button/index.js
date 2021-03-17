import React from "react";
import { useStyles } from "./styles";
const Button = ({ label, containerStyle, onClick }) => {
  const classes = useStyles();
  return (
    <button
      onClick={() => onClick()}
      style={containerStyle}
      className={classes.root}
    >
      <div className={classes.label}>{label}</div>
    </button>
  );
};

export default Button;
