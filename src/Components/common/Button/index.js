import React from "react";
import { useStyles } from "./styles";
import "./style.scss";
const Button = ({ label, containerStyle, onClick }) => {
  const classes = useStyles();
  return (
    <div className="Button">
      <button
        onClick={() => onClick()}
        style={containerStyle}
        className={classes.root}
      >
        <div className={classes.label}>{label}</div>
      </button>
    </div>
  );
};

export default Button;
