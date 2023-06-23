import { configureStore } from '@reduxjs/toolkit'
import { technoFilter } from './reducers/tecno'

import TechnoReducer from './reducers/tecno'

export const store = configureStore({
  reducer: {
    technos: TechnoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
