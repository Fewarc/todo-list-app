import axios from 'axios';

const listUrl = 'http://localhost:5000/todo';
const loginUrl = 'http://localhost:5000/users/login';
const registerUrl = 'http://localhost:5000/users/register';
const notesUrl = 'http://localhost:5000/notes';

export const fetchLists = (user) => axios.get(listUrl + `/${user}`);
export const createList = (newList) => axios.post(listUrl, newList); 
export const getUser = (user) => axios.post(loginUrl, user);
export const createUser = (user) => axios.post(registerUrl, user);
export const fetchNotes = (listID) => axios.get(notesUrl + `${listID}`);
export const createNote = (note) => axios.post(notesUrl, note);