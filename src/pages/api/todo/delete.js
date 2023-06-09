import { getToken } from "next-auth/jwt";
import dbConnect from "src/lib/dbConnect";
import taskModel from "models/taskModel";
import { deleteTaskWithId, getTaskWithEmail } from "src/services/taskServices";

export default async function handler(req, res) {
  dbConnect();
  const token = await getToken({ req });
  let { id } = req.body;
  if (token.email) {
    try {
      let deletedData = await deleteTaskWithId(token.email, id);
      let data = await getTaskWithEmail(token.email);
      console.log(data);
      res.status(200).send(data[0].task);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
