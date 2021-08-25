import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClippedDrawer from "../components/reusable/Sidebar";
import { onGetTags } from "../redux/Tags/tagAction";
import { onGetFeatured } from "../redux/Featured/featuredAction";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  //   price: {
  //     marginLeft: theme.spacing(-5),
  //     color: "#793E53",
  //   },
}));

function Featured(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetTags());
    dispatch(onGetFeatured());
  }, []);
  const allList = useSelector((state) => {
    return state.tags;
  });
  const featuredProducts = useSelector((state) => {
    return state.featured;
  });
  console.log(featuredProducts);
  const { loading, tags } = allList;
  const { loading4, featuredList } = featuredProducts;
  console.log(featuredList);
  const materialsbyidfilter = featuredList?.data?.featured?.map(
    (el) => el.productId
  );

  const finalmaterials = tags?.data?.products?.filter((data) =>
    materialsbyidfilter?.includes(data.id)
  );
  return (
    <>
      <ClippedDrawer />
      <div className="papergrid main-content">
        <Grid container className={classes.root} spacing={3}>
          {finalmaterials?.length > 0 ? (
            finalmaterials?.map((el) => (
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
                    <Grid item xs={12} lg={5}>
                      <span className="name">{el.name}</span>
                      <Grid container spacing={5}>
                        <Grid item xs={12} lg={2}></Grid>
                        <Grid item xs={12} lg={2}></Grid>
                        <Grid item xs={12} lg={5}></Grid>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <span className={classes.price}>INR {el.price}.00</span>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} lg={2}></Grid>
                  </Grid>
                </Grid>
              </>
            ))
          ) : (
            <p>No products found</p>
          )}
        </Grid>
      </div>
    </>
  );
}

export default Featured;
