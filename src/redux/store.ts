import { configureStore } from '@reduxjs/toolkit'
import forStudySliceReducer from "../components/ForStudy/forStudySlicer";

export const store = configureStore({
    reducer: {forStudy: forStudySliceReducer},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch