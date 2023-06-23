import { configureStore } from '@reduxjs/toolkit'

import TechnoReducer from './reducers/tecno'
import ProjectReducer from './reducers/proje'

export const store = configureStore({
  reducer: {
    technos: TechnoReducer,
    proje: ProjectReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
