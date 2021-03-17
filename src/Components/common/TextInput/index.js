import React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import colors from "../../../styles/colors";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  label: {
    fontSize: 15,
    fontWeight: 600,
    color: colors.white,
    marginBottom: 10,
  },
}));
const TextInput = ({ label, formikId, isPassword, containerStyle }) => {
  const classes = useStyles();
  return (
    <div style={containerStyle}>
      <div className={classes.label}>{label}</div>
      <BootstrapInput
        type={isPassword ? "password" : "input"}
        className={classes.margin}
        id="custom-css-standard-input"
        label={label}
      />
    </div>
  );
};

export default TextInput;
