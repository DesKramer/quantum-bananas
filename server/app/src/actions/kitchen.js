import API from "../api";
import { GET_KITCHEN, GET_KITCHEN_FAIL } from "./types";

// Check to find an alert from KitchenPi
export const getKitchen = () => async (dispatch) => {
  try {
    // Will need to match up with end points of server
    const res = await API.get("/kitchens/");

    dispatch({
      type: GET_KITCHEN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_KITCHEN_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    console.error(err.message);
  }
};
