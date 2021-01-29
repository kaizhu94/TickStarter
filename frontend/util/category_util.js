export const fetchCategories = () =>{
    return $.ajax({
        method: 'GET',
        url: 'api/categories',
      })
}

export const fetchCategory = (categoryId) =>{
  return $.ajax({
      method: 'GET',
      url: `api/categories/${categoryId}`,
    })
}