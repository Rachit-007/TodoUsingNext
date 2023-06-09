import tasks from "models/taskModel";

export const getTaskWithEmail = async (email) => {
  try {
    let task = await tasks.find({ email: email });
    return task;
  } catch (err) {
    console.log(err);
  }
};

export const addTaskWithEmail = async (email, title, description) => {
  try {
    let task = await tasks.insertMany([
      {
        email: email,
        task: [{ title: title, description: description }],
      },
    ]);
    console.log(task);
    return task;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addTaskWithoutEmail = async (email, title, description) => {
  try {
    let task = await tasks.updateOne(
      { email: email },
      {
        $push: { task: { title: title, description: description } },
      }
    );
    return task;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateTaskStatus = async (email, id, value) => {
  try {
    const result = await tasks.findOneAndUpdate(
      { email, "task._id": id },
      { $set: { "task.$.completed": value } },
      { new: true }
    );
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteTaskWithId = async (email, id) => {
  try {
    let newTodo = await tasks.updateOne(
      { email: email },
      { $pull: { task: { _id: id } } }
    );
    return newTodo;
  } catch (err) {
    console.log(err);
  }
};
