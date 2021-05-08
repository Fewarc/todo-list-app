import axios from 'axios';

const listUrl = 'http://localhost:5000/todo';
const loginUrl = 'http://localhost:5000/users/login';
const registerUrl = 'http://localhost:5000/users/register';

export const fetchLists = () => axios.get(listUrl);
export const createList = (newList) => axios.post(listUrl, newList); 
export const getUser = (user) => axios.post(loginUrl, user); 
export const createUser = (user) => axios.post(registerUrl, user);