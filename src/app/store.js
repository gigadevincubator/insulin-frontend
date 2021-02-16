import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import tutorialsReducer from "components/Tutorial/tutorialsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    tutorials: tutorialsReducer,
  },
});
