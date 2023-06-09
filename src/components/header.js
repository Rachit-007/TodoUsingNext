import { path } from "@constants/index";
import { signOut } from "next-auth/react";
import Link from "next/link";
import useHeader from "src/talons/useHeader";
import { TbLogout } from "react-icons/tb";
import { toast } from "react-hot-toast";

const Header = () => {
  const { router, session, status } = useHeader();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex p-5 justify-between md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">TODO List</span>
        </a>
        <nav className="md:ml-auto  items-center  justify-center text-lg">
          {status === "authenticated" && (
            <div
              className="flex items-center justify-center hover:cursor-pointer"
              onClick={() => {
                try {
                  signOut({
                    callbackUrl: "http://localhost:3000/login",
                    redirect: false,
                  });
                  router.push(path.login);
                  toast.success("Logout successfull");
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <Link
                href={path.login}
                className="px-2 hover:text-gray-900 cursor-pointer"
              >
                Logout
              </Link>
              <TbLogout className="text-2xl" />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
