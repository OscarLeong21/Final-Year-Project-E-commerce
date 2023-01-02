import * as actionTypes from "../constants/productConstants.js";
import axios from "axios";

export const getProducts =
  (keyword = "", currentPage = 1, price = [0, 2000], category) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

      let link = `/api/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

      if (category) {
        link = `/api/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getProducts2 =
  (price = [0, 2000], category) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCTS2_REQUEST });

      let link = `/api/products/2?price[gte]=${price[0]}&price[lte]=${price[1]}`;

      if (category) {
        link = `/api/products/2?price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: actionTypes.GET_PRODUCTS2_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCTS2_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};

// ADMIN GET ALL PRODUCTS
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADMIN_GET_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/products/admin/products");

    dispatch({
      type: actionTypes.ADMIN_GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADMIN_GET_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// ADMIN DELETE PRODUCT
export const deleteAdminProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADMIN_DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/products/admin/product/${id}`);

    dispatch({
      type: actionTypes.ADMIN_DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADMIN_DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
