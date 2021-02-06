import axios from 'axios';

import {GET_ALERT} from './types';

// Check to find an alert from KitchenPi
export const checkAlerts = () =>  async dispatch => {
    try {
        // Will need to match up with end points of server
        const res = await axios.get('/api/alerts/');

        dispatch({
            type: GET_ALERT,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
}