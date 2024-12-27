"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Back() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-200 shadow-md">
      {/* Logo Section */}
      <div>
        <button
          onClick={() => router.push("/")}
          className="text-xl font-semibold text-purple-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
