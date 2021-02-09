import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export class Header extends Component {
  render() {
    return (
      <div>
        <Typography variant="h6">
          Welcome to Victoria Falls Municipality
        </Typography>
        <Typography variant="subtitle1">
          Something Interesting goes here
        </Typography>
      </div>
    );
  }
}

export default Header;
