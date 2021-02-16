import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTutorial = createAsyncThunk(
  "tutorials/getTutorial",
  async () => {
    return (await axios.get("https://jsonplaceholder.typicode.com/posts/1"))
      .data;
  }
);

export const tutorialsSlice = createSlice({
  name: "tutorials",
  initialState: {
    activeTutorial: {},
    cache: [],
    status: null,
  },
  reducers: {
    setActiveTutorial: (state, { payload }) => {
      state.activeTutorial = payload;
    },
  },
  extraReducers: {
    [getTutorial.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTutorial.fulfilled]: (state, { payload }) => {
      state.activeTutorial = payload;
      state.cache.push(payload);
      state.status = "success";
    },
    [getTutorial.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { setActiveTutorial } = tutorialsSlice.actions;

export default tutorialsSlice.reducer;
