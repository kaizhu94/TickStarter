import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import projectReducer from './projects_reducer'
import locationsReducer from './locations_reducer'
import categoriesReducer from './categories_reducer'
const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectReducer,
  locations: locationsReducer,
  categories: categoriesReducer
});

export default entitiesReducer;