import { Login } from "@components/login/login";
import { path } from "@constants/index";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
    console.log(status);
    if (status === "authenticated") {
      router.push(path.root);
    }
  }, [status]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default login;
