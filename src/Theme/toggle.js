import React from "react";
import { func, string } from "prop-types";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const Toggle = ({ theme, toggleTheme, sideMenu }) => {
  if (sideMenu) {
    return (
      <div className="theme_toggle">
        {theme === "light" ? (
          <ListItem button key="theme">
            <ListItemIcon>
              <Brightness4Icon onClick={toggleTheme} />
            </ListItemIcon>
            <ListItemText primary="Toggle Theme" onClick={toggleTheme} />
          </ListItem>
        ) : (
          <ListItem button key="theme">
            <ListItemIcon>
              <Brightness7Icon onClick={toggleTheme} />
            </ListItemIcon>
            <ListItemText primary="Toggle Theme" onClick={toggleTheme} />
          </ListItem>
        )}
      </div>
    );
  } else {
    return (
      <div className="theme_toggle">
        {theme === "light" ? (
          <Brightness4Icon onClick={toggleTheme} />
        ) : (
          <Brightness7Icon onClick={toggleTheme} />
        )}
      </div>
    );
  }
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
