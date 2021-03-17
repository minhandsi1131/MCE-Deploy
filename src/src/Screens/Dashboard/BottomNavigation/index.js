import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useNavigate } from "react-router";

const useStyles = makeStyles({
  root: {},
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
      <BottomNavigationAction label="" value="Home" icon={<RestoreIcon />} />
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
      <BottomNavigationAction label="" value="Library" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
