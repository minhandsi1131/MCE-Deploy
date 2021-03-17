import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/colors";

export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  logo: {
    width: 99,
    height: 21,
    marginTop: 13,
    marginBottom: 55,
    marginLeft: "20%",
  },
  title: {
    fontSize: 35,
    textTransform: "uppercase",
    fontWeight: 600,
    marginBottom: 15,
    color: colors.white,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white,
    marginBottom: 45,
  },
  label: {
    fontSize: 15,
    fontWeight: 600,
    color: colors.white,
  },
  labelNote: {
    fontSize: 13,
    fontWeight: 600,
    color: colors.white,
    marginBottom: 20,
  },
  descriptionBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 12,
  },
});
