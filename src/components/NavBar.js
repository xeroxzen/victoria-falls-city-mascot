import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <AppBar color="secondary">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            Victoria Falls Mascot Admin Panel
          </Typography>
          <Button variant="small" color="primary">
            Home
          </Button>
          <Button variant="small" color="secondary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
