import { combineReducers } from 'redux';
import lists from './list.js';
import logInUser from './LogInUser.js';

/**
 * combining is needed when there is more than one reducer
 */

export default combineReducers({
    lists: lists,
    logInUser: logInUser
});

/**
 * possible ES6 syntax:
 * 
 * export default combineReducers({
    lists,
    isLoggedIn
});
*/