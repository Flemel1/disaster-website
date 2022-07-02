import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type MenuState = {
  selected: string
}

type PayloadProps = {
  selected: string
}

const initialState: MenuState = {
  selected: 'Informasi'
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectedMenu: (state, payload: PayloadAction<PayloadProps>) => {
        const {selected} = payload.payload
        state.selected = selected
    }
  },
})

export default menuSlice.reducer

export const { selectedMenu } = menuSlice.actions
