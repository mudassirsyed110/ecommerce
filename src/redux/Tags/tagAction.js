import axios from "axios";
import { BASEURL, PRODUCTS } from "../../resources/APIEndPoints";
export const onGetTags = () => {
  return async (dispatch) => {
    const url = BASEURL + PRODUCTS;
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch(onGetTagsSuccess(res));
      })
      .catch((error) => {
        // console.log(error)
      });
  };
};
export const onGetTagsSuccess = (data) => {
  return {
    type: "ON_GETTAG_LIST_SUCCESS",
    payload: data,
  };
};
