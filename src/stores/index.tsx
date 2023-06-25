import { configureStore } from '@reduxjs/toolkit'

import TechnoReducer from './reducers/tecno'
import ProjectReducer from './reducers/proje'
import ButtonReducer from './reducers/buttonDark'

export const store = configureStore({
  reducer: {
    technos: TechnoReducer,
    proje: ProjectReducer,
    mode: ButtonReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
