/* eslint-disable import/no-anonymous-default-export */
import { GET_KITCHEN, GET_KITCHEN_FAIL } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_KITCHEN:
    case GET_KITCHEN_FAIL:
      return payload;
    default:
      return state;
  }
}
