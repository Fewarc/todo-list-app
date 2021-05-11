import * as api from '../api';

export const getNotes = (listID) => async(dispatch) => {
    try {
        dispatch({ type: 'CLEAR_NOTES' });
        const { data } = await api.fetchNotes(listID);
        console.log(data);
        dispatch({ type: 'FETCH_ALL_NOTES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = (note) => async(dispatch) => {
    try {
        const { data } = await api.createNote(note);
        dispatch({ type: 'CREATE_NOTE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
    
export const deleteNote = (listData) => async(dispatch) => {
    try {
        const { data } = await api.deleteNote(listData);
        console.log(data);
        dispatch({ type: 'UPDATE_LOCAL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const localUpdate = (notes) => async(dispatch) => {
    // console.log(JSON.stringify(notes));
    try {        
        dispatch({ type: 'UPDATE_LOCAL', payload: notes });
    } catch (error) {
        console.log(error.message);
    }
}

export const saveNotes = (data) => async(dispatch) => {
    try {
        await api.saveNotes(data);
    } catch (error) {
        console.log(error.message);
    }
}