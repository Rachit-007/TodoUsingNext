import { getToken } from "next-auth/jwt";
import dbConnect from "src/lib/dbConnect";
import taskModel from "models/taskModel";

export default async function handler(req, res) {
  dbConnect();
  const token = await getToken({ req });
  if (token.email) {
    try {
      let taskList = await taskModel.find({ email: token.email });
      res.status(200).send(taskList[0].task);
    } catch (err) {
      res.send(err);
    }
  }
}
