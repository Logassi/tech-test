"use client";
import useAuthStore from "@/stores/user.store";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavBar() {
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();
  // const user = {
  //   name: "",
  // };

  // const user = false;

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-200 shadow-md">
      {/* Logo Section */}
      <div>
        <button
          onClick={() => router.push("/")}
          className="text-xl font-semibold text-purple-600"
        >
          LOGO
        </button>
      </div>

      {/* User-Specific Actions */}
      {user ? (
        <div className="flex items-center space-x-4">
          {/* <p className="text-gray-700">Welcome, {user.name}</p> */}
          <p className="text-gray-700">Welcome, {user.userName}</p>

          {/* Logout Button */}
          <button
            className="bg-indigo-700 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              clearAuth();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          {/* Not Logged In */}
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
          <button
            className="bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-bold py-2 px-4 rounded-full"
            onClick={() => router.push("/login")}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
}
