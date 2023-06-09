import mongoose from "mongoose";

// const taskListSchema = new mongoose.Schema({
//   title: {
//     type: "string",
//     required: true,
//   },
//   description: {
//     type: "string",
//     required: true,
//   },
//   completed: {
//     type: "boolean",
//     default: false,
//   },
// });

const taskSchema = new mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  task: {
    type: [
      {
        title: {
          type: "string",
          required: true,
        },
        description: {
          type: "string",
          required: true,
        },
        completed: {
          type: "boolean",
          default: false,
        },
      },
    ],
    default: [],
  },
});

export default mongoose.models.task || mongoose.model("task", taskSchema);
