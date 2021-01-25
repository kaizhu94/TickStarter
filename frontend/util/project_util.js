export const fetchPorjects = () =>{
    $.ajax({
        method: 'GET',
        url: 'api/projects',
      })
}

export const fetchPorject = projectId =>{
    $.ajax({
        method: 'GET',
        url: `api/projects/${projectId}`,
      })
}