"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Choices() {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="text-xl font-semibold mb-8">Dashboard</div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Create Quiz Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => router.push("/create-quiz")}
              className="w-60 h-60 bg-gray-300 border border-gray-500 rounded-xl shadow-2xl overflow-hidden hover:opacity-90 transition duration-300"
            >
              <img
                src="/createQuizIMG.jpg"
                alt="Create Quiz"
                className="w-full h-full object-cover"
              />
            </button>
            <p className="mt-4 text-center text-lg font-medium text-gray-700">
              Create Quiz
            </p>
          </div>

          {/* Take Quiz Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => router.push("/take-quiz")}
              className="w-60 h-60 bg-gray-300 border border-gray-500 rounded-xl shadow-2xl overflow-hidden hover:opacity-90 transition duration-300"
            >
              <img
                src="/takeQuizIMG.jpg"
                alt="Take Quiz"
                className="w-full h-full object-cover"
              />
            </button>
            <p className="mt-4 text-center text-lg font-medium text-gray-700">
              Take Quiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
