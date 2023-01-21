import { configureStore } from '@reduxjs/toolkit'
import sidebarItemStateSlice from 'src/stores/features/sidebar/sidebarItemStateSlice'

export const store = configureStore({
  reducer: {
    sidebarItemState: sidebarItemStateSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
