import * as api from '../api';

export const getUser = () => async(dispatch) => {
    try {
        const { data } = await api.getUser();
s
        dispatch({ type: 'LOG_IN', payload: data }); // todo
    } catch (error) {
        console.log(error.messsage);
    }
}