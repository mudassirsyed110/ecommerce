import { Grid, makeStyles } from "@material-ui/core";
import { onGetTags } from "../redux/Tags/tagAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { onGetColors } from "../redux/Color/colorAction";
import ClippedDrawer from "../components/reusable/Sidebar";

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

function Color(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetTags());
    dispatch(onGetColors());
  }, []);
  const allList = useSelector((state) => {
    return state.tags;
  });
  const colorsList = useSelector((state) => {
    return state.colors;
  });
  const { loading, tags } = allList;
  const { loading2, colors } = colorsList;
  const materialsbyidfilter = colors?.data?.colors
    ?.filter((e) => props.location.pathname.includes(e.name))
    .map((el) => el.id);
  const finalmaterials = tags?.data?.products?.filter((data) =>
    materialsbyidfilter?.includes(data.colorId)
  );
  const materialcolorfilter = colors?.data?.colors
    ?.filter((e) => props.location.pathname.includes(e.name))
    .map((el) => el.name);
  return (
    <>
      <ClippedDrawer />
      <div className="papergrid main-content">
        <Grid container className={classes.root} spacing={3}>
          {finalmaterials?.length > 0 ? (
            finalmaterials?.map((el) => (
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
                    lg={6}
                    style={{ padding: "1.5rem 0 0 0.7rem" }}
                  >
                    <span className="name">{el.name}</span>
                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={2}>
                        <span className="materialname">
                          {materialcolorfilter}
                        </span>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={12}
                      style={{ paddingTop: "1.1rem", paddingBottom: "2rem" }}
                    >
                      <span className="price">INR {el.price}.00</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))
          ) : (
            <p>
              No products found for {props.location.pathname.split("/")} color
            </p>
          )}
        </Grid>
      </div>
    </>
  );
}

export default Color;
