import { createAsyncThunk } from '@reduxjs/toolkit';
import { postRegistartionUser } from 'helpers/API.RandA';

export const registrUser = createAsyncThunk(
  'auth/registrUser',
  async (user, thunkAPI) => {
    try {
      const response = await postRegistartionUser(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
