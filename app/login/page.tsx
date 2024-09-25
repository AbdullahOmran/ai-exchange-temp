"use client";
import Image from "next/image";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  // const darkMode = useSelector((state) => state.darkMode.darkMode);

  // async function handleFormSubmit(ev) {
  // ev.preventDefault();
  // setLoginInProgress(true);
  // await signIn("credentials", { email, password, callbackUrl: "/" });
  // setLoginInProgress(false);
  // }
  return (
    <>
      <section
        className={`flex justify-center items-center  ${
          darkMode ? "dark" : ""
        }`}
      >
        <section className=" w-1/2 md:max-lg:w-full max-sm:w-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link
              href={"/"}
              className="flex items-center mb-6 text-2xl font-semibold text-lightPrimary dark:text-white"
            >
              <div className=" border-4 mr-4 rounded-full w-14 h-14 overflow-hidden flex-shrink-0">
                <Image
                  className="object-cover w-full h-full"
                  src="/robot6.jpg"
                  width={150}
                  height={150}
                  alt={"alt"}
                />
              </div>
              AI EXCHANGE
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  // onSubmit={handleFormSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      // value={email}
                      // disabled={loginInProgress}
                      onChange={(ev) => setEmail(ev.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      // value={password}
                      // disabled={loginInProgress}
                      onChange={(ev) => setPassword(ev.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      href={"#"}
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="my-4 text-center text-gray-500">
                    or login with provider
                  </div>
                  <button
                    type="button"
                    // onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="w-full text-white bg-lightPrimary dark:bg-primary flex gap-3 justify-center items-center focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center"
                  >
                    <Image
                      src={"/google.png"}
                      alt={""}
                      width={24}
                      height={24}
                    />
                    Login with google
                  </button>
                  <button
                    type="submit"
                    className="w-full text-white bg-lightPrimary dark:bg-primary  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      href={"/register"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
