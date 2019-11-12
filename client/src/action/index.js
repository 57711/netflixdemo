import server from '../api/fetchData';

export const fetchData = (list) => {
    return async dispatch => {
        const response = await server.get(`/${list}`);
        //console.log(response);
        dispatch({
            type: `FETCH_${list.toUpperCase()}`,
            payload: response.data
        })        
    }

}

export const addMyList = (item) => {
    return async dispatch => {
        const response = await server.post("mylist",item);
        console.log(response);
        dispatch({
            type: "ADD_ITEM",
            payload: response.data
        })
    }
}
export const removeMyList = (item) => {
    return async (dispatch,getState) => {
        await server.delete(`/mylist/${item.id}`);
        try{
            const response = await server.post("/recommendations",item);

            dispatch({
                type: "REMOVE_ITEM",
                payload: response.data
            })
        }catch(err){
            dispatch({
                type: "REMOVE_ITEM_MYLIST",
                payload: item
            })
        }
    }

}


