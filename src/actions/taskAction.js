import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const addTask = createAsyncThunk(
  "todo/add",
  async (newData, { rejectWithValue }) => {
    try {
      let { data } = await axios.post("/api/todo/add", newData);
      toast.success("Task added successfully");
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

export const getTask = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue }) => {
    try {
      let { data } = await axios.get("/api/todo/gettodo");
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "todo/delete",
  async (id, { rejectWithValue }) => {
    try {
      let { data } = await axios.post("/api/todo/delete", { id });
      toast.success("Task deleted successfully");
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

export const taskUpdate = createAsyncThunk(
  "task/update",
  async ({ value, id }, { rejectWithValue }) => {
    try {
      let { data } = await axios.post("/api/todo/update", { value, id });
      toast.success("Status updated successfully");
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
