export const fetchAllRewards = (project_id) =>{
  // debugger
    return $.ajax({
        method: 'GET',
        url: 'api/rewards',
        data: {project_id}
      })
}

export const createReward= reward =>{
  debugger
  return $.ajax({
      method: 'POST',
      url: `api/rewards`,
      data: {reward}
    })
}