const initialState = {
  featuredList: {},
  error_msg: null,
  success_msg: null,
  loading: true,
  isSuccess: false,
};

const featuredReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_GETFEATURED_LIST_SUCCESS": {
      return {
        ...state,
        featuredList: action.payload,
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
export default featuredReducer;
