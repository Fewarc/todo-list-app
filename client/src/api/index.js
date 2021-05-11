import axios from 'axios';

const listUrl = 'http://localhost:5000/todo';
const loginUrl = 'http://localhost:5000/users/login';
const registerUrl = 'http://localhost:5000/users/register';
const notesUrl = 'http://localhost:5000/notes';

export const fetchLists = (user) => axios.get(listUrl + `/${user}`);
export const createList = (newList) => axios.post(listUrl, newList); 
export const deleteList = (listData) => axios.post(listUrl + "/delete", listData);
export const getUser = (user) => axios.post(loginUrl, user);
export const createUser = (user) => axios.post(registerUrl, user);
export const fetchNotes = (listID) => axios.get(notesUrl + `/${listID}`);
export const createNote = (note) => axios.post(notesUrl + "/create", note);
export const deleteNote = (listData) => axios.post(notesUrl + "/delete", listData);
export const saveNotes = (notes) => axios.post(notesUrl + "/save", notes);