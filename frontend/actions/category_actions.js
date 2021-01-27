import * as CategoryAPIUtil from '../util/category_util'

export const RECEIVE_ALL_CATEGORIES= 'RECEIVE_ALL_CATEGORIES';


export const receiveCategories = (categories)=>{
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }
}



export const fetchCategories = () => dispatch =>{
    return CategoryAPIUtil.fetchCategories().then(
        (categories) => dispatch(receiveCategories(categories))
        )
}