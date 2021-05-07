import axios from 'axios';

const listUrl = 'http://localhost:5000/todo';
const userUrl = 'http://localhost:5000/logIn';

export const fetchLists = () => axios.get(listUrl);
export const createList = (newList) => axios.post(listUrl, newList); 
export const getUser = (user) => axios.post(userUrl, user);  // todo