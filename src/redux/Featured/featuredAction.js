import axios from "axios";
import { BASEURL, FEATURED } from "../../resources/APIEndPoints";
export const onGetFeatured = () => {
  return async (dispatch) => {
    const url = BASEURL + FEATURED;
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch(onGetFeaturedSuccess(res));
      })
      .catch((error) => {
        // console.log(error)
      });
  };
};
export const onGetFeaturedSuccess = (data) => {
  return {
    type: "ON_GETFEATURED_LIST_SUCCESS",
    payload: data,
  };
};
