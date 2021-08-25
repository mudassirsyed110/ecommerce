import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    marginRight: "14rem",
    boxShadow: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: "9.2rem",
    border: "none",
  },
  drawerContainer: {
    overflow: "auto",
    margin: "2rem 0 0 2rem",
  },
  content: {
    flexGrow: 1,
    padding: "3rem 0 0 16rem",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <ListItemText primary="Tags" />
            <Link to="/">
              <ListItemText primary="All" />
            </Link>
          </List>
          <List>
            <ListItemText primary="Materials" />
            <Link to="/allMaterials">
              <ListItemText primary="All" />
            </Link>
            <Link to="/cotton">
              <ListItemText primary="Cotton" />
            </Link>
            <Link to="/leather">
              <ListItemText primary="Leather" />
            </Link>
            <Link to="/lycra">
              <ListItemText primary="Lycra" />
            </Link>
            <Link to="/plastic">
              <ListItemText primary="Plastic" />
            </Link>
            <Link to="/polyester">
              <ListItemText primary="Ployester" />
            </Link>
          </List>
          <List>
            <ListItemText primary="Colors" />
            <Link to="/allColors">
              <ListItemText primary="All" />
            </Link>
            <Link to="/black">
              {" "}
              <ListItemText primary="Black" />
            </Link>
            <Link to="/red">
              <ListItemText primary="Red" />
            </Link>
            <Link to="/yellow">
              {" "}
              <ListItemText primary="Yellow" />
            </Link>
            <Link to="/green">
              {" "}
              <ListItemText primary="Green" />
            </Link>
            <Link to="/blue">
              <ListItemText primary="Blue" />
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
