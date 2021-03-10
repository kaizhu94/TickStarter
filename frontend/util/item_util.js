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

