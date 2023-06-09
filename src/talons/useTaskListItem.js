import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, taskUpdate } from "src/actions/taskAction";

const useTaskListItem = (task) => {
  const { title, description } = task;
  const dispatch = useDispatch();

  const taskDelte = async () => {
    dispatch(deleteTask(task._id));
  };

  const handleChange = async (e) => {
    dispatch(taskUpdate({ id: task._id, value: e.target.value }));
  };

  return { handleChange, taskDelte, title, description };
};

export default useTaskListItem;
