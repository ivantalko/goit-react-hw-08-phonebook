import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login, logout, postRegistartionUser } from 'helpers/API.RandA';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registrUser = createAsyncThunk(
  'auth/registrUser',
  async (user, thunkAPI) => {
    try {
      const response = await postRegistartionUser(user);
      token.set(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginOperation = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await login(body);

      token.set(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutOperation = createAsyncThunk(
  'auth/login',
  async (_, thunkAPI) => {
    try {
      const response = await logout();
      token.unset(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
