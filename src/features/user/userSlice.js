import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {NOT_CHOSEN} from "../../components/StepOneForm/StepOneForm";

export const initialState = {
  phoneNumber: '',
  email: '',
  nickname: '',
  name: '',
  surname: '',
  sex: NOT_CHOSEN,
  advantages: ['', '', ''],
  checkbox: 0,
  radio: 0,
  about: ''
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
    },
    saveDataForStepOne(state, action) {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
    addAdvantages(state, action) {
      state.advantages.push(action.payload);
    },
    removeAdvantage(state, action) {
      state.advantages = state.advantages.filter((item, index) => {
        return index !== action.payload
      });
    },
    saveDataForStepTwo(state, action) {
      state.advantages = action.payload.advantages;
      state.checkbox = action.payload.checkbox;
      state.radio = action.payload.radio;
    },
    saveDataForStepThree(state, action) {
      state.about = action.payload.about;
    }
  }
})

export default userReducer.reducer;
export const { saveDataForStepOne, saveDataForStepTwo, saveDataForStepThree, login, addAdvantages, removeAdvantage } = userReducer.actions;
