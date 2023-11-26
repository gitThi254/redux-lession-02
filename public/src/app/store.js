import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";
import usersReducer from "../features/uses/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
