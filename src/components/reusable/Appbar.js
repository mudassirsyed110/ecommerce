import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartIcon from "../../assets/shoppingcart.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: "#ECECEC",
    height: "60px",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titlehead: {
    flexGrow: 0.05,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#000000",
  },
  title: {
    flexGrow: 1,
    fontWeight: 300,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#000000",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.titlehead}>
            {" "}
            <NavLink exact to="/" activeClassName="active-link">
              All Products{" "}
            </NavLink>
          </Typography>

          <Typography className={classes.title}>
            {" "}
            <NavLink to="/featured" activeClassName="active-link">
              Featured Products{" "}
            </NavLink>
          </Typography>

          <img src={CartIcon} alt="" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
