import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
  name: "projectData",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = ProjectSlice.actions;

export default ProjectSlice.reducer;

// export default ProjectSlice;