export default (isLoggedIn = false, action) => {
    switch (action.type) {
        case 'LOG_IN':   // logging in
            console.log(action.payload);
            return false;

        case 'LOG_OUT':  // logging out  
            return false; 

        case 'ERROR':
            return null;

        default:
            return isLoggedIn;
    }
}