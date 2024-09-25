"use client";
import Stepper from "@/components/auth/stepper";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FcReadingEbook } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";

const Register = () => {
  const [step, setStep] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    organizationName: "",
    organizationEmail: "",
    websiteURL: "",
  });
  // const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className={`mt-8 flex h-screen items-center justify-center mb-10 max-sm:px-7 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="mb-10">
            <Stepper step={step} />
          </div>
          <h1 className="text-2xl text-center font-bold leading-tight  tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Identify Your Account Type
          </h1>

          <form
            className="space-y-4 md:space-y-6 block max-w-sm mx-auto"
            onSubmit={handleSubmit}
          >
            {step === 0 && (
              <>
                <div className="flex justify-center mt-10 flex-col items-center">
                  <div
                    onClick={() =>
                      setFormData({ ...formData, userType: "Developer" })
                    }
                    className={` ${
                      formData.userType === "Developer"
                        ? "border-lightPrimary"
                        : ""
                    } p-2 mb-5 w-2/3 text-center duration-300 cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
                  >
                    <FcReadingEbook size={50} className="mx-auto" />
                    <h5 className="my-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Developer
                    </h5>
                    <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Go to this step by step guideline
                    </p>
                    <input
                      checked={formData.userType === "Developer"}
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 duration-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div
                    onClick={() =>
                      setFormData({ ...formData, userType: "Organization" })
                    }
                    className={` ${
                      formData.userType === "Organization"
                        ? "border-lightPrimary"
                        : ""
                    } p-2 w-2/3 text-center duration-300 cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
                  >
                    <FcPositiveDynamic size={50} className="mx-auto" />
                    <h5 className="my-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Organization
                    </h5>
                    <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Go to this step by step guideline
                    </p>
                    <input
                      checked={formData.userType === "Organization"}
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 duration-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    placeholder="Type a strong password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    value={formData.ConfirmPassword}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                {/* Organization Name */}
                <div className="mb-4">
                  <label
                    htmlFor="organizationName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    placeholder="Enter your organization's name"
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                {/* Organization Email */}
                <div className="mb-4">
                  <label
                    htmlFor="organizationEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Official Email Address
                  </label>
                  <input
                    type="email"
                    id="organizationEmail"
                    name="organizationEmail"
                    placeholder="Enter your organization’s email address"
                    value={formData.organizationEmail}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                {/* Website URL */}
                <div className="mb-4">
                  <label
                    htmlFor="websiteURL"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="websiteURL"
                    name="websiteURL"
                    placeholder="Enter your organization's website URL"
                    value={formData.websiteURL}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </>
            )}

            <div className="flex justify-between">
              {step > 0 && (
                <button
                  type="button"
                  className="w-1/3  text-lightPrimary mt-3 bg-white border border-lightPrimary dark:bg-primary hover:bg-lightPrimary hover:text-white duration-300  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              {step < 2 ? (
                <button
                  type="button"
                  className={`${step < 1 ? "w-full" : "w-1/3 "} ${
                    !formData.userType && step === 0
                      ? "bg-gray-300  text-white"
                      : "bg-lightPrimary dark:bg-primary text-white "
                  }  hover:bg-primary-700 mt-3 duration-300 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 `}
                  onClick={handleNext}
                  disabled={!formData.userType && step === 0}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-1/3 text-white mt-3 bg-lightPrimary dark:bg-primary hover:bg-primary-700  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
                >
                  Register
                </button>
              )}
            </div>
          </form>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
