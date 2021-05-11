/**
 * reducer (a funcion) accepts state and executes action
 * our state is an array of lists, it is empty as it has 
 * to be initilized
 */

 export default (lists = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':   // fetching all the lists
            return action.payload;

        case 'CREATE':      // craeting a single list  
            /**
             * here action.payload is equal to new list as it is a response
             * from the server, it is then added to existing lists
             * using ES6 ... syntax
             */
            return [ ...lists, action.payload ]; 

        case 'DELETE':
            return action.payload;

        default:
            return lists;
    }
}