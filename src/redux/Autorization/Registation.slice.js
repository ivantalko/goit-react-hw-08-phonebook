import { createSlice } from '@reduxjs/toolkit';
import { StatusForAll } from '../StatusForAll';
import {
  currentOperation,
  loginOperation,
  logoutOperation,
  registrUser,
} from './operation.R.A';
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
    [registrUser.pending](state) {
      state.status = StatusForAll.loading;
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
    [loginOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [loginOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    [logoutOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [logoutOperation.fulfilled]() {
      return initialState;
    },
    [logoutOperation.rejected](state) {
      state.status = StatusForAll.error;
    },
    [currentOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [currentOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [currentOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});
export default registrSlice.reducer;
