import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

// TODO remove after end-point is done
import TutorialData from "./mockup";

const history = createBrowserHistory();

export const getTutorial = createAsyncThunk(
  "tutorials/getTutorial",
  async ({ id, stepNumber }) => {
    // return (await axios.get("https://jsonplaceholder.typicode.com/posts/1"))
    //   .data;
    console.log("id", id);
    console.log("stepNumber", stepNumber);
    return {
      activeTutorial: TutorialData,
      activeStepNumber: parseInt(stepNumber),
    };
  }
);

export const tutorialsSlice = createSlice({
  name: "tutorials",
  initialState: {
    activeTutorial: null,
    activeStepNumber: undefined,
    cache: [],
    status: null,
  },
  reducers: {
    setActiveTutorial: (state, { payload }) => {
      state.activeTutorial = payload;
    },
    changeStepTo: (state, { payload }) => {
      state.activeStepNumber = parseInt(payload);
    },
    incrementStep: (state) => {
      state.activeStepNumber += 1;
      console.log("state.activeStepNumber", state.activeStepNumber);
    },
    decrementStep: (state) => {
      state.activeStepNumber -= 1;
      history.push(
        `/tutorials/${state.activeTutorial.id}/steps/${state.activeStepNumber}`
      );
    },
  },
  extraReducers: {
    [getTutorial.pending]: (state) => {
      state.status = "loading";
    },
    [getTutorial.fulfilled]: (
      state,
      { payload: { activeTutorial, activeStepNumber } }
    ) => {
      state.activeTutorial = activeTutorial;
      state.cache.push(activeTutorial);
      state.activeStepNumber = activeStepNumber;
      state.status = "success";
    },
    [getTutorial.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  setActiveTutorial,
  changeStepTo,
  incrementStep,
  decrementStep,
} = tutorialsSlice.actions;

export const selectActiveTutorial = (state) => state.tutorials.activeTutorial;
export const selectActiveStepNumber = (state) =>
  state.tutorials.activeStepNumber;
export const selectActiveStepIndex = (state) =>
  state.tutorials.activeStepNumber - 1;

export default tutorialsSlice.reducer;
