import * as api from '../api';

export const getUser = (user) => async(dispatch) => {
    try {
        const { data } = await api.getUser(user);
        
        dispatch({ type: 'LOG_IN', payload: data }); 
        
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