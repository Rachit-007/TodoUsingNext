import { path } from "@constants/index";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import useLogin from "src/talons/useLogin";
import { ErrorMessage } from "@hookform/error-message";

export const Login = () => {
  const {
    onsubmit,
    handleGithubSignin,
    handleGoogleSignin,
    register,
    handleSubmit,
    errors,
  } = useLogin();

  return (
    <section className="text-gray-600 body-font">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full  md:mt-0">
        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
          Login
        </h2>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => (
                <p className="text-sm pt-1 text-red-600">{message}</p>
              )}
            ></ErrorMessage>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => (
                <p className="text-sm pt-1 text-red-600">{message}</p>
              )}
            ></ErrorMessage>
          </div>
          <div className="relative flex items-center justify-center w-full my-2 border border-t">
            <div className="absolute px-5 bg-gray-100 font-semibold">OR</div>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button
              onClick={() => handleGoogleSignin()}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="px-2">Google</p>
            </button>
            <button
              onClick={() => handleGithubSignin()}
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p className="px-2">GitHub</p>
            </button>
          </div>
          <button className="text-white bg-indigo-500 border-0 w-full py-2 mt-5 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Login
          </button>
        </form>
        <p className="text-s text-gray-500 mt-3 ">
          Didn't have an account ,{" "}
          <Link href={path.signup} className="text-gray-800">
            Signup here
          </Link>
        </p>
      </div>
    </section>
  );
};
