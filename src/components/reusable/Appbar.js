import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartIcon from "../../assets/shoppingcart.png";
import { NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { addToCart } from "../../redux/Cart/cartAction";

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
  end: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  count: {
    fontStyle: "normal",
    fontweight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    textAlign: "center",
    color: "#000000",
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  console.log(props.data ? props.data.length : "");
  const cartLength = useSelector((state) => {
    return state.cartItems;
  });
  console.log(cartLength);

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
          <div className={classes.end}>
            <img src={CartIcon} alt="" width="100%" />
            <h1 className={classes.count} style={{ margin: "0" }}>
              {props.data ? props.data.length : ""}
            </h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
