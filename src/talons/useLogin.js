import { path } from "@constants/index";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { loginSchema } from "src/services/validations";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleGithubSignin = () => {
    try {
      signIn("github", { callbackUrl: "http://localhost:3000" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignin = () => {
    try {
      signIn("google", { callbackUrl: "http://localhost:3000" });
    } catch (err) {
      console.log(err);
    }
  };

  const onsubmit = async ({ email, password }) => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result.ok) {
      router.push(path.root);
      toast.success("Login successful");
    } else {
      toast.error("invalid credentials");
    }
  };

  return {
    onsubmit,
    handleGithubSignin,
    handleGoogleSignin,
    register,
    handleSubmit,
    errors,
    session,
    router,
    status,
  };
};

export default useLogin;
