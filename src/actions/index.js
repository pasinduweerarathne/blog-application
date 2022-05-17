// import _ from "lodash";
import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

/* export const fetchPosts = () => {
  // making a request from an action creator
  // if we use redux thunk we need to return a function. that's why we use a function inside action creator
  // we go through this middleware instead of send action dirrectly to reducers.
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
}; */

/* shortend syntax with redux thunk */
// making a request from an action creator
// if we use redux thunk we need to return a function. that's why we use a function inside action creator
// we go through this middleware instead of send action dirrectly to reducers.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  /* const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id))); */
  // chain method
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};

/* // fetch users
export const fetchUser = (id) => (dispatch, getState) => {
  _fetchUser(id, dispatch);
}; */

/* // need to memorize the function bcz of to prevent unnecessary network requests (one time memorization)
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
}); */
