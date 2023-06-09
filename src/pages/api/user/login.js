import userModel from "models/userModel";
import decryptPassword from "src/encryption/decrypt";
import dbConnect from "src/lib/dbConnect";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  dbConnect();
  if (req.method == "POST") {
    let { email, password } = req.body;
    try {
      let user = await userModel.findOne({ email: email });
      if (user) {
        let authenucatedUser = await decryptPassword(password, user.password);
        const token = jwt.sign(
          {
            email: email,
          },
          process.env.KEY
        );
        res
          .setHeader(
            "Set-Cookie",
            serialize("jwt", token, { httpOnly: true, path: "/" })
          )
          .status(200)
          .send();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
