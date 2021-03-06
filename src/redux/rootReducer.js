import { combineReducers } from "redux";
import tagsReducer from "./Tags/tagReducer";
import colorReducer from "./Color/colorReducer";
import materialReducer from "./Material/materialReducer";
import featuredReducer from "./Featured/featuredReducer";
import cartItems from "./Cart/cartReducer";

export default combineReducers({
  tags: tagsReducer,
  colors: colorReducer,
  materials: materialReducer,
  featured: featuredReducer,
  cart: cartItems,
});
