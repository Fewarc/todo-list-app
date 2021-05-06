import axios from 'axios';

const url = 'http://localhost:5000/todo';

export const fetchLists = () => axios.get(url);
export const createList = (newList) => axios.post(url, newList); 