"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ILogin from "../types";
import LoginSchema from "./schema";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async (params: ILogin) => {
    try {
      const response = await axios.post("/api/login", params);

      console.log(response);

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You can now log in with your credentials.",
        showConfirmButton: true,
      }).then(() => {
        router.push("/dashboard"); // Redirect to login page after success
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white py-10 px-6 rounded-lg shadow-lg">
      {/* Logo */}
      <h1
        className="text-4xl font-bold mb-6 cursor-pointer hover:opacity-90 transition"
        onClick={() => router.push("/")}
      >
        Logo
      </h1>

      {/* Form Header */}
      <h2 className="text-2xl font-semibold mb-4">Welcome Back</h2>
      <p className="mb-8 text-gray-200">
        Good to see you again! Log in to unlock your next adventure!
      </p>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md">
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Email</label>
              <Field
                type="text"
                name="email"
                className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-semibold ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 transition"
              } text-white`}
            >
              {isSubmitting ? "Logging-in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
