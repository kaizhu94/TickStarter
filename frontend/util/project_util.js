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

export const createPorject = project =>{
  $.ajax({
      method: 'POST',
      url: `api/projects`,
      data: {project}
    })
}