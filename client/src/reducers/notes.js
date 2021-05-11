export default (notes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_NOTES':   
            return action.payload;

        case 'CREATE_NOTE':       
            return action.payload; 

        case 'CLEAR_NOTES':
            return [];

        case 'UPDATE_LOCAL':
            return action.payload;

        default:
            return notes;
    }
}