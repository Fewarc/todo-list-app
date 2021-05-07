import { combineReducers } from 'redux';
import lists from './list.js';
import isLoggedIn from './isLogged.js';

/**
 * combining is needed when there is more than one reducer
 */

export default combineReducers({
    lists: lists,
    isLoggedIn: isLoggedIn
});

/**
 * possible ES6 syntax:
 * 
 * export default combineReducers({
    lists,
    isLoggedIn
});
*/