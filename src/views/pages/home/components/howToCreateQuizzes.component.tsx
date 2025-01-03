import React from "react";

export default function HowToCreateQuizzes() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Explanation (1/3 width) */}
      <div className="relative flex flex-col items-center justify-center bg-gray-50 p-8 md:w-1/3">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 md:hidden"
          style={{ backgroundImage: "url('/howToCreateQuizzesIMG.jpg')" }}
        ></div>
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">
            How to Create Quizzes
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            Follow these simple steps to create your own quizzes:
          </p>
          <ol className="list-decimal list-inside text-lg space-y-2 text-gray-600">
            <li>Go to the "Create Quiz" section from the navigation bar.</li>
            <li>Provide a title and description for your quiz.</li>
            <li>
              Add questions with multiple options and select the correct
              answers.
            </li>
            <li>
              Preview and publish the quiz to make it accessible to others.
            </li>
          </ol>
        </div>
      </div>

      {/* Right Side - Image (2/3 width) */}
      <div className="hidden md:flex md:w-2/3">
        <img
          src="/howToCreateQuizzesIMG.jpg"
          alt="Creating Quizzes Poster"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
