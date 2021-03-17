import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useNavigate } from "react-router";

import IconHome from "../../../images/svg/IconHome";
import { IconLibrary } from "../../../images";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    bottom: 0,
    borderRadius: "20px 20px 0 0",
    boxShadow:
      "0 -4px 15px 0 rgba(189, 191, 208, 0.5), 0 -2px 8px 0 rgba(189, 191, 208, 0.2)",
  },
});

export default function BottomMenu() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = React.useState("Home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    navigate("/dashboard/" + newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label=""
        value="Home"
        icon={<IconHome isActive={value === "Home" && true} />}
      />
      <BottomNavigationAction
        label=""
        value="MessageList"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label=""
        value="Inbox"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label=""
        value="Library"
        icon={<IconLibrary isActive={value === "Library" && true} />}
      />
    </BottomNavigation>
  );
}
