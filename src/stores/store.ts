import { combineReducers, configureStore } from '@reduxjs/toolkit'
import newsSlice from './newsSlice'

const rootReducer = combineReducers({
	news: newsSlice
})

export const store = configureStore({
	reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>
