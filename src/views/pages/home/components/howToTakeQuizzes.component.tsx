import React from "react";

export default function HowToTakeQuizzes() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image (2/3 width) */}
      <div className="hidden md:flex md:w-2/3">
        <img
          src="/howToTakeQuizzesIMG.jpg"
          alt="Taking Quizzes Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Explanation (1/3 width) */}
      <div className="flex flex-col items-center justify-center bg-gray-50 p-8 md:w-1/3">
        <div>
          <h2 className="text-3xl font-bold mb-4">How to Take Quizzes</h2>
          <p className="mb-4 text-lg">
            Taking quizzes is straightforward and fun! Here’s how you can do it:
          </p>
          <ol className="list-decimal list-inside text-lg space-y-2">
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
