import axios from "axios";
import { BASEURL, MATERIALS } from "../../resources/APIEndPoints";

export const onGetMaterials = () => {
  return async (dispatch) => {
    const url = BASEURL + MATERIALS;
    await axios
      .get(url)
      .then((res) => {
        console.log(res.res);
        dispatch(onGetMaterialsSuccess(res));
      })
      .catch((error) => {
        // console.log(error)
      });
  };
};
export const onGetMaterialsSuccess = (data) => {
  return {
    type: "ON_GETMATERIALS_LIST_SUCCESS",
    payload: data,
  };
};
