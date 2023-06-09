import { createSlice } from "@reduxjs/toolkit";

import {
  addTask,
  deleteTask,
  getTask,
  taskUpdate,
} from "src/actions/taskAction";

const initialState = {
  taskList: [],
  taskLoading: false,
  taskError: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addTask.pending, (state) => {
  //       state.taskLoading = true;
  //     })
  //     .addCase(addTask.fulfilled, (state, action) => {
  //     })
  //     .addCase(addTask.rejected, (state, action) => {
  //       state.taskError = action.payload;
  //     });
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getTask.pending, (state, action) => {
        state.taskList = action.payload;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.taskList = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.taskList = action.payload;
      })
      .addCase(addTask.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.taskList = action.payload;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.taskError = action.payload;
      })
      .addCase(deleteTask.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.taskList = action.payload;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.taskError = action.payload;
      })
      .addCase(taskUpdate.pending, (state) => {
        state.taskLoading = true;
      })
      .addCase(taskUpdate.fulfilled, (state, action) => {
        state.taskList = action.payload;
      })
      .addCase(taskUpdate.rejected, (state, action) => {
        state.taskError = action.payload;
      });
  },
});

export const { getTodo } = taskSlice.actions;
export default taskSlice.reducer;
