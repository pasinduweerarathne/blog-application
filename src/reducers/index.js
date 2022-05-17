// import all the reducers that we created in the project
import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  posts: postReducer,
  user: userReducer,
});
