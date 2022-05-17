// import all the reducers that we created in the project
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer,
});
