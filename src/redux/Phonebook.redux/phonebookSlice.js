import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactsData,
  getContactsData,
  setContactsData,
} from './operations';
import { StatusForAll } from '../StatusForAll';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  status: StatusForAll.init,
};
const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  extraReducers: {
    [getContactsData.pending](state) {
      state.status = StatusForAll.loading;
    },

    [getContactsData.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.items = [...action.payload];
    },

    [getContactsData.rejected](state) {
      state.status = StatusForAll.error;
    },

    [setContactsData.pending](state) {
      state.status = StatusForAll.loading;
    },

    [setContactsData.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.items = [...state.items, action.payload];
    },

    [setContactsData.rejected](state) {
      state.status = StatusForAll.error;
    },
    [deleteContactsData.pending](state) {
      state.status = StatusForAll.loading;
    },
    [deleteContactsData.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContactsData.rejected](state) {
      state.status = StatusForAll.error;
    },
  },
});

export default phonebookSlice.reducer;
