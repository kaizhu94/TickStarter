export const fetchProjects = (id) =>{
  debugger
    return $.ajax({
        method: 'GET',
        url: 'api/projects',
        data: {id}
      })
}

export const fetchProject = projectId =>{
   return $.ajax({
        method: 'GET',
        url: `api/projects/${projectId}`,
      })
}

export const createProject = project =>{
  return $.ajax({
      method: 'POST',
      url: `api/projects`,
      data: {project}
    })
}

export const deleteProject = projectID =>{
  return $.ajax({
      method: 'DELETE',
      url: `api/projects/${projectID}`
    })
}

export const updateProject = (id, project) =>{
  // debugger
  return $.ajax({
      method: 'PATCH',
      url: `api/projects/${id}`,
      data: project,
      contentType: false,
      processData: false,
    })
}

export const updateProjectImage = (id, formData) => {
  // debugger
 return  $.ajax({
    method: "PATCH",
    url: `/api/projects/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });
};