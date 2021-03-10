import * as RewardAPIUtil from '../util/reward_util';

export const REVEICE_ALL_REWARDS = 'REVEICE_ALL_REWARDS';

export const receiveAllRewards = (rewards)=>{
    return {
        type: REVEICE_ALL_REWARDS,
        rewards
    }
}

export const fetchAllRewards = (project_id) => dispatch =>{
    return RewardAPIUtil.fetchAllRewards(project_id).then(
        (rewards) => dispatch(receiveAllRewards(rewards))
        )
}