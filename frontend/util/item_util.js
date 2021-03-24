export const fetchAllItems = (project_id) =>{
    return $.ajax({
        method: 'GET',
        url: 'api/items',
        data: {project_id}
      })
}

export const createItem= item =>{
  
  return $.ajax({
      method: 'POST',
      url: `api/items`,
      data: {item}
    })
}


export const deleteItem = itemId =>{
  
  return $.ajax({
      method: 'DELETE',
      url: `api/items/${itemId}`
    })
}

export const updateItem = (item) =>{
  
  return $.ajax({
      method: 'PATCH',
      url: `api/items/${item.id}`,
      data: {item}
    })
}
