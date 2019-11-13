import server from '../api/fetchData';

export const fetchData = list => async dispatch => {
    const response = await server.get(`/${list}`);
    dispatch({
        type: `FETCH_${list.toUpperCase()}`,
        payload: response.data
    })        
}

export const addMyList = item => async dispatch => {
    const response = await server.post("/mylist",item);
    await server.delete(`/recommendations/${item.id}`);
    dispatch({
        type: "MOVE_TO_MYLIST",
        payload: response.data
    })
}

export const removeMyList = item => async (dispatch) => {
    const response = await server.post("/recommendations",item);
    await server.delete(`/mylist/${item.id}`);
    dispatch({
        type: "MOVE_TO_RECOMMEND",
        payload: response.data
    })
}


