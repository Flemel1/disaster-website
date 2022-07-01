import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "./user-slice"

type LoginState = {
  username: string
  password: string
  message: string
}

type PayloadProps = {
  username: string
  password: string
  users: User[]
}

const initialState: LoginState = {
  username: "",
  password: "",
  message: "",
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logined: (state, payload: PayloadAction<PayloadProps>) => {
      const { username, password, users } = payload.payload
      users.forEach((user) => {
        if (username === user.username && password === user.password) {
          state.username = username
          state.password = password
          state.message = "Selamat Anda Berhasil Login"
        } else {
          state.message = "Username atau Password Anda Salah"
        }
      })
    },
  },
})

export default loginSlice.reducer

export const { logined } = loginSlice.actions
