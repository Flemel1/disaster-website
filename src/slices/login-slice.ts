import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type LoginState = {
    username: string
    password: string
    message: string
}

type PayloadProps = {
    username: string
    password: string
}

const initialState: LoginState = {
    username: '',
    password: '',
    message: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logined: (state, payload: PayloadAction<PayloadProps>) => {
            const {username, password} = payload.payload
            if (username === 'test' && password === 'test123') {
                state.username = username
                state.password = password
                state.message = 'Selamat Anda Berhasil Login'
            } else {
                state.message = 'Username atau Password Anda Salah'
            }
        }
    }
})

export default loginSlice.reducer

export const { logined } = loginSlice.actions