import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const useHeader = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return { router, session, status };
};

export default useHeader;
