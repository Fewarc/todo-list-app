export default (notes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_NOTES':   // logging in
            return action.payload;

        case 'CREATE_NOTE':      // logging out  
            return [...notes, action.payload]; 

        default:
            return notes;
    }
}