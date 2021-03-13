export const fetchAllRewards = (project_id) =>{
  // debugger
    return $.ajax({
        method: 'GET',
        url: 'api/rewards',
        data: {project_id}
      })
}

export const createReward= reward =>{
  // debugger
  return $.ajax({
      method: 'POST',
      url: `api/rewards`,
      data: {reward}
    })
}

export const deleteReward = rewardId =>{
  // debugger
  return $.ajax({
      method: 'DELETE',
      url: `api/rewards/${rewardId}`
    })
}

export const updateReward = (reward) =>{
  debugger
  return $.ajax({
      method: 'PATCH',
      url: `api/rewards/${reward.rewardId}`,
      data: {reward}
    })
}
