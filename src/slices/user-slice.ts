import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type User = {
  username: string
  email: string
  password: string
  hp: string
}

const initialState: User[] = []

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: initialState,
  },
  reducers: {
    registered: (state, payload: PayloadAction<User>) => {
      const { username, email, password, hp } = payload.payload
      const user: User = {
        username,
        email,
        password,
        hp,
      }
      state.users = [...state.users, user]
    },
  },
})

export const { registered } = userSlice.actions

export default userSlice.reducer
