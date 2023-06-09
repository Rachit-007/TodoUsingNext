import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import useTaskForm from "src/talons/useTaskForm";

const TaskForm = () => {
  const { onsubmit, register, handleSubmit, errors } = useTaskForm();

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-3">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className=" flex w-full flex-col rounded-lg bg-gray-100 p-8">
            <div className="relative mb-4">
              <label
                htmlFor="task-name"
                className="text-sm leading-7 text-gray-600"
              >
                Task
              </label>
              <input
                type="text"
                {...register("title")}
                placeholder="Enter Task Name"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#111827] focus:ring-2 focus:ring-[#11182749]"
              />
              <ErrorMessage
                name="title"
                errors={errors}
                render={({ message }) => (
                  <p className="text-sm pt-1 text-red-600">{message}</p>
                )}
              ></ErrorMessage>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="description"
                className="text-sm leading-7 text-gray-600"
              >
                Task Description
              </label>
              <textarea
                {...register("description")}
                placeholder="Task Description"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#111827] focus:ring-2 focus:ring-[#11182749]"
              />
              <ErrorMessage
                name="description"
                errors={errors}
                render={({ message }) => (
                  <p className="text-sm pt-1 text-red-600">{message}</p>
                )}
              ></ErrorMessage>
            </div>
            <button
              type="submit"
              className="rounded border-0 bg-[#111827] px-8 py-2 text-lg text-white hover:bg-[#2f3b54] focus:outline-none"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
