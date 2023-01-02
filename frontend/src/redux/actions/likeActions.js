import * as actionTypes from "../constants/likeConstants.js";
import axios from "axios";

//Add to Like
export const addToLike = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_LIKE,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("like", JSON.stringify(getState().like.likeItems));
};

//REMOVE FROM LIKE
export const removeFromLike = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_LIKE,
    payload: id,
  });

  localStorage.setItem("like", JSON.stringify(getState().like.likeItems));
};

// SAVE SHIPPING INFO
export const saveLikeInfo = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.SAVE_LIKE_INFO,
    payload: data,
  });

  localStorage.setItem("likeInfo", JSON.stringify(data));
};
