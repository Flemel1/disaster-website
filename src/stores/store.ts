import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../slices/login-slice"
import userReducer from '../slices/user-slice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
