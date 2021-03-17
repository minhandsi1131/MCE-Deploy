import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../styles/colors";

export const useStyles = makeStyles({
  root: {
    backgroundColor: colors.aquamarine,
    borderRadius: 40,
    border: "none",
    boxShadow: "rgba(0, 198, 172, 0.35)",
  },
  label: {
    fontSize: 13,
    color: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
    paddingRight: 30,
    paddingLeft: 30,
    fontWeight: "bold",
  },
});
