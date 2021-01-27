import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <AppBar maxWidth="xs" color="secondary">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h2">
            Victoria Falls Mascot Admin Panel
          </Typography>
          <Button variant="small" color="secondary">
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
