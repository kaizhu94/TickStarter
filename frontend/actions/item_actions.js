import * as ItemAPIUtil from '../util/item_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';

export const receiveAllItems = (items)=>{
    return {
        type: RECEIVE_ALL_ITEMS,
        items
    }
}

export const fetchAllItems = (project_id) => dispatch =>{
    return ItemAPIUtil.fetchAllItems(project_id).then(
        (items) => dispatch(receiveAllItems(items))
        )
}
