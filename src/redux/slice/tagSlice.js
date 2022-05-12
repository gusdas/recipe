import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tags: [],
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    addTag: (state, {payload}) => {
      state.tags.push(payload);
    },
    delTag: (state, {payload}) => {
      state.tags = state.tags.filter((val, idx) => idx !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const tagActions = tagSlice.actions;

export default tagSlice.reducer;
