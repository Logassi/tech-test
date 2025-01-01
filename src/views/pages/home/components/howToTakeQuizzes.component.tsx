import React from "react";

export default function HowToTakeQuizzes() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image (2/3 width) on Laptop, Hidden on Smartphone */}
      <div className="hidden md:flex md:w-2/3">
        <img
          src="/howToTakeQuizzesIMG.jpg"
          alt="Taking Quizzes Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Explanation (1/3 width) */}
      <div className="relative flex flex-col items-center justify-center bg-gray-50 p-8 md:w-1/3">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 md:hidden"
          style={{ backgroundImage: "url('/howToTakeQuizzesIMG.jpg')" }}
        ></div>
        <div className="relative z-10 text-center md:text-left text-gray-600">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">
            How to Take Quizzes
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            Taking quizzes is straightforward and fun! Here’s how you can do it:
          </p>
          <ol className="list-decimal list-inside text-lg space-y-2 text-gray-600">
            <li>
              Navigate to the "Take Quiz" section from the navigation bar.
            </li>
            <li>Select a quiz from the available list or search for one.</li>
            <li>Answer the questions by choosing the correct options.</li>
            <li>Submit the quiz and review your score and feedback.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
