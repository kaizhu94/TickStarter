import {RECEIVE_ALL_LOCATIONS} from '../actions/location_actions'


const LocationsReducer = (state = {}, action )=>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_LOCATIONS:
            return action.locations;
        default:
            return state;
    }
}

export default LocationsReducer;