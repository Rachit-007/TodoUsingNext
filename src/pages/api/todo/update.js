import { getToken } from "next-auth/jwt";
import dbConnect from "src/lib/dbConnect";
import { updateTaskStatus } from "src/services/taskServices";

export default async function handler(req, res) {
  dbConnect();
  let { value, id } = req.body;
  const token = await getToken({ req });
  if (token.email) {
    try {
      let updatedData = await updateTaskStatus(token.email, id, value);
      console.log(updatedData);
      res.status(200).send(updatedData.task);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
