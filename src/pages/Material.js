import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ClippedDrawer from "../components/reusable/Sidebar";
import { addToCart } from "../redux/Cart/cartAction";
import { onGetColors } from "../redux/Color/colorAction";
import { onGetMaterials } from "../redux/Material/materialAction";
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
  price: {
    marginLeft: theme.spacing(-5),
    color: "#793E53",
  },
}));

function Material(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetTags());
    dispatch(onGetMaterials());
    dispatch(onGetColors());
  }, []);
  const allList = useSelector((state) => {
    return state.tags;
  });
  const materialList = useSelector((state) => {
    return state.materials;
  });
  const colorsList = useSelector((state) => {
    return state.colors;
  });
  const { loading, tags } = allList;
  const { loading2, materials } = materialList;
  const materialsbyidfilter = materials?.data?.material
    ?.filter((e) => props.location.pathname.includes(e.name))
    .map((el) => el.id);
  const materialnamefilter = materials?.data?.material
    ?.filter((e) => props.location.pathname.includes(e.name))
    .map((el) => el.name);
  const finalmaterials = tags?.data?.products?.filter((data) =>
    materialsbyidfilter?.includes(data.materialId)
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
                  sm={12}
                  md={4}
                  lg={4}
                >
                  <div className="image">
                    <img className="image__img" src={el.image}></img>
                    <div className="image__overlay">
                      <p
                        onClick={() => {
                          props.addToCartHandler({ el: el });
                        }}
                      >
                        Add to cart
                      </p>
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
                          <span className="materialname">
                            {materialnamefilter}
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
              </>
            ))
          ) : (
            <p>
              No products found for {props.location.pathname.split("/")}{" "}
              material
            </p>
          )}
        </Grid>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Material);
