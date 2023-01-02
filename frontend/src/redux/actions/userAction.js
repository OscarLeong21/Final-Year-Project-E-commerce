import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  ADMIN_ALL_USERS_REQUEST,
  ADMIN_ALL_USERS_SUCCESS,
  ADMIN_ALL_USERS_FAIL,
  ADMIN_DELETE_USER_REQUEST,
  ADMIN_DELETE_USER_SUCCESS,
  ADMIN_DELETE_USER_FAIL,
} from "../constants/userConstant";
import axios from "axios";

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/api/users/login",
      data: { email, password },
      config,
    });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

//Register
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ALL_USERS_REQUEST });
    const { data } = await axios.get(`/api/users/admin/users`);

    dispatch({ type: ADMIN_ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: ADMIN_ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Admin delete user
export const admindeleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DELETE_USER_REQUEST });

    const { data } = await axios.delete(`/api/users/admin/user/${id}`);

    dispatch({ type: ADMIN_DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
