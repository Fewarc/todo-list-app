export default (user = [], action) => {
    switch (action.type) {
        case 'LOG_IN':   // logging in
            return action.payload;

        case 'LOG_OUT':      // logging out  
            return []; 

        default:
            return user;
    }
}