import { combineReducers } from 'redux';
import list from './list.js';

/**
 * combining is needed when there is more than one reducer
 */

export default combineReducers({
    list: list
});

/**
 * possible ES6 syntax:
 * 
 * export default combineReducers({
    list
});
*/