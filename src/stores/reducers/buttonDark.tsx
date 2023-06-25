import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ButtonState = {
  buttonDark: boolean
}

const initialState: ButtonState = {
  buttonDark: false
}

const ButtonSlice = createSlice({
  name: 'darkMode',
  initialState,

  reducers: {
    changeColor: (state, action: PayloadAction<boolean>) => {
      state.buttonDark = action.payload
    }
  }
})

export const { changeColor } = ButtonSlice.actions
export default ButtonSlice.reducer
