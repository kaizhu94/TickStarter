import {RECEIVE_ALL_REWARDS, RECEIVE_REWARD}  from '../actions/reward_action'

const rewardsReducer = (state = {}, action )=>{
    // debugger
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_REWARDS:
            // debugger
            return action.rewards;
        case RECEIVE_REWARD:
            debugger
            const rewards = Object.assign({}, state, {[action.reward.id]: action.reward});
            return rewards;
        default:
            return state;
    }
}

export default rewardsReducer;