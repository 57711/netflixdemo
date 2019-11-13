export default (state={}, action) => {
    switch(action.type){
        case "FETCH_RECOMMENDATIONS":
            return action.payload;
        case "MOVE_TO_MYLIST":
            return state.filter(item=> item.id !== action.payload.id);
        case "MOVE_TO_RECOMMEND":
            return [...state, action.payload];
        default:
            return state;

    }
}