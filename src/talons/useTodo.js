import React from "react";
import { useDispatch, useSelector } from "react-redux";

const useTodo = () => {
  const { taskList } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return { dispatch, taskList };
};

export default useTodo;
