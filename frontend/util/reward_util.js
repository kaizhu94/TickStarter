export const fetchAllRewards = (project_id) =>{
  debugger
    return $.ajax({
        method: 'GET',
        url: 'api/rewards',
        data: {project_id}
      })
}