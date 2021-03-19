import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import projectReducer from './projects_reducer'
import locationsReducer from './locations_reducer'
import categoriesReducer from './categories_reducer'
import itemsReducer from './items_reducer'
import rewardsReducer from './rewards_reducer'
import searchReducer from './search_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectReducer,
  locations: locationsReducer,
  categories: categoriesReducer,
  items: itemsReducer,
  rewards: rewardsReducer,
  search: searchReducer
});

export default entitiesReducer;