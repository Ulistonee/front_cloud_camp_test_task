import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  phoneNumber: '',
  email: ''
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducer: {
    login(state, action) {
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
    }
  }
})

export default userReducer.reducer;
export const { login } = userReducer.actions;
