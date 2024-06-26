import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import LocalHospital from "@material-ui/icons/LocalHospital";
import CalendarToday from "@material-ui/icons/CalendarToday";
import AccountCircle from "@material-ui/icons/AccountCircle";
import WbIncandescent from "@material-ui/icons/WbIncandescent";
import ThumbDown from "@material-ui/icons/ThumbDown";
import DiagnosisTable from "../diagnosis/DiagnosisTable";
import RecommendationsTable from "../recommendations/RecommendationsTable";
import ComplaintsTable from "../complaints/ComplaintsTable";
// import Home from "../home/Home";
// //react-dom-router
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
// } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontSize: 10,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#34495E",
    color: "white",
    onMouseOver: "blue",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundColor: "#0097a7",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Victoria Falls Mascot
          </Typography>
          <Typography variant="contained" noWrap align="right">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<AccountCircle />}
            >
              Login
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Mascot Dashboard", "Diagnosis Responses"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <HomeIcon />
                ) : (
                  <LocalHospital DiagnosisTable />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Recommendations", "Complaints"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <WbIncandescent RecommendationsTable />
                ) : (
                  <ThumbDown ComplaintsTable />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Calendar", "Register/Login"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <CalendarToday /> : <AccountCircle />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph></Typography>
        <Typography variant="h5" noWrap>
          Self-Diagnosis Results
        </Typography>
        <DiagnosisTable />
        <br />
        <Typography variant="h5" noWrap>
          Recommendations
        </Typography>
        <RecommendationsTable />
        <br />
        <Typography variant="h5" noWrap>
          Complaints
        </Typography>
        <ComplaintsTable />
        <Typography paragraph>{/* Something goes here */}</Typography>
      </main>
    </div>
  );
}
