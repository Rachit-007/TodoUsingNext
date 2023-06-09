import _ from "lodash";
import { useEffect } from "react";
import { getTask } from "src/actions/taskAction";
import useTodo from "src/talons/useTodo";
import TaskListItem from "./tasklistitem";

export const Todo = () => {
  const { dispatch, taskList } = useTodo();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  return (
    <>
      {_.size(taskList) > 0 ? (
        <section className="body-font pt-3 text-gray-900">
          <div className="container mx-auto px-5 py-2">
            <div className="mb-10 flex w-full flex-col flex-wrap items-center text-center">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                Your Todos
              </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {taskList.map((task) => (
                <TaskListItem task={task} key={task.id} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
