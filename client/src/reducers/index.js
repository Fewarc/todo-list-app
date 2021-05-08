import { combineReducers } from 'redux';
import lists from './list.js';
import user from './user.js';
import isLoggedIn from './isLoggedIn.js';

/**
 * combining is needed when there is more than one reducer
 */

export default combineReducers({
    lists: lists,
    isLoggedIn: isLoggedIn,
    user: user
});

/**
 * possible ES6 syntax:
 * 
 * export default combineReducers({
    lists,
    isLoggedIn
    user
});
*/