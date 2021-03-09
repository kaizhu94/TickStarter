export const fetchAllItems = (project_id) =>{
    return $.ajax({
        method: 'GET',
        url: 'api/items',
        data: {project_id}
      })
}
