import * as actionTypes from "../constants/likeConstants.js";

export const likeReducer = (
  state = { likeItems: [], likeInfo: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIKE:
      const item = action.payload;

      const existItem = state.likeItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          likeItems: state.likeItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          likeItems: [...state.likeItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_LIKE:
      return {
        ...state,
        likeItems: state.likeItems.filter((x) => x.product !== action.payload),
      };

    case actionTypes.SAVE_LIKE_INFO:
      return {
        ...state,
        likeInfo: action.payload,
      };
    default:
      return state;
  }
};
