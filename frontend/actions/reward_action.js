import * as RewardAPIUtil from '../util/reward_util';

export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD'
export const DELETE_REWARD = 'DELETE_REWARD';

export const receiveAllRewards = (rewards)=>{
    return {
        type: RECEIVE_ALL_REWARDS,
        rewards
    }
}

export const receiveReward = (reward) => {
    return {
        type: RECEIVE_REWARD,
        reward
    }
}

export const removeReward = (rewardId)=>{
    return {
        type: DELETE_REWARD,
        rewardId
    }
}

export const fetchAllRewards = (project_id) => dispatch =>{
    return RewardAPIUtil.fetchAllRewards(project_id).then(
        (rewards) => dispatch(receiveAllRewards(rewards))
        )
}


export const createReward = (reward) => dispatch =>{
    return RewardAPIUtil.createReward(reward).then(
        (reward) => dispatch(receiveReward(reward))
        )
}

export const updateReward = (reward) => dispatch =>{
    // debugger
    return RewardAPIUtil.updateReward(reward).then(
        (reward) => dispatch(receiveReward(reward))
        )
}

export const deleteReward = (rewardId) => dispatch =>{
    // debugger
    return RewardAPIUtil.deleteReward(rewardId).then(
        () => dispatch(removeReward(rewardId))
        )
}
