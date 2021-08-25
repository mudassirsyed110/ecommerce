const initialState = {
  tags: {},
  error_msg: null,
  success_msg: null,
  loading: true,
  isSuccess: false,
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_GETTAG_LIST_SUCCESS": {
      return {
        ...state,
        tags: action.payload,
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
export default tagReducer;
