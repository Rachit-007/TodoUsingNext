import { path } from "@constants/index";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { singupSchema } from "src/services/validations";

const useSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singupSchema),
  });
  const router = useRouter();

 

  const onsubmit = async (newData) => {
    try {
      let { data } = await axios.post("/api/user/signup", newData);
      reset();
      toast.success("User created successfully");
      router.push(path.login);
    } catch (err) {
      if (err.response.data.error.code == 11000) {
        toast.error("User already exists");
      }
      console.log(err);
    }
  };

  const handleGithubSignin = () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  const handleGoogleSignin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return {
    handleGithubSignin,
    handleGoogleSignin,
    onsubmit,
    register,
    handleSubmit,
    errors,
    status,
    router,
  };
};

export default useSignup;
