import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducer.js";
import { likeReducer } from "./reducers/likeReducer.js";
import {
  getProductsReducer,
  getProducts2Reducer,
  getProductDetailsReducer,
  updeproductReducer,
} from "./reducers/productReducer.js";

import {
  userLoginReducer,
  userRegisterReducer,
  allUsersReducer,
  deleteuserReducer,
} from "./reducers/userReducers.js";

import {
  allOrdersReducer,
  myOrdersReducer,
  updateorderReducer,
  orderdetailReducer,
} from "./reducers/orderReducer.js";

const reducer = combineReducers({
  cart: cartReducer,
  like: likeReducer,
  getProducts: getProductsReducer,
  getProducts2: getProducts2Reducer,
  updeproductReducer: updeproductReducer,
  updateorderReducer: updateorderReducer,
  getorderDetails: orderdetailReducer,
  getProductDetails: getProductDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  allUsers: allUsersReducer,
  delete: deleteuserReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const likeItemsInLocalStorage = localStorage.getItem("like")
  ? JSON.parse(localStorage.getItem("like"))
  : [];

const userInLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  like: {
    likeItems: likeItemsInLocalStorage,
  },
  userLogin: {
    userInfo: userInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
