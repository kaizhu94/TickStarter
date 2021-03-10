import * as ItemAPIUtil from '../util/item_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveAllItems = (items)=>{
    return {
        type: RECEIVE_ALL_ITEMS,
        items
    }
}

export const receiveItem = (item)=>{
    return {
        type: RECEIVE_ITEM,
        item
    }
}

export const fetchAllItems = (project_id) => dispatch =>{
    return ItemAPIUtil.fetchAllItems(project_id).then(
        (items) => dispatch(receiveAllItems(items))
        )
}

export const createItem = (item) => dispatch =>{
    return ItemAPIUtil.createItem(item).then(
        (item) => dispatch(receiveItem(item))
        )
}

