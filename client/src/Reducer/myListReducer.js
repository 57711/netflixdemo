export default (state={}, action) => {
    switch(action.type){
        case "FETCH_MYLIST":
            return action.payload;
        case "ADD_ITEM":
            return [...state, action.payload];
        case "REMOVE_ITEM":
        case "REMOVE_ITEM_MYLIST":
            return state.filter(item=> item.id !== action.payload.id);

        default:
            return state;
    }
}