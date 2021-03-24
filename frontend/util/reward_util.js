export const fetchAllRewards = (project_id) =>{
  
    return $.ajax({
        method: 'GET',
        url: 'api/rewards',
        data: {project_id}
      })
}

export const createReward= reward =>{
  
  return $.ajax({
      method: 'POST',
      url: `api/rewards`,
      data: {reward}
    })
}

export const deleteReward = rewardId =>{
  
  return $.ajax({
      method: 'DELETE',
      url: `api/rewards/${rewardId}`
    })
}

export const updateReward = (reward) =>{
  
  return $.ajax({
      method: 'PATCH',
      url: `api/rewards/${reward.rewardId}`,
      data: {reward}
    })
}
