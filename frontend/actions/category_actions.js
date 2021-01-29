import * as CategoryAPIUtil from '../util/category_util'

export const RECEIVE_ALL_CATEGORIES= 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_CATEGORY= 'RECEIVE_CATEGORY';

export const receiveCategories = (categories)=>{
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }
}

export const receiveCategory = (category)=>{
    return {
        type: RECEIVE_CATEGORY,
        category
    }
}

export const fetchCategories = () => dispatch =>{
    return CategoryAPIUtil.fetchCategories().then(
        (categories) => dispatch(receiveCategories(categories))
        )
}

export const fetchCategory = (categoryId) => dispatch =>{
    return CategoryAPIUtil.fetchCategory(categoryId).then(
        (category) => dispatch(receiveCategories(category))
        )
}