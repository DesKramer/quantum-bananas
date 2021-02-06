import API from "../api";
import { GET_KITCHEN, GET_KITCHEN_FAIL } from "./types";

export const getKitchen = () => async (dispatch) => {
  try {
    const res = await API.get("/kitchens/latest");

    dispatch({
      type: GET_KITCHEN,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //     type: GET_KITCHEN_FAIL,
    //     payload: { msg: err.response.statusText, status: err.response.status},
    // });
    console.error(err.message);
  }
};
