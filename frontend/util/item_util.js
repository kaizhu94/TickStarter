export const fetchAllItems = (project_id) =>{
    return $.ajax({
        method: 'GET',
        url: 'api/items',
        data: {project_id}
      })
}

export const createItem= item =>{
  // debugger
  return $.ajax({
      method: 'POST',
      url: `api/items`,
      data: {item}
    })
}


export const deleteItem = itemId =>{
  // debugger
  return $.ajax({
      method: 'DELETE',
      url: `api/items/${itemId}`
    })
}

export const updateItem = (item) =>{
  // debugger
  return $.ajax({
      method: 'PATCH',
      url: `api/items/${item.id}`,
      data: {item}
    })
}
