import cartReducer from "@slices/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import compareReducer from "@slices/compareSlice";
import customerReducer from "@slices/customerSlice";
import wishlistReducer from "@slices/wishlistSlice";
import cardReducer from '@slices/cardSlice';
export const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  wishlist: wishlistReducer,
  customer: customerReducer,
  compareList: compareReducer,
  cardReducer: cardReducer  
});
