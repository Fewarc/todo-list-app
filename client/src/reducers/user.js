export default (user = '', action) => {
    switch (action.type) {
        case 'LOG_IN_USER':   // logging in
            return action.payload;

        case 'LOG_OUT_USER':      // logging out  
            return ''; 

        default:
            return user;
    }
}