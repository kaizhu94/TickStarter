import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import projectReducer from './projects_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectReducer
});

export default entitiesReducer;