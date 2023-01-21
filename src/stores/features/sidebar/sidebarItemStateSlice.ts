import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type sidebarItemState = {
  sidebarItemState: string
}

const initialState: sidebarItemState = {
  sidebarItemState: '',
}

export const sidebarItemStateSlice = createSlice({
  name: 'sidebarItemState',
  initialState,
  reducers: {
    setSidebarItemState: (state, action: PayloadAction<string>) => {
      state.sidebarItemState = action.payload
    },
  },
})

export const { setSidebarItemState } = sidebarItemStateSlice.actions

export default sidebarItemStateSlice.reducer
