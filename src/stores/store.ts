import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../slices/login-slice"
import userReducer from '../slices/user-slice'
import menuReducer from '../slices/menu-slice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    menu: menuReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
