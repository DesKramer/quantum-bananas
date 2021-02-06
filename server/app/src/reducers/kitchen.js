/* eslint-disable import/no-anonymous-default-export */
import {GET_KITCHEN, GET_KITCHEN_FAIL} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const {type, payload} = action;
    
    switch (type) {
        case GET_KITCHEN:
            return [...state, ...payload];
        case GET_KITCHEN_FAIL: 
            return {...state, ...payload};
        default:
            return state;
    }
}