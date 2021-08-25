const initialState = {
  colors: {},
  error_msg: null,
  success_msg: null,
  loading: true,
  isSuccess: false,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_GETCOLORS_LIST_SUCCESS": {
      return {
        ...state,
        colors: action.payload,
        loading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default colorReducer;
