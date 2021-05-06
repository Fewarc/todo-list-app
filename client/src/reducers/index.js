import { combineReducers } from 'redux';
import lists from './list.js';

/**
 * combining is needed when there is more than one reducer
 */

export default combineReducers({
    lists: lists
});

/**
 * possible ES6 syntax:
 * 
 * export default combineReducers({
    lists
});
*/