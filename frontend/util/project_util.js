export const fetchProjects = () =>{
  
    return $.ajax({
        method: 'GET',
        url: 'api/projects',
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
  
  return $.ajax({
      method: 'PATCH',
      url: `api/projects/${id}`,
      data: project,
      contentType: false,
      processData: false,
    })
}

export const updateProjectImage = (id, formData) => {
  
 return  $.ajax({
    method: "PATCH",
    url: `/api/projects/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });
};