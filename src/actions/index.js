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
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
