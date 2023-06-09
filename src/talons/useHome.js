import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useHome = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return { session, status, router };
};

export default useHome;
