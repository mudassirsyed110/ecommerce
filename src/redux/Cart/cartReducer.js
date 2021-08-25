const initialState = {
  cartData: [],
};
export default function cartItems(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { cartData: action.data }];
    default:
      return state;
  }
}
