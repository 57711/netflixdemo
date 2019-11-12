export default (state={},action) => {
    switch(action.type){
        case "FETCH_RECOMMENDATIONS":
            return action.payload;
        case "REMOVE_ITEM":
            return [...state, action.payload];
        default:
            return state;

    }
}