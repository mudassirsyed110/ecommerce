import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClippedDrawer from "../components/reusable/Sidebar";
import { onGetTags } from "../redux/Tags/tagAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: "3rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 150,
    width: "100%",
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: 200,
  },
  paper4: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),

    width: 140,
  },
  textField1: {
    marginLeft: theme.spacing(1),

    width: 140,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
function Tags(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetTags());
  }, []);
  const allList = useSelector((state) => {
    return state.tags;
  });
  const { loading, tags } = allList;
  return (
    <>
      <ClippedDrawer />
      <div className="papergrid main-content">
        <Grid container className={classes.root} spacing={3}>
          {tags?.data?.products?.length > 0 ? (
            tags?.data?.products.map((el) => {
              return (
                <>
                  <Grid
                    className={classes.control}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                  >
                    <div className="image">
                      <img className="image__img" src={el.image}></img>
                      <div className="image__overlay">
                        <p>Add to cart</p>
                      </div>
                    </div>
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        style={{ padding: "1.5rem 0 0 0.7rem" }}
                      >
                        <span className="name">{el.name}</span>
                        <Grid container spacing={5}>
                          <Grid item xs={12} lg={2}>
                            {/* <span className="materialname">{materialnamefilter}</span> */}
                          </Grid>
                          <Grid item xs={12} lg={2}>
                            {/* <span className="materialname">{materialcolorfilter}</span> */}
                          </Grid>
                          <Grid item xs={12} lg={5}></Grid>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                          <span className="price">INR {el.price}.00</span>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} lg={2}></Grid>
                    </Grid>
                  </Grid>
                </>
              );
            })
          ) : (
            <p>No products found </p>
          )}
        </Grid>
      </div>
    </>
  );
}

export default Tags;
