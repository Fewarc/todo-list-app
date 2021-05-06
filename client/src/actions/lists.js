import * as api from '../api';

/**
 * fucntions are asynchronous as it may take time to execute queries
 * redux async (thunk) allows   = () => async(dispatch) => {}   syntax
 */

export const getLists = () => async(dispatch) => {
    try {
        const { data } = await api.fetchLists();
        /**
         * data is what we get from database query find() - finds all the lists
         * then it sends everythig to the action (sends action name and the data it got)
         */
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.messsage);
    }
}

/**
 * @param {list} list - pass a list you want to create
 */
export const createList = (list) => async(dispatch) => {
    try {
        const { data } = await api.createList(list);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}