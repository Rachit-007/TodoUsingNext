import { getToken } from "next-auth/jwt";
import dbConnect from "src/lib/dbConnect";
import {
  addTaskWithEmail,
  addTaskWithoutEmail,
  getTaskWithEmail,
} from "src/services/taskServices";

export default async function handler(req, res) {
  dbConnect();
  const token = await getToken({ req });
  let { title, description } = req.body;
  if (token.email) {
    try {
      let task = await getTaskWithEmail(token.email);
      if (task.length === 0) {
        let addTask = await addTaskWithEmail(token.email, title, description);
        console.log(addTask);
      } else {
        let addTask = await addTaskWithoutEmail(
          token.email,
          title,
          description
        );
        console.log(addTask);
      }
      let data = await getTaskWithEmail(token.email);
      res.status(200).send(data[0].task);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}
