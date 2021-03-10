import {REVEICE_ALL_REWARDS}  from '../actions/reward_action'

const rewardsReducer = (state = {}, action )=>{
    // debugger
    Object.freeze(state)
    switch(action.type){
        case REVEICE_ALL_REWARDS:
            debugger
            return action.rewards;
        default:
            return state;
    }
}

export default rewardsReducer;