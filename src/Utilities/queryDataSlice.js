import { createSlice } from "@reduxjs/toolkit";

const QuerySlice = createSlice({
  name: "queryData",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = QuerySlice.actions;

export default QuerySlice.reducer;

// export default ProjectSlice;