import { authReducer } from "./Auth/Reducer";

import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import customerProductReducer from "./Product/Reducers";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
