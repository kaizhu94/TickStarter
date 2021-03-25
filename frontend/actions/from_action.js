export const RECEIVE_FROM = 'RECEIVE_FROM';
export const REMOVE_FROM = 'REMOVE_FROM';


export const receiveFrom = (from)=>{
    return {
        type: RECEIVE_FROM,
        from
    }
}

export const removeFrom = ()=>{
    return {
        type: REMOVE_FROM
    }
}

export const updateFrom = (from) =>dispatch =>{
    return dispatch(receiveFrom(from))
}

export const deleteFrom = () =>dispatch =>{
    return dispatch(removeFrom())
}
