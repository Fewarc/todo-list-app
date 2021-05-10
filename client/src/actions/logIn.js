import * as api from '../api';
import { getLists } from '../actions/lists.js';

export const getUser = (user) => async(dispatch) => {
    try {
        const { data } = await api.getUser(user);
        if(data.success === false){
            dispatch({ type: 'ERROR', payload: data });
        }else {
            dispatch({ type: 'LOG_IN', payload: data });
            dispatch({ type: 'LOG_IN_USER', payload: data.username});
            dispatch(getLists(data.username));
        }
    } catch (error) {
        console.log(error.messsage);
    }
}

export const createUser = (user) => async(dispatch) => {
    try {
        const { data } = await api.createUser(user);

    } catch (error) {
        console.log(error.messsage);
    }
}