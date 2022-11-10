import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from '../StatusForAll';
import { registrUser } from './operation.R.A';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: StatusForAll.init,
};
const registrSlice = createSlice({
  name: 'regisrt',
  initialState,
  extraReducers: {
    [registrUser.panding](state) {
      state.status = StatusForAll.loading;
      state.isLoggedIn = true;
    },
    [registrUser.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registrUser.rejected](state) {
      state.status = StatusForAll.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});
export default registrSlice.reducer;
