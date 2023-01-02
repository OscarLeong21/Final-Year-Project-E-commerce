import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ADMIN_ALL_ORDERS_REQUEST,
  ADMIN_ALL_ORDERS_SUCCESS,
  ADMIN_ALL_ORDERS_FAIL,
  ADMIN_DELETE_ORDER_REQUEST,
  ADMIN_DELETE_ORDER_SUCCESS,
  ADMIN_DELETE_ORDER_FAIL,
  ADMIN_ORDER_DETAILS_REQUEST,
  ADMIN_ORDER_DETAILS_SUCCESS,
  ADMIN_ORDER_DETAILS_FAIL,
} from "../constants/orderConstants";

import axios from "axios";

// Create Order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/order/new", order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });

    const { data } = await axios.get("/api/orders/me");

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ADMIN get all orders
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ALL_ORDERS_REQUEST });

    const { data } = await axios.get("/api/admin/orders");

    dispatch({ type: ADMIN_ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ADMIN_ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// ADMIN delete order
export const deleteAdminOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/admin/order/${id}`);

    dispatch({ type: ADMIN_DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ADMIN get order detail
export const getOrderDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/order/${id}`);

    dispatch({ type: ADMIN_ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ADMIN_ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
