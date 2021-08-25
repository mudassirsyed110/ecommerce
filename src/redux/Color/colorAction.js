import axios from "axios";
import { BASEURL, COLORS } from "../../resources/APIEndPoints";

export const onGetColors = () => {
  return async (dispatch) => {
    const url = BASEURL + COLORS;
    await axios
      .get(url)
      .then((res) => {
        // console.log(res.results)
        dispatch(onGetColorsSuccess(res));
      })
      .catch((error) => {
        // console.log(error)
      });
  };
};
export const onGetColorsSuccess = (data) => {
  return {
    type: "ON_GETCOLORS_LIST_SUCCESS",
    payload: data,
  };
};
