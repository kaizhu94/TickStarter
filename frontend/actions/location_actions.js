import * as LocationAPIUtil from '../util/location_util'

export const RECEIVE_ALL_LOCATIONS = 'RECEIVE_ALL_LOCATIONS';

export const receiveLocations = (locations)=>{
    return {
        type: RECEIVE_ALL_LOCATIONS,
        locations
    }
}

export const fetchLocations = () => dispatch =>{
    return LocationAPIUtil.fetchLocations().then(
        (locations) => dispatch(receiveLocations(locations))
        )
}