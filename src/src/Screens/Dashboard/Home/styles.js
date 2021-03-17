import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../styles/colors";

export const useStyles = makeStyles({
  textName: {
    color: colors.charcoal_grey,
    fontSize: 22,
    fontWeight: 600,
  },
  textNumber: {
    color: "white",
    fontSize: 70,
  },
  textTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
    marginLeft: 10,
  },
  titleListMess: {
    color: colors.charcoal_grey,
    fontSize: 16,
    fontWeight: 600,
  },
  list_message: {
    marginTop: 50,
  },
});
