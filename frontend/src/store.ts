import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {

}

const Slice = createSlice({
  name: 'projectState',
  initialState,
  reducers: {
  },
})

export const {
  
} = Slice.actions

const store = configureStore({
  reducer: {
    project: Slice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export const projectState = (state: RootState) => state.project

export default store
