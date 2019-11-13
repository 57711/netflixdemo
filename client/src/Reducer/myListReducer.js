export default (state={}, action) => {
    switch(action.type){
        case "FETCH_MYLIST":
            return action.payload;
        case "MOVE_TO_MYLIST":
            return [...state, action.payload];
        case "MOVE_TO_RECOMMEND":
            return state.filter(item=> item.id !== action.payload.id);
        default:
            return state;
    }
}