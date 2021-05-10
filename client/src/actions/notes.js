import * as api from '../api';

export const getNotes = (listID) => async(dispatch) => {
    try {
        const { data } = await api.fetchNotes(listID);
        dispatch({ type: 'FETCH_ALL_NOTES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = (note) => async(dispatch) => {
    try {
        const { data } = await api.createNote(note);
        dispatch({ type: 'CREATE_NOTE', payload: data });
        console.log(note);
    } catch (error) {
        console.log(error.message);
    }
}
    