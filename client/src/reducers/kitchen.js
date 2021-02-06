/* eslint-disable import/no-anonymous-default-export */
import {GET_ALERT} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case GET_ALERT:
            return { ...state, ...payload}
        default:
            return state;
    }
}